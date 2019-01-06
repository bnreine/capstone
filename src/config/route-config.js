module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const reactionRoutes = require("../routes/reactions");
    app.use(staticRoutes);
    app.use(reactionRoutes);
  }
}
