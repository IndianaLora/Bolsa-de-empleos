import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('jobs')
export class JobsController {

@Get()
getJobs(): string{
    return 'Lista de empleos';
}

@Post()
createJob(@Body() Job:string){
    return Job;
}

}
