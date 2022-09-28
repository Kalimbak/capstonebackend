
import  Job  from "../models/jobSchema.js"
import dotenv from "dotenv"
// import {fileUpload} from "../utils/multer.js"





dotenv.config();

export async function getJob (req, res, next) {
    let job
    try {
        job = await Job.findById(req.params.id)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    res.job = job
    next()
}

export const createJob = async (req, res ) => {

    // const result = cloudinary.uploader.upload(req.file.path)
    // res.json(result)
// req.body.imageUrl = await fileUpload(req)

    const job =  Job({
      title: req.body.title,
      description: req.body.description,
    //   body: req.body.body,
    //   imageUrl: req.body.imageUrl,
      userId: req.body.userId,
    //   role: req.body.role
    });
   
    job.save().then(
      () => { 
        res.status(201).json({
          job: 'Article saved successfully!', job
        

        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };


export const getOneJob =(req, res, next) => {
    Job.findOne({
        _id: req.params.id
    }).then(
        (job) => {
                res.status(200).json(job)
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};


export const modifyJob = async (req, res, next) => {
    if(!req.body.title) res.job.title = req.body.title
    if(!req.body.content) res.job.content = req.body.content
    if(!req.body.body) res.job.body = req.body.body
    if(!req.body.imageUrl) res.job.imageUrl = req.body.imageUrl
    try {
        let id= req.params.id
        const updatedJob = await  Job.findByIdAndUpdate(id, req.body, {new:true})
        res.status(201).json({message: 'succesfully updated', updatedJob})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
   
};


export const deleteJob = (req, res, next) =>{
    Job.findOne({ _id: req.params.id }).then(
        (job) => {
            if (!job){
               return res.status(404).json({
                    error: new Error('No such job')
                });
            }
            Job.deleteOne({_id: req.params.id}).then(
                () => {
                    res.status(200).json({
                        job: 'Deleted'
                    });
                }
            ).catch(
                (error) => {
                   res.status(401).json({
                       error: error
                   });
                }
            );
        }
    );
    
};


export const getAllJobs= (req, res, next) => {
    Job.find().then(
        (jobs) => {
            res.status(200).json(jobs);
        }
    ).catch(
        (error) => {
            console.log(error);
            res.status(400).json({
                error: error
            });
        }
    );
   
    };




