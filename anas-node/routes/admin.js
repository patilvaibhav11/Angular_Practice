var express = require('express');
var router = express.Router();
const connection = require('../config/db-con')

// dummy
router.get('/' , (req, res)=>{
    console.log('hello from admin')
    res.send('hello from admin')
})

//login user
// err ? res.json({res_code: -1 , error_code: err.errno, msg: err.sqlMessage}) : res.json({res_code: 1, msg: 'Login Success', result})
//SELECT u.user_id, u.user_name, u.user_email, u.user_address, u.user_ph_no, u.user_password from tbl_user_master as u WHERE u.user_email='${user_email}' AND u.user_password='${user_password}';

router.post('/loginUser' , (req, res)=>{
    const {user_email, user_password} = req.body
    let loginQuery = `SELECT u.user_id, u.user_name, u.user_email, u.user_address, u.user_ph_no, u.user_password,u.status from tbl_user_master as u WHERE u.user_email='${user_email}' AND u.user_password='${user_password}';`
    console.log(loginQuery)
    connection.query(loginQuery, (err, result)=>{
        if(err)
        {
            res.json({res_code: -1 , error_code: err.errno, msg: err.sqlMessage});
        }
        else
        {
            let result_count = result.length
            
            if(result_count == 1)
            {
                if(result[0].user_email == user_email && result[0].user_password == user_password)
                {
                    if(result[0].status == '1')
                    {
                        console.log(result_count)
                        res.send({res_code: 1, msg: 'Login Success', result})
                    }
                    else
                    {
                        res.json({res_code : -4, msg :'User is Inactive'})
                    }
                }
                else
                {
                    res.json({res_code : -3, msg :'invalid user name or password'})
                }
            }
            else
            {
                res.json({res_code : -2, msg :'you are not valid user'})
            }
            
        }
        console.log(result)
    })
})


//insert user
//`INSERT INTO tb_subject_master (course_id,subject_name,subject_info,subject_fees) VALUES(${course_id},'${subject_name}','${subject_info}','${subject_fees}')`

router.post('/insertUser' , (req, res)=>{
    const {user_name, user_email, user_address, user_ph_no, user_password} = req.body

    let qry = `INSERT INTO tbl_user_master(user_name,user_email,user_address,user_ph_no,user_password) VALUES('${user_name}','${user_email}','${user_address}','${user_ph_no}','${user_password}');`

    connection.query(qry, (err, result)=>{
        err ? res.json({res_code: -1, msg: 'Data Has not been Submited'}) : res.json({res_code: 1, msg: 'Data Has Been Submited Successfully', result})
    })
})

//update User

//Delete User

module.exports = router;