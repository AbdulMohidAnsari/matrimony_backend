const usermodel = require("../models/user");
const validator = require("validator");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    try { 
        let { email, mobile, password, confirmpassword, gender, profilefor } =
    req.body;
  if (
    validator.isEmpty(email) ||
    validator.isEmpty(mobile) ||
    validator.isEmpty(password) ||
    validator.isEmpty(confirmpassword) ||
    validator.isEmpty(gender) ||
    validator.isEmpty(profilefor) ||
    validator.isEmail(email) ||
    validator.isLength(password, { min: 8 })
  ) {
    throw new Error("invalid inputs");
  }

  step = 1.5;
  if (password !== confirmpassword) {
    let status = 403;
    throw new Error("password and confirm password must be same !");
  }
  step = 2;
  let isExist = await new usermodel.findOne({ email: email, mobile: mobile });

  if (isExist) {
    let status = 403;
    throw new Error("user Exists !");
  }
const hashedpassword = await bcrypt.hash(password,12)

usermodel.create({email:email,mobile:mobile,password:hashedpassword,gender:gender,profilefor:profilefor,})
        
    } catch (error) {
        
    }
 };
