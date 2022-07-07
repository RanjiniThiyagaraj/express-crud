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
      productModel.findById( req.params.id, (err, prod) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "product found",
          data: {
            product: prod,
          },
        });
      }
    });
  },
  deleteById: (req, res, next) => {
    const id=req.params.id;
    console.log(id);
    productModel.findByIdAndRemove(req.params.id,(err,product)=>{
      if(err){
        next(err);
      }else{
        res.json({
          status:"succuessfully deleted",
          "message":"product deleted",
          "data":product
        });
      }
      });
    },


updateById: (req, res, next) => {
  productModel.findByIdAndUpdate(req.params.id,req.body,(err,product)=>{
    if(err){
      next(err);
    }else{
      res.json({
        status:"success",
        message:"successfully updated product",
        data:req.body
      })
    }
  })
},


};

module.exports = productController;
