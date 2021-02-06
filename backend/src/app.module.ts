import { Module } from '@nestjs/common';
import { JobsController } from './Jobs/Controllers/jobs.controller';
import { LoginController } from './Users/Controllers/users.controller';
import { JobsService } from './Jobs/Services/jobs.service';
import { LoginService } from './Users/Services/users.service';


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
