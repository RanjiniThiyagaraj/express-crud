const productModel = require("../models/product");

const productController = {
  create: (req, res, next) => {
    productModel.create(req.body, (err, product) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "product created successfully",
          data: null,
        });
      }
    });
  },
  getAll: (req, res, next) => {
    let productlist = [];
    productModel.find({}, (err, products) => {
      if (err) {
        next(err);
      } else {
        products.forEach((product) => {
          const { _id, name, description } = product;
          productlist.push({
            id: _id,
            name: name,
            description: description,
          });
        });
        res.json({
          status: "success",
          message: "product list fetched successfully",
          data: {
            products: productlist,
          },
        });
      }
    });
  },
  getById: (req, res, next) => {
    const id = req.params.id;
    productModel.findOne({ id }, (err, product) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "product found",
          data: {
            product: product,
          },
        });
      }
    });
  },
  deleteById: (req, res, next) => {},
  updateById: (req, res, next) => {},
};

module.exports = productController;
