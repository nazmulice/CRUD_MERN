const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const router = require("./src/routes/api");
const app = express();
const path = require('path');


// Connect to MongoDB
//mongodb+srv://nazmul000150:k5Cr8Uo1KRBzLZ9b@cluster0.ifzwlnw.mongodb.net/
mongoose
  .connect(
    "mongodb+srv://nazmul000150:k5Cr8Uo1KRBzLZ9b@cluster0.ifzwlnw.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex:true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(hpp());
app.use(bodyParser.json());

// Set CSP headers specifically if needed.
// app.use((req, res, next) => {
//   res.setHeader(
//     "Content-Security-Policy",
//     "script-src 'self' 'unsafe-inline';"
//   );
//   next();
// });

// Rate limiting
app.use(
  "/api/v1",
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes, limit each IP to 100 request
    max: 100,
  })
);


//frontend connected
app.use(express.static('client/dist'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

// Routes
app.use("/api/v1", router);


//home route
app.get("/", (req, res) => {
  res.send("Hello home page");
});
// Error handling
app.use((err, req, res, next) => {
  console.error("An error occurred:", err);
  res.status(500).send("Something broke!");
});


module.exports = app;
