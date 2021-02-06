import { Body, Controller, Get, Post } from '@nestjs/common';
import { Job } from '../Dto/jobs.dto';
import { JobsService } from '../Services/jobs.service';

@Controller('jobs')
export class JobsController {

constructor(private Jobs: JobsService){}

@Get()
getJobs(){
    return this.Jobs.getJobs();
}

@Get('/category')
getCategory(){
    return this.Jobs.getCategory();
}

@Post()
createJob(@Body() Job:Job){
    return this.Jobs.createJob(Job);
}

}
