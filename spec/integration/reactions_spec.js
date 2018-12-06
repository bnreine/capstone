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
    this.specie5;
    this.reactant1;
    this.reactant2;
    this.reactant3;
    this.reactant4;
    this.product3;
    this.product4;
    this.product5;


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
      Specie.create({
        formula: "Cl2",
        reactants: [{
          reactionId: 1,
          coefficient: 1
        },
        {
          reactionId: 2,
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
        this.reactant4 = specie2.reactants[1];
        Specie.create({
          formula: "HCl",
          products: [{
            reactionId: 1,
            coefficient: 2
          },
          {
            reactionId: 2,
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
          this.product5 = specie3.products[1];
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
            Specie.create({
              formula: "H2",
              reactants: [{
                reactionId: 2,
                coefficient: 1
              }]
            }, {
              include: [{
                model: Reactant,
                as: "reactants"
              }]
            })
            .then((specie5) => {
              this.specie5 = specie5;
              this.reactant3 = specie5.reactants[0];
              done();
            })
          })
        })
      })
    })
    })
  })




  describe("GET /problems", () => {
    it("should render the problem page", (done) => {


      request.get(`${base}problems`, (err, res, body) => {
        expect(body).toContain("Problem #1");
        done();
      })
    })
  })


  describe("POST /problems/check_answer", () => {
    it("should submit correct answers and match with those in the database", (done) => {
      const options = {
        url: `${base}problems/check_answer`,
        form: {
          Reactant1Coefficient: 2,
          Reactant2Coefficient: 1,
          Product1Coefficient: 2,
          Product2Coefficient: 1
        }
      }
      request.post(options, (err, res, body) => {
        expect(body).toContain("Problem #1");
        done();
      })

    })
  })


  describe("GET /problems/next_problem", () => {
    it("should render the problem page with the next problem", (done) => {
      request.get(`${base}problems/next_problem`, (err, res, body) => {
        expect(body).toContain("Problem #2");
        done();
      })
    })
  })






})
