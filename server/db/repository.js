const client = require("./clientModal");

const repository = {
  GetClient: (queryParams) => {
    const queryObj = { ...queryParams };
    const excludedField = ["sort", "limit"];
    excludedField.forEach((el) => delete queryObj[el]);

    let query = client.find(queryObj);

    // // // Search query
    // const search = queryParams.search || "";
    // console.log(typeof search);
    // const regex = new RegExp(search, "i");
    // query = query.find({
    //   $or: [{ city: regex }, { name: regex }],
    // });

    query = query.sort(queryParams["sort"]);

    // Set limit for page....
    const page = queryParams.page * 1 || 1;
    const limit = queryParams.limit * 1 || 10;
    query = query.skip((page - 1) * limit).limit(limit);

    return query;
  },

  addManyClients: (data) => {
    return client.insertMany(data);
  },
  deleteClients: (id) => {
    return client.deleteOne({ _id: id });
  },
  deleteAll: () => {
    return client.deleteMany({});
  },
};

module.exports = repository;
