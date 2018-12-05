const sequelize = require("../../src/db/models/index").sequelize;
const Specie = require("../../src/db/models").Specie;
const Product = require("../../src/db/models").Product;

describe("Product", () => {

  beforeEach((done) => {
    this.product;
    this.specie1;
    this.specie2;

    sequelize.sync({force: true}).then((res) => {
      Specie.create({
        formula: "H2"
      })
      .then((specie1) => {
        this.specie1 = specie1;
        Product.create({
          reactionId: 1,
          speciesId: this.specie1.id,
          coefficient: 3
        })
        .then((product) => {
          this.product = product;
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
    it("should create a new product", (done) => {
      Product.create({
        reactionId: 2,
        speciesId: this.specie1.id,
        coefficient: 4
      })
      .then((product) => {
        expect(product.reactionId).toBe(2);
        expect(product.speciesId).toBe(1);
        expect(product.coefficient).toBe(4);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })
  })



  describe("#getSpecie()", () => {
    it("should get the specie that owns the product", (done) => {
      this.product.getSpecie()
      .then((associatedSpecie) => {
        expect(associatedSpecie.formula).toBe("H2");
        done();
      })
    })
  })



  describe("#setSpecie()", () => {
    it("should assign a a new specie to a product", (done) => {
      Specie.create({
        formula: "N2"
      })
      .then((newSpecie) => {
        expect(this.product.speciesId).toBe(this.specie1.id);
        this.product.setSpecie(newSpecie)
        .then((product) => {
          expect(product.speciesId).toBe(newSpecie.id);
          expect(this.product.speciesId).not.toBe(this.specie1.id);
          done();
        })
      })
    })
  })






});
