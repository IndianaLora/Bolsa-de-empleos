const express = require("express");
const bcrypt = require("bcrypt");
var bodyParser = require("body-parser");
var cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const privateKey = "kjsandkasndkasnd;askdasdkasdjhqwi";
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
    //parseInt((page - 1) * 10)
    skip: 10,
    take: 10,
  });
  res.send(jobs);
});

app.use(bodyParser.json());

app.post("/api/jobs", async (req, res) => {
  console.log(req.body);
  const jobs = await prisma.job.create({
    data: {
      title: req.body.data.title,
      position: req.body.data.position,
      companyName: req.body.data.companyName,
      companyLogo: "", //todo implement this
      companyLocation: req.body.data.companyLocation,
      url: req.body.data.url,
      createdAt: new Date(),
      userId: 1, //todo replace this
      categoryId: req.body.data.categoryId,
      typeId: req.body.data.typeId,
    },
  });
  res.send(jobs);
});

app.use(bodyParser.json());

app.post("/api/users/register", async (req, res) => {
  const username = req.body.data.username;
  const exist = await prisma.user.findFirst({
    where: {
      username: {
        equals: username,
      },
    },
  });
  if (exist) {
    throw new Error("Usuario ya existe");
  }
  bcrypt.hash(req.body.data.password, 10, async function (err, hash) {
    if (err) {
      throw new Error("No se pudo hashear el password");
    }
    const userRegister = await prisma.user.create({
      data: {
        username: req.body.data.username,
        password: hash,
        roleId: 1,
      },
    });
    res.send(userRegister);
  });
});

app.post("/api/auth/login", async (req, res) => {
  const username = req.body.data.username;
  const user = await prisma.user.findFirst({
    where: {
      username: {
        equals: username,
      },
    },
  });

  if (!user) {
    return res.status(500).json({
      error: "Credenciales invalidas",
    });
  }
  bcrypt.compare(req.body.data.password, user.password, function (err, result) {
    if (err || !result) {
      return res.status(500).json({
        error: "Credenciales invalidas",
      });
    }
    jwt.sign(
      { id: user.id },
      privateKey,
      { algorithm: "RS256" },
      function (err, token) {
        if (err) {
          return res.status(500).json({
            error: "Credenciales invalidas",
          });
        }
        res.send({
          token: token,
        });
      }
    );
  });
  return res.status(500).json({
    error: "Credenciales invalidas",
  });
});

app.get("/api/auth/check", async (req, res) => {
  const check = await prisma.user.findMany();
  res.send(check);
});
app.get("/api/auth/logout", async (req, res) => {
  const userlogout = await prisma.user.findMany();
  res.send(userlogout);
});

app.listen(port, () => {
  console.log(`Bolsa de empleos API listening at http://localhost:${port}`);
});
