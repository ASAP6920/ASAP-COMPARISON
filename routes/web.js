const homeController = require("../app/http/controllers/homeController");

const authController = require("../app/http/controllers/authController");

const singleController = require("../app/http/controllers/singleController");

const allModelController = require("../app/http/controllers/allModelController");

const compareController = require("../app/http/controllers/dropdown/compareController");
const firstDropdown = require("../app/http/controllers/dropdown/firstDropdown");
const SecondDropdown = require("../app/http/controllers/dropdown/SecondDropdown");

const historyController = require("../app/http/controllers/history/historyController");
const historyViewController = require("../app/http/controllers/history/historyViewController");

const preComparedController = require("../app/http/controllers/preCompared/preComparedController");


const guest = require("../app/http/middleware/guest");
const auth = require("../app/http/middleware/auth");
// const admin = require("../app/http/middleware/admin");


function initRoutes(app) {
    app.get("/", homeController().index);

    app.get("/login", guest, authController().login);
    app.post("/login", authController().postLogin);
    app.get("/reset", guest, authController().reset);
    app.post("/reset", authController().postReset);
    app.get("/reset-password/:token/:id", authController().beforeReset);
    app.post("/reset-password/:token/:id", authController().afterReset);
    app.get("/register", guest, authController().register);
    app.post("/register", authController().postRegister);
    app.post("/logout", authController().logout); 

    app.get("/mobile/compare", compareController().index);
    app.post("/model", firstDropdown().index);
    app.post("/data", firstDropdown().index1);
    app.post("/model1", SecondDropdown().index);
    app.post("/data1", SecondDropdown().index1);

    app.get("/mobile/All-Models", allModelController().index);

    app.get("/mobile/:id", singleController().index);

    app.get("/customer/history", auth, historyController().index);
    app.post("/history", auth, historyController().store);
    app.get("/history/view", auth, historyViewController().show);

    app.get("/Pre-compared", preComparedController().show);
    
}

module.exports = initRoutes;
