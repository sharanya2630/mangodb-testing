// // const {describe, it}=require("mocha");
// let chai=require("chai");
// let chaiHttp=require("chai-http");
// // // let server=require("../controllers/studentControlle"); 
// // // const server=require("../routes/studentRoute")
// // const { response } = require("express");
// const server=require("../routes/studentRoute");

// chai.should();
// chai.use(chaiHttp); 

// // describe("student on API", ()=>{
// //     describe("student on API", ()=>{
// //         it("it should GET all the allStudents", (done)=>{
// //             this.timeout(3000)
// //             chai.request(server)
// //                 .get("/allStudents")
// //                 .end((err,response)=>{
// //                     response.should.have.status(200);
// //                     response.body.should.be.a("array");
// //                     done();
// //                 }) 
// //         }) 
// //         it("it should NOT GET all the tasks", (done)=>{
// //             chai.request(server)
// //                 .get("/allStudents")
// //                 .end((err,response)=>{
// //                     response.should.have.status(404);
// //                     done();
// //                 });
// //         });
        
// //     });
    
// // })

// // // // it("it should GET all the tasks", (done)=>{
// // // //     chai.request(server)
// // // //         .get("student")
// // // //         .end((err,response)=>{
// // // //             response.should.have.status(200);
// // // //             response.body.should.be.a("array");
// // // //             response.body.should.have
// // // //             done();
// // // //         })
// // // // })  







// const chai = require("chai");
// const chaiHttp = require("chai-http");
// chai.use(chaiHttp);
// const expect = chai.expect; 

// describe("API Tests", () => {
//     // before(function (done) {
//     //   // db is taking long time to connect , so we are using timeout as will throw err if we not mention this time
//     // //   this.timeout(10000);
  
//     //   dbConnection
//     //     .then(() => {
//     //       console.log("Db connection while testing");
//     //       done();
//     //     })
//     //     .catch((error) => {
//     //       console.error("Error connecting to the database:", error);
//     //       done(error);
//     //     });
//     // });
  
//     // after(async () => {
//     //   try {
//     //     console.log("DB Closed");
//     //   } catch (error) {
//     //     console.error("Error closing the database:", error);
//     //   }
//     // });
  
//     describe("GET / Getting all users array", () => {
//       it("should get all users", function (done) {
//         //   taking time to get from db
//         // this.timeout(3000); // Adjust the time based on the output getting
  
//         chai
//           .request(app)
//           .get("/")
//           .end((err, res) => {
//             if (err) {
//               console.error("Error in the test:", err);
//               return done(err);
//             }
//             expect(res).to.have.status(200);
//             expect(res.body).to.be.an("array");
//             console.log(res.body);
//             done();
//           });
//       });
//     });
//   }); 





// const { describe, it } = require('mocha');
// const { expect } = require('chai');

// describe('Your Test Suite', function(){
//     describe("student on API", function(){
//         it.only("it should GET all the allStudents", function(done){
//             this.timeout(30000);

//                 chai.request(server)
//                 .get("/allStudents")
//                 .end((err,response)=>{
//                     response.should.have.status(200);
//                     response.body.should.be.an("array");
//                     done();
//                 }) 
        // }) 
    //     it("it should NOT GET all the tasks", (done)=>{
    //         chai.request(server)
    //             .get("/allStudents")
    //             .end((err,response)=>{
    //                 response.should.have.status(404);
    //                 done();
    //             });
    //     });
        
    // });
    
// });   



const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;
const { dbConnection, app } = require("../index");

describe("API Tests", () => {
  before(function (done) {
    // db is taking long time to connect , so we are using timeout as will throw err if we not mention this time
    this.timeout(10000);

    dbConnection
      .then(() => {
        console.log("Db connection while testing");
        done();
      })
      .catch((error) => {
        console.error("Error connecting to the database:", error);
        done(error);
      });
  });

  after(async () => {
    try {
      console.log("DB Closed");
    } catch (error) {
      console.error("Error closing the database:", error);
    }
  });

  describe("GET / Getting all users array", () => {
    it("should get all users", function (done) {
      //   taking time to get from db
      this.timeout(3000); // Adjust the time based on the output getting

      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          if (err) {
            console.error("Error in the test:", err);
            return done(err);
          }
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          //   console.log(res.body);
          done();
        });
    });
  });
});