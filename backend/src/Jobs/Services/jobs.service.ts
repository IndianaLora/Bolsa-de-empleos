import { Injectable } from '@nestjs/common';
import { connection } from 'src/database/database';

@Injectable()
export class JobsService {

async getJobs(){
    const conn = await connection();
    const query = await conn.query('SELECT * FROM JOBS');
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
