const sequelize = require("../../src/db/models/index").sequelize;
const Specie = require("../../src/db/models").Specie;
const Reactant = require("../../src/db/models").Reactant;

describe("Reactant", () => {

  beforeEach((done) => {
    this.reactant;
    this.specie1;
    this.specie2;

    sequelize.sync({force: true}).then((res) => {
      Specie.create({
        formula: "H2"
      })
      .then((specie1) => {
        this.specie1 = specie1;
        Reactant.create({
          reactionId: 1,
          speciesId: this.specie1.id
        })
        .then((reactant) => {
          this.reactant = reactant;
          Specie.create({
            formula: "O2"
          })
          .then((specie2) => {
            this.specie2 = specie2;
            done();
          })
        })
      })
    })
  })




  describe("#create()", () => {
    it("should create a new reactant", (done) => {
      Reactant.create({
        reactionId: 2,
        speciesId: this.specie1.id
      })
      .then((reactant) => {
        expect(reactant.reactionId).toBe(2);
        expect(reactant.speciesId).toBe(1);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })
  })



  describe("#getSpecie()", () => {
    it("should get the specie that owns the reactant", (done) => {
      this.reactant.getSpecie()
      .then((associatedSpecie) => {
        expect(associatedSpecie.formula).toBe("H2");
        done();
      })
    })
  })



  describe("#setSpecie()", () => {
    it("should assign a a new specie to a reactant", (done) => {
      Specie.create({
        formula: "N2"
      })
      .then((newSpecie) => {
        expect(this.reactant.speciesId).toBe(this.specie1.id);
        this.reactant.setSpecie(newSpecie)
        .then((reactant) => {
          expect(reactant.speciesId).toBe(newSpecie.id);
          expect(this.reactant.speciesId).not.toBe(this.specie1.id);
          done();
        })
      })
    })
  })






});