var express = require("express");
var router = express.Router();
const Message = require("../models/messages");

/* GET home page. */
router.get("/", function (req, res, next) {
  Message.find()
    .sort({ added: -1 })
    .limit(10)
    .then((messages, err) => {
      if (err) {
        console.log(err);
      }
      res.render("index", { messages });
      console.log(messages);
    });
});

// GET new message form page
router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  console.log(req.body);
  const newMessage = new Message({
    text: req.body.message,
    user: req.body.authorsName,
    added: new Date(),
  });

  console.log(newMessage);

  newMessage
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
