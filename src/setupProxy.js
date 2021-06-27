const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/Authenticate","/document/upload","/status","/getloginotp","/login","/create_order","/create_reciept","/payment-information","/personal-information","/getotp","/register"], { target: "https://ssismstudent.azurewebsites.net/" })
  );
};
