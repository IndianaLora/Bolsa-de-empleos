import { Module } from '@nestjs/common';
import { JobsController } from './controllers/jobs/jobs.controller';
import { LoginController } from './controllers/login/login.controller';
import { JobsService } from './services/jobs/jobs.service';
import { LoginService } from './services/login/login.service';


@Module({
  imports: [],
  controllers: [
    LoginController,
    JobsController
  ],
  providers: [
    LoginService,
    JobsService
  ],
})
export class AppModule {}
