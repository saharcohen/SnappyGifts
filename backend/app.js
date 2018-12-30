const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Address = require("../backend/models/address");

var mongoDB = "mongodb://127.0.0.1/addresses";
mongoose.connect(mongoDB);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTION");
  next();
});

app.post("/new-address", (req, res) => {
  const AddressLine1 = req.body.address;
  const AddressLine2 =
    req.body.city + " " + req.body.state + " " + req.body.zipCode;

  axios
    .get("http://www.yaddress.net/api/address", {
      params: {
        AddressLine1: AddressLine1,
        AddressLine2: AddressLine2
      }
    })
    .then(response => {
      if (response.data.ErrorCode === 0) {
        const address = new Address({
          Name: req.body.firstName + " " + req.body.lastName,
          AddressLine1: AddressLine1,
          AddressLine2: AddressLine2,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber
        });
        address.save();
        res.send("Address Added");
      } else {
        res.send("Failed, try again");
      }
    });
});

app.get("/addresses", (req, res) => {
  Address.find().then(documents => {
      res.send(documents);
  });

});

app.listen(4200, () => console.log("My app listening on port 4200!"));
