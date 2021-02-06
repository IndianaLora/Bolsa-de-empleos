import { Injectable } from '@nestjs/common';
import { connection } from 'src/database/database';

@Injectable()
export class JobsService {

async getJobs(){
    const conn = await connection();
    const query = await conn.query('SELECT JOBS.id, JOBS.job_title, JOBS_CATEGORY.category, JOBS_TYPES.type , JOBS.job_position, JOBS.company_name, JOBS.company_logo, JOBS.company_location, JOBS.url, JOBS.created_At FROM JOBS  INNER JOIN JOBS_CATEGORY ON JOBS.job_category = JOBS_CATEGORY.id INNER JOIN JOBS_TYPES ON JOBS.job_type = JOBS_TYPES.id');
    return query[0];
}

async getCategory(){
    const conn = await connection();
    const query = await conn.query('SELECT * FROM JOBS_CATEGORY');
    return query[0];
}

async getTypes(){
    const conn = await connection();
    const query = await conn.query('SELECT * FROM JOBS_TYPES');
    return query[0];
}

async createJob(Job:Job){
    const conn = await connection();
    const query = await conn.query('INSERT INTO JOBS (job_title,job_category,job_type,job_position,company_name,company_logo,company_location,url,user_id) VALUES (?,?,?,?,?,?,?,?,?)', 
                                                    [Job.title,Job.category,Job.type,Job.position,Job.companyName,Job.companyLogo,Job.companyLocation,Job.url,Job.userID]);
    return "job created";
}



}
