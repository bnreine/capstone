const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const sequelize = require("../../src/db/models/index").sequelize;
const Specie = require("../../src/db/models").Specie;
const Reactant = require("../../src/db/models").Reactant;
const Product = require("../../src/db/models").Product;


describe("routes: reactions", () => {

  beforeEach((done) => {
    this.specie1;
    this.specie2;
    this.specie3;
    this.specie4;
    this.reactant1;
    this.reactant2;
    this.product3;
    this.product4;


    sequelize.sync({force: true}).then((res) => {

    Specie.create({
      formula: "HBr",
      reactants: [{
        reactionId: 1,
        coefficient: 2
      }]
    }, {
      include: [{
        model: Reactant,
        as: "reactants"
      }]
    })
    .then((specie1) => {
      this.specie1 = specie1;
      this.reactant1 = specie1.reactants[0];
      //this.product1 = specie1.products[0];
      Specie.create({
        formula: "Cl2",
        reactants: [{
          reactionId: 1,
          coefficient: 1
        }]
      }, {
        include: [{
          model: Reactant,
          as: "reactants"
        }]
      })
      .then((specie2) => {
        this.specie2 = specie2;
        this.reactant2 = specie2.reactants[0];
        Specie.create({
          formula: "HCl",
          products: [{
            reactionId: 1,
            coefficient: 2
          }]
        }, {
          include: [{
            model: Product,
            as: "products"
          }]
        })
        .then((specie3) => {
          this.specie3 = specie3;
          this.product3 = specie3.products[0];
          Specie.create({
            formula: "Br2",
            products: [{
              reactionId: 1,
              coefficient: 1
            }]
          }, {
            include: [{
              model: Product,
              as: "products"
            }]
          })
          .then((specie4) => {
            this.specie4 = specie4;
            this.product4 = specie4.products[0];
            done();
          })
        })
      })
    })
    })
  })




  describe("GET /problems/:problemId", () => {
    it("should render the problem page", (done) => {


      request.get(`${base}problems/${1}`, (err, res, body) => {
        expect(body).toContain("Problem #");
        done();
      })
    })
  })


  describe("POST /problems/:problemId/check_answer", () => {
    it("should submit correct answers and match with those in the database", (done) => {
      const options = {
        url: `${base}problems/${1}/check_answer`,
        form: {
          Reactant1Coefficient: 2,
          Reactant2Coefficient: 1,
          Product1Coefficient: 2,
          Product2Coefficient: 1
        }
      }
      request.post(options, (err, res, body) => {
        expect(body).toContain("Problem #");
        done();
      })

    })
  })







})
