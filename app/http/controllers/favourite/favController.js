function favController() {
    return {
      async index(req, res) {
        return res.render("customers/fav",{title: "Favourites"});
      },
      async add(req, res) {
        if (!req.session.favourite) {
          req.session.favourite = {
            items: {},
            totalProduct: 0,
          };
        }
  
        let favourite = req.session.favourite;
      // console.log(req.body);
  
        // Check if item does not exist in favourite
        if (!favourite.items[req.body.id + req.user._id]) {
          favourite.items[req.body.id + req.user._id] = {
            user: req.user._id,
            item: req.body,
            qty: 1,
          };
          favourite.totalProduct = favourite.totalProduct + 1;
          await res.json({ success: "success" });
        } else {
            await res.json({ success: "success" });
        }
          // console.log(req.session.favourite);
      },
      async remove(req, res) {
          let favourite = req.session.favourite;
  
         if (favourite.totalProduct > 0) {
           favourite.totalProduct = favourite.totalProduct - 1;
           if (favourite.items[req.body.id + req.user._id].qty === 1) {
             delete favourite.items[req.body.id + req.user._id];
           }
           if (favourite.totalProduct === 0) {
             delete req.session.favourite;
           }
         }
         await res.json({ success : "success" });
      },
    };
  }
  module.exports = favController;
  