var express = require("express");
const cors = require("cors");
const router = express.Router();

// require("dotenv").config();

var app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/home", function (req, res) {
  console.log("Work");
  //   res.setHeader("Content-type", "text/html");
  let val = "Test";
  //   res.send({ val: "<div>A<h1>B</h1></div>" });
  res.json({ val: "Working" });
});

// Single routing
router.route("/user").get(function (req, res, next) {
  const responseData = {
    message: "Hello, GFG Learner",
    articleData: {
      articleName: "How to send JSON response from NodeJS",
      category: "NodeJS",
      status: "published",
    },
    endingMessage: "Visit Geeksforgeeks.org for more",
  };
  // res.json(responseData);
  res.json({ project: "Magic Blocks" });
});

router.route("/test").get((req, res) => {
  console.log("Hi");
  //   res.json("<div>A<h1>B</h1></div>");
  const responseData = {
    message: "Hello, GFG Learner",
    articleData: {
      articleName: "How to send JSON response from NodeJS",
      category: "NodeJS",
      status: "published",
    },
    endingMessage: "Visit Geeksforgeeks.org for more",
  };
  res.json(responseData);
  //
});

router.route("/post").get((req, res) => {
  console.log("Hi");
  res.send("<div>A<h1>B</h1></div>");
  //   res.send({ val: "<div>A<h1>B</h1></div>" });
  //
});

// router.get(
//   "/categories",
//   expressAsyncHandler(async (req, res) => {
//     const categories = await Product.find().distinct("category");
//     res.send(categories);
//   })
// );

app.use(router);

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});