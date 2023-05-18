const userModel = require('../models/user')
const bcrypt = require('bcryptjs');

module.exports = {
    signin : (req,res)=>{
        try {
            console.log(req.body);
            userModel.findOne({ email: req.body.email }, async(err, result) => {
              if (err) {
                return res.status(500).send({
                  responseMessage: "Internal server error",
                  responseCode: 501,
                  error: err,
                });
              } else if (result) {
                console.log(result);
                return res.status(500).send({
                  responseMessage: "email already exists",
                  responseCode: 401,
                  error: [],
                });
              } else {
                // let otp = common.generateOtp();
                // console.log(otp);
                // req.body.otp = otp;
        
                // var time = +new Date();
                // let currentTime = time + 180000;
                // req.body.otpTime = currentTime;
        
                
                let password = await bcrypt.hashSync(req.body.password);
        
            //    console.log(req.body.password);
            //    console.log(typeof req.body.password);
                req.body.password = password;
                userModel(req.body).save((err1, res1) => {
                  if (err1) {
                    return res.status(500).send({
                      responseMessage: "Internal server error",
                      responseCode: 501,
                      error: err1,
                    });
                  } else {
                    return res.status(200).send({
                      responseMessage: "Signup success",
                      responseCode: 200,
                      result: res1,
                    });
                  }
                });
              }
            });
          } catch (error) {
            console.log(error);
            return res.status(501).send({
              responseMessage: "Something went wrong",
              responseCode: 501,
              error: error,
            });
          }
}
}