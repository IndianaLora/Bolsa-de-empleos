const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const port = 3001;
const prisma = new PrismaClient();

app.use(cors());

app.get("/api/job-types", async (req, res) => {
  const jobTypes = await prisma.jobType.findMany();
  res.send(jobTypes);
});

app.get("/api/job-categories", async (req, res) => {
  const jobCategorys = await prisma.jobCategory.findMany();
  res.send(jobCategorys);
});

app.get("/api/jobs", async (req, res) => {
  const page = Math.max(parseInt(req.query.page, 10), 1); //10 sistema decimal

  const jobs = await prisma.job.findMany({
    skip: parseInt((page - 1) * 10),
    take: 10,
  });
  res.send(jobs);
});

app.use(bodyParser.json());

app.post("/api/jobs", async (req, res) => {
  console.log(req.body);
  const jobs = await prisma.job.create({
    data: {
      title: req.body.title,
      position: req.body.position,
      companyName: req.body.companyName,
      companyLogo: req.body.companyLogo || "",
      companyLocation: req.body.companyLocation,
      url: req.body.url,
      createdAt: new Date(),
      userId: 1, //todo replace this
      categoryId: req.body.categoryId,
      typeId: req.body.typeId,
    },
  });
  res.send(jobs);
});

app.use(bodyParser.json());

app.post("/api/users/register", async (req, res) => {
  console.log(req.body);
  const userRegister = await prisma.user.create({
    data: {
      username: req.body.data.username,
      password: req.body.data.password,
      roleId: 1,
    },
  });
  res.send(userRegister);
});

app.get("/api/users/login", async (req, res) => {
  const userLogin = await prisma.user.findMany();
  res.send(userLogin);
});

app.post("/api/users/logout", async (req, res) => {
  const userlogout = await prisma.user.findMany();
  res.send(userlogout);
});

app.listen(port, () => {
  console.log(`Bolsa de empleos API listening at http://localhost:${port}`);
});
