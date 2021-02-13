"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("../../database/database");
let JobsService = class JobsService {
    async getJobs() {
        const conn = await database_1.connection();
        const query = await conn.query('SELECT JOBS.id, JOBS.job_title, JOBS_CATEGORY.category, JOBS_TYPES.type , JOBS.job_position, JOBS.company_name, JOBS.company_logo, JOBS.company_location, JOBS.url, JOBS.created_At FROM JOBS  INNER JOIN JOBS_CATEGORY ON JOBS.job_category = JOBS_CATEGORY.id INNER JOIN JOBS_TYPES ON JOBS.job_type = JOBS_TYPES.id');
        return query[0];
    }
    async getCategory() {
        const conn = await database_1.connection();
        const query = await conn.query('SELECT * FROM JOBS_CATEGORY');
        return query[0];
    }
    async getTypes() {
        const conn = await database_1.connection();
        const query = await conn.query('SELECT * FROM JOBS_TYPES');
        return query[0];
    }
    async createJob(Job) {
        const conn = await database_1.connection();
        const query = await conn.query('INSERT INTO JOBS (job_title,job_category,job_type,job_position,company_name,company_logo,company_location,url,user_id) VALUES (?,?,?,?,?,?,?,?,?)', [Job.title, Job.category, Job.type, Job.position, Job.companyName, Job.companyLogo, Job.companyLocation, Job.url, Job.userID]);
        return "job created";
    }
};
JobsService = __decorate([
    common_1.Injectable()
], JobsService);
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map