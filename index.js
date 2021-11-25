var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var morgan = require("morgan");
var User = require("./models/User");
const views = __dirname + "/views/";

const uri = "mongodb+srv://nico:123321@cluster0.rtak1.mongodb.net/testeDB?retryWrites=true&w=majority";

const MongoStore = require('connect-mongo')

var app = express();

var sessionID
var usernameView



app.use(express.static(__dirname + '/public'))

// set our application port
app.set("port", 4000);

app.set("view engine", "ejs");

// set morgan to log info about our requests for development use.
app.use(morgan("dev"));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
  session({
    key: 'user_sid',
    secret: "somerandonstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
    
    store: MongoStore.create({
      mongoUrl: uri,
      url: uri, //YOUR MONGODB URL
      ttl: 14 * 24 * 60 * 60,
      autoRemove: 'native' 
  })
  })
);







// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    console.log('logado')
    usernameView = req.session.user.username
    sessionID = 'YES'
    res.redirect('/home')
  } else {
    sessionID = 'NOT'
    next();
  }
};

app.get("/home", (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    usernameView = req.session.user.username
    res.render(views + 'home', {sessionID, usernameView})
  } else {
    res.redirect("/");
  }
  
});

// route for Home-Page
app.get("/", sessionChecker, (req, res) => {
  
  res.render(views + 'index', {sessionID, usernameView})
  console.log(sessionID)
  console.log(req.session.user)
});

app.get("/plantas",  (req, res) => {
  res.render(views + 'plantas', {sessionID, usernameView})
});

app.get("/agapantos",  (req, res) => {
  res.render(views + 'plantas/agapantos', {sessionID, usernameView})
});
app.get("/amora",  (req, res) => {
  res.render(views + 'plantas/amora', {sessionID, usernameView})
});
app.get("/camarao-vermelho", (req, res) => {
  res.render(views + 'plantas/camarao-vermelho', {sessionID, usernameView})
});
app.get("/jabuticabeira", (req, res) => {
  res.render(views + 'plantas/jabuticabeira', {sessionID, usernameView})
});
app.get("/jiboia", sessionChecker, (req, res) => {
  res.render(views + 'plantas/jiboia', {sessionID, usernameView})
});

// route for user signup
app
  .route("/signup")
  .get(sessionChecker, (req, res) => {
    res.redirect('/');
  })
  .post((req, res) => {

    var user = new User({
      username: req.body.username,
      email: req.body.email,
      password:req.body.password,
    });
    user.save((err, docs) => {
      if (err) {
        res.redirect("/");
      } else {
          console.log(docs)
        req.session.user = docs;
        req.session.save(err => {
          if(err){
              console.log(err);
          } else {
              res.send(req.session.user) // YOU WILL GET THE UUID IN A JSON FORMAT
          }
      });
        
        
        res.redirect("/");
      }
    });
  });

// route for user Login
app
  .route("/login")
  .get(sessionChecker, (req, res) => {
    res.redirect('/')
  })
  .post(async (req, res) => {
    var username = req.body.username,
      password = req.body.password;

      try {
        var user = await User.findOne({ username: username }).exec();
        if(!user) {
          console.log('erro')
            res.redirect("/login");
        }
        user.comparePassword(password, (error, match) => {
            if(!match) {
              console.log('erroa')
              res.redirect("/login");
            }
        });
        req.session.user = user;

        res.redirect("/");
    } catch (error) {
      console.log(error)
    }
  });


// route for user logout
app.post("/logout", (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie("user_sid");
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

// start the express server
app.listen(app.get("port"), () =>
  console.log(`App started on port ${app.get("port")}`)
);
