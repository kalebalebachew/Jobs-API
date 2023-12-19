const Job = require('../models/Jobs')
const express = require('express')
const app = require('express')
const Jobs = require('../models/Jobs')


//Create a Job
app.post('/createJob',(req,res) =>{

   const {company, position} = req.body
    Jobs.create({
        company: company,
        position: position,

}).then(() =>{
    res.json('Job created')
    }).catch((err) =>{
    if(err){
        res.status(400).json({error: err})
    }
   })
})
// Delete a Job
app.post('/deleteJob',(req,res) =>{

    const {jobId} = req.body

    Jobs.findByIdAndDelete(jobId).then(
        () =>{
            res.json('Job deleted')
        }
    ).catch((err) =>{
        if(err){
            res.status(400).json({ error: err })
        }
    })
})
//Update a Job
app.post('/updateJob', (req, res) => {
    const { jobId, updatedData } = req.body
  
   
    Jobs.findByIdAndUpdate(jobId, updatedData, { new: true })
      .then((updatedJob) => {
        if (!updatedJob) {
          return res.status(404).json({ error: 'Job not found' })
        }
  
        res.json(updatedJob)
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err })
        }
      });
  });
  //Get All the Jobs
 app.get('/getAllJobs', (req, res) => {
    
    Jobs.find({})
      .then((jobs) => {
        res.json(jobs)
      })
      .catch((err) => {
        res.status(500).json({ error: err })
      })
  })
  //Get a Job

  app.get('/getJob',(req,res) =>{
     

  })

  
  






