var express = require('express');
var router = express.Router();
const connection = require('../config/db-con')

//get all category
// SELECT c.cat_id, c.cat_name, c.cat_description FROM tbl_category_master as c;
// res.json({res:1, msg:'Anything', data: result})
router.get('/getAllCategory', (req, res)=>{
    let qry = 'SELECT c.cat_id, c.cat_name, c.cat_description, c.cat_status FROM tbl_category_master as c;';
    connection.query(qry, (err, result)=>{
      err ? res.json({ErrNo: err.errorno, ErrMsg: err.sqlMessage}) : res.json(result)
      console.log(result)
    })
})

//get category by category status
// SELECT c.cat_id, c.cat_name, c.cat_description FROM tbl_category_master as c WHERE c.cat_status=1;
// res.json({res:1, msg:'Anything', data: result})
router.get('/getCategoryActive', (req, res)=>{
    let qry = 'SELECT c.cat_id, c.cat_name, c.cat_description , c.cat_status FROM tbl_category_master as c WHERE c.cat_status=1;';
    connection.query(qry, (err, result)=>{
      err ? res.json({ErrNo: err.errorno, ErrMsg: err.sqlMessage}) :  res.json(result)
      console.log(result)
    })
})


module.exports = router;