
const { where } = require('sequelize');
const User = require('../Modules/user.js');


exports.addUsers = async (req, res) => {
  try {

    if(!req.body.username){
      return res.status(400).json({error : "username  is required"})
    }if(!req.body.password){
      return res.status(400).json({error : "password is required"})
    }if(!req.body.email){
      return res.status(400).json({error : "email is required"})
    }if(!req.body.city){
      return res.status(400).json({error : "city is required"})
    }if(!req.body.mobile_no){
      return res.status(400).json({error : "mobile no is required"})
    }if(!req.body.country){
      return res.status(400).json({error : "country is required"})
    }if(!req.body.state){
      return res.status(400).json({error : "state is required"})
    }


    const emailUser = await User.findOne({ where: { email: req.body.email } })
    if (emailUser) {
      return res.status(400).json({ error : "Email is already registered" })
    }
    
    const usermobile = await User.findOne({where : {mobile_no : req.body.mobile_no}})
    if(usermobile){
      return res.status(400).json({error : "mobile no is already registered"})
    }
   

    let info = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      city: req.body.city,
      mobile_no :req.body.mobile_no,
      country : req.body.country,
      state : req.body.state
      
    };

    const user = await User.create(info);
    res.status(200).json({ message: "data inserted successfully", status :"success" , user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mesaage :"data not inserted",status : " fail ",error: "Internal server error" });
  }
};









