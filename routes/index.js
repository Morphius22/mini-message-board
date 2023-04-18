var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages });
});

// GET new message form page
router.get("/new", (req, res) => {
  res.render("form");
});

// POST new message from submitted form
router.post("/new", (req, res) => {
  messages.push({
    user: req.body.authorsName,
    text: req.body.message,
    added: new Date(),
  });
  console.log("here are the current messages:" + messages);
  res.redirect("/");
});

module.exports = router;
