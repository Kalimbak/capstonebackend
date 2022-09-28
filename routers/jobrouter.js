import { getJob, createJob , getOneJob, modifyJob, deleteJob, getAllJobs } from "../controllers/job.js";
import express from "express";

const router = express.Router();


router.get('/job', getAllJobs);

router.post('/jobs',  createJob);

router.get('/jobs/:id',  getOneJob);

router.patch('/jobs/:id', getJob,  modifyJob);

router.delete('/jobs/:id', deleteJob);

export default router;