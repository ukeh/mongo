var express = require('express');
var eddeRouter=express.Router();
var {studentModel}=require('../models/studentModel')
  
function route(nav){


    eddeRouter.route("/")
    .get((req,res)=>{
        res.render("edde.ejs",{nav,title:"Edit/Delete"});
    });

    eddeRouter.route('/update')
    .post((req,res)=>{        
        studentModel.findOneAndUpdate({admno:req.body.admno},req.body,(err,data)=>{
           if(err){
               res.json({status:err})
           }
           else{
               res.json({status:"Success"})
           }
        })
    })


    eddeRouter.route('/save')
    .post((req,res)=>{
        if(req.body.btn=="delete"){
            studentModel.deleteOne({admno:req.body.admnno},(err,data)=>{
                if(err){
                    res.json({status:"failed"});
                }
                else{
                    res.json({status:"Success"});
                }
            })
        }
       // console.log(req.body);
    })
    return eddeRouter;
}
module.exports=route;
