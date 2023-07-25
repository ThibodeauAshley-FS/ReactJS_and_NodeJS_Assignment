const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User  = require("../../models/user");
const { createUser, getUser} = require("../../controllers/userController");

router.get("/", getUser);

router.post("/", createUser);


module.exports = router;