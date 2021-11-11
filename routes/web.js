const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const singleController = require("../app/http/controllers/Customer/singleController");

const guest = require("../app/http/middleware/guest");
// const auth = require("../app/http/middleware/auth");
// const admin = require("../app/http/middleware/admin");


function initRoutes(app) {
    app.get("/", homeController().index);
    app.get("/login", guest, authController().login);
    app.post("/login", authController().postLogin);
    app.get("/register", guest, authController().register);
    app.post("/register", authController().postRegister);
    app.post("/logout", authController().logout); 
    app.get("/reset", guest, authController().reset);
    app.post("/reset", authController().postReset);
    app.get("/reset-password/:token/:id", authController().beforeReset);
    app.post("/reset-password/:token/:id", authController().afterReset);
    app.get("/mobile/:id", singleController().index);
}

module.exports = initRoutes;
