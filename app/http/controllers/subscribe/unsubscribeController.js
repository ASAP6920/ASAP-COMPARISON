const Subscriber = require("../../../models/subscriber");

//FACTORY FUNCTION USED TO CREATE OBJECT
function unsubscribeController() {
  return {
    async index(req, res) {
      const subscribeUser = await Subscriber.findById({ _id: req.params.id });
    //   console.log(user);
      return res.render("unsubscribe",{subscribeUser, title: "Unsubscribe newsletter"});
    },
    success(req, res){
        return res.render('unsubSuccess',{title: "Success!"})
    },
    async delete(req, res) {
        const {id} = req.params
        // console.log(req.body);
        await Subscriber.deleteOne({ _id: id });
        return res.redirect('/unsubSuccess') 
    }
  };
}
module.exports = unsubscribeController;
