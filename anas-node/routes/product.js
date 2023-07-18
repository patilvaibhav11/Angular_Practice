var express = require('express');
var router = express.Router();
const connection = require('../config/db-con')

//get all product
// SELECT p.product_id,p.product_name,p.product_description,p.product_status,p.price,p.unit FROM tbl_product_master as p;
// res.json({res:1, msg:'Anything', data: result})
router.get('/getAllProduct', (req, res)=>{
    let qry = 'SELECT p.product_id,p.product_name,p.product_description,p.product_status,p.price,p.unit, p.cat_id FROM tbl_product_master as p;';
    connection.query(qry, (err, result)=>{
      err ? res.json({ErrNo: err.errorno, ErrMsg: err.sqlMessage}) : res.json(result)
      console.log(result)
    })
})

// get product by id
// SELECT p.product_id,p.product_name,p.product_description,p.product_status,p.price,p.unit FROM tbl_product_master as p WHERE p.cat_id=2;
// res.json({res:1, msg:'Anything', data: result})
router.get('/getProductbyId/:cat_id', (req, res)=>{
    const id = req.params.cat_id
    let qry = `SELECT product_id, product_name, product_description, product_status, price, unit, cat_id FROM tbl_product_master WHERE cat_id= ${id};`;
    console.log(qry)
    connection.query(qry, (err, result)=>{
      err ? res.json({ErrNo: err.errorno, ErrMsg: err.sqlMessage}) : res.json(result)
      console.log(result)
    })
})

// get product by id with active stage 
// SELECT product_id, product_name, product_description, product_status, price, unit FROM tbl_product_master WHERE product_status=1 AND cat_id=1;
// res.json({res:1, msg:'Anything', data: result})
router.get('/getProductbyIdOnActive/:cat_id', (req, res)=>{
    const id = req.params.cat_id
    let qry = `SELECT product_id, product_name, product_description, product_status, price, unit, cat_id FROM tbl_product_master WHERE product_status=1 AND cat_id=${id}`;
    console.log(qry)
    connection.query(qry, (err, result)=>{
      err ? res.json({ErrNo: err.errorno, ErrMsg: err.sqlMessage}) : res.json(result)
      console.log(result)
    })
})




module.exports = router;