const sequelize = require("../../src/db/models/index").sequelize;
const Specie = require("../../src/db/models").Specie;
const Reactant = require("../../src/db/models").Reactant;

describe("Specie", () => {



  beforeEach((done) => {
    this.specie;
    this.reactant;
    sequelize.sync({force: true}).then((res) => {
      Specie.create({
        formula: "H2",
        reactants: [{
          reactionId: 1,
          coefficient: 5
        }]
      }, {
        include: {
          model: Reactant,
          as: "reactants"
        }
      })
      .then((specie) => {
        this.specie = specie;
        this.reactant = specie.reactants[0];
        done();
      })
    })
  })





  describe("#create()", () => {
    it("should create a new specie", (done) => {
      Specie.create({
        formula: "O2"
      })
      .then((specie) => {
        expect(specie.formula).toBe("O2");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
      done();
    })
  })


  describe("#getReactants()", () => {
    it("should get all associated reactants", (done) => {
      this.specie.getReactants()
      .then((associatedReactants) => {
        expect(associatedReactants[0].reactionId).toBe(1);
        expect(associatedReactants[0].speciesId).toBe(this.specie.id);
        done();
      })
    })
  })




});
