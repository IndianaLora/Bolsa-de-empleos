const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../backend/src/index");

//Assertion
chai.should();

chai.use(chaiHttp);

describe('API', () => {

    //Test la ruta GET de todos los trabajos
    describe("GET /api/job", () => {
        it("Deberia obtener todos los trabajos", (done) => {
            chai.request(server)
                .get("/api/job")
                .end((err,  response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(10);
                done();
                })
        })
    })

    describe('API', () => {

        //Test la ruta GET de todas las tipos trabajos
        describe("GET /api/job-types", () => {
            it("Deberia obtener todos los tipos trabajos", (done) => {
                chai.request(server)
                    .get("/api/job-types")
                    .end((err,  response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('array');
                        response.body.length.should.be.eq(10);
                    done();
                    })
            })
        })

        
    describe('API', () => {

        //Test la ruta GET de todas las categorias
        describe("GET /api/job-categories", () => {
            it("Deberia obtener todas las categoriasa trabajos", (done) => {
                chai.request(server)
                    .get("/api/job-categories")
                    .end((err,  response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('array');
                        response.body.length.should.be.eq(10);
                    done();
                    })
            })
        })
        describe('API', () => {

            //Test la ruta GET del filtro
            describe("GET /api/jobs/filter", () => {
                it("Deberia obtener el filtro", (done) => {
                    chai.request(server)
                        .get("/api/job-categories")
                        .end((err,  response) => {
                            response.should.have.status(200);
                            response.body.should.be.a('array');
                            response.should.have.property('id');
                            response.should.have.property('name');
                            response.should.have.property('Category-Id');
                        done();
                        })
                })
            })

            describe('API', () => {

                //Test la ruta GET login
                describe("GET /api/auth/logout", () => {
                    it("logout", (done) => {
                        chai.request(server)
                            .get("/api//api/auth/logout")
                            .end((err,  response) => {
                                response.should.have.status(200);
                                response.body.should.be.a('array');
                                response.body.length.should.be.eq(10);
                            done();
                            })
                    })
                })
             

})