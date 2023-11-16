const express=require("express") 
const router=express.Router() 
const studentController=require("../controllers/studentController") 
const Student=require("../models/Student") 
const jwt=require("jsonwebtoken") 
const Redis = require("ioredis");
const redisClient = new Redis();

const verifyAccessToken = async (request, response, next) => {
    // let jwtToken = await redisClient.get("authorizationToken");
    // // // let jwtToken=
    // // // console.log(jwtToken);
    // // // if (jwtToken === null) {
    // // //   response.status(401);
    // // //   response.send("Invalid Access Token");
    // // // } else {
    // // //   jwt.verify(jwtToken, "AccessToken", async (error, playLoad) => {
    // // //     if (error) {
    // // //       response.status(401);
    // // //       response.send("Invalid Access Token");
    // // //     } else {
    // // //       next();
    // // //     }
    // //   });
    // } 
  let jwtToken;
  const authHeader = request.headers["authorization"];
  if (authHeader !== undefined) {
    jwtToken = authHeader.split(" ")[1];
  }
  if (jwtToken === undefined) {
    response.send("Invalid Access token");
  }
  else {
    jwt.verify(jwtToken, "AccessToken", async (err, playLoad) => {
      if (err) {
        response.send("Invalid access");
      } else {
        // console.log(payload);
        request.email = playLoad.email;
        next();
      }
    });
  }
  };

router.post("/add",verifyAccessToken,studentController.createStudent) 
router.get("/allStudents",verifyAccessToken,studentController.getStudent)
router.get("/student/:id",verifyAccessToken,studentController.singleStudent)
router.put("/update/:id",verifyAccessToken,studentController.updateStudent)
router.delete("/delete/:id",verifyAccessToken,studentController.deleteStudent)
module.exports=router 