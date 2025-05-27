const { default: axios } = require("axios");
const { oauth2Client } = require("../utils/googleConfig");
const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.googleLogin = async(req,res) =>{
    const code = req.query.code;
    console.log(code);
    try {
        console.log("inside try");
        const googleResponse = await oauth2Client.getToken(code);
        console.log("googleResponse  ",googleResponse.tokens);
        oauth2Client.setCredentials(googleResponse.tokens);

        // Extract the Google access token
        const googleAccessToken = googleResponse.tokens.access_token;

        const userResponse = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`
        )
        const {email,name,picture} = userResponse.data;
        console.log("userresponse =====",userResponse.data);
        let User = await UserModel.findOne({email});
        if(!User){
            User = await UserModel.create({
                name,email,picture
            })
        }

        console.log()
        return res.status(200).json({
            message : "Success",
            googleAccessToken,
            User
        })
    } catch (error) {
        console.log("error",error);
        
        res.status(500).json({
            message : "Internal Server Error : "
        })
        
    }

}
