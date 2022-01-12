const Detail = require("../../../models/detail");

//FACTORY FUNCTION USED TO CREATE OBJECT
function searchController() {
  return {
    searchError(req, res) {
      return res.render("customers/searchError", {title:"Search!"});
    },

    async preSearch(req, res) {
      const search = req.query.search;
      // console.log(search);
      let detailFilter = Detail.find({
        name: { $regex: search, $options: "i" },
      }).limit(10).sort({ 'name': 1 });
      detailFilter.exec(function(err, data) {
        let result = [];
        if (!err) {
          if (data && data.length && data.length > 0) {
            data.forEach((detail) => {
              let obj = {
                id: detail._id,
                label: detail.name,
              };
              result.push(obj);
            });
          }
          // console.log(result)
          res.send(result);
        }
      });
    },

    async search(req, res) {
      const searching = req.query.q;
      // console.log(searching)
      Detail.find(
        { name: { $regex: searching, $options: "i" } },
        (err, data) => {
          if (err) {
            // console.log(err);
            return res.render("customers/search", {error: "Try another search term 😬", title: "Search!"});
          } else {
            // console.log(data.length);
            return res.render("customers/search", { details: data, title: "Search!", });
          }
        }
      );
    },
  };
}
module.exports = searchController;
