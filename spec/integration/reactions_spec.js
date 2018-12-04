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
    this.reactant3;
    this.reactant4;
    this.product1;
    this.product2;
    this.product3;
    this.product4;


    sequelize.sync({force: true}).then((res) => {

    Specie.create({
      formula: "HBr",
      reactants: [{
        reactionId: 1
      }],
      products: [{
        reactionId: 1
      }]
    }, {
      include: [{
        model: Reactant,
        as: "reactants"
      },
      {
        model: Product,
        as: "products"
      }]
    })
    .then((specie1) => {
      this.specie1 = specie1;
      this.reactant1 = specie1.reactants[0];
      this.product1 = specie1.products[0];
      Specie.create({
        formula: "Cl2",
        reactants: [{
          reactionId: 1
        }],
        products: [{
          reactionId: 1
        }]
      }, {
        include: [{
          model: Reactant,
          as: "reactants"
        },
        {
          model: Product,
          as: "products"
        }]
      })
      .then((specie2) => {
        this.specie2 = specie2;
        this.reactant2 = specie2.reactants[0];
        this.product2 = specie2.products[0];
        Specie.create({
          formula: "HCl",
          reactants: [{
            reactionId: 1
          }],
          products: [{
            reactionId: 1
          }]
        }, {
          include: [{
            model: Reactant,
            as: "reactants"
          },
          {
            model: Product,
            as: "products"
          }]
        })
        .then((specie3) => {
          this.specie3 = specie3;
          this.reactant3 = specie3.reactants[0];
          this.product3 = specie3.products[0];
          Specie.create({
            formula: "Br2",
            reactants: [{
              reactionId: 1
            }],
            products: [{
              reactionId: 1
            }]
          }, {
            include: [{
              model: Reactant,
              as: "reactants"
            },
            {
              model: Product,
              as: "products"
            }]
          })
          .then((specie4) => {
            this.specie4 = specie4;
            this.reactant4 = specie4.reactants[0];
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







})
