let express = require("express");
let http = require("http");
var path = require("path");
var dotenv = require("dotenv");
let router = express.Router();

dotenv.config();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/shopit", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

var __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

const port = process.env.PORT || 5000;

app.get("/users", async (req, res) => {
  // let seller = req.query.seller || "";
  // let sellerFilter = seller ? { seller } : {};

  // let orders = await Order.find({ ...sellerFilter }).populate("user", "name");

  // res.send(orders);
  res.send({ project: "Magic Blocks" });
});

app.use(router);

const httpServer = http.Server(app);

httpServer.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
// app.listen(5000, () => {
//   console.log(`Server at http://localhost:${port}`);
// });
