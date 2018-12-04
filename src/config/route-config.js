module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const reactionRoutes = require("../routes/reactions");
    //const userRoutes = require("../routes/users");
    //if(process.env.NODE_ENV === "test") {
    //  const mockAuth = require("../../spec/support/mock-auth.js");
    //  mockAuth.fakeIt(app);
  //  }
    app.use(staticRoutes);
    app.use(reactionRoutes);
     //app.use(userRoutes);
  }
}
