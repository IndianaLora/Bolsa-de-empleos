import { Injectable } from '@nestjs/common';
import { connection } from 'src/database/database';

@Injectable()
export class JobsService {

async getJobs(){
    const conn = await connection();
    const query = await conn.query('SELECT * FROM  jobs');
    return query[0];
}

async createJob(Job:Job){
    const conn = await connection();
    const query = await conn.query('INSERT INTO jobs (job_title,job_category,job_type,job_position,company_name,company_logo,company_location,url,user_id) VALUES (?,?,?,?,?,?,?,?,?)', 
                                                    [Job.title,Job.category,Job.type,Job.position,Job.companyName,Job.companyLogo,Job.companyLocation,Job.url,Job.userID]);
    return "job created";
}

async getCategory(){
    const conn = await connection();
    const query = await conn.query('SELECT * FROM jobs_category');
    return query[0];
}

}
