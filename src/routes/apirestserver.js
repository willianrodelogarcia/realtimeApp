const express = require('express');

var Request = require('tedious').Request;

const router = express.Router();


const mssql = require('../database');

/*router.get('/ambientes',(req,res)=>{
    res.send("Hola")
});*/

router.get('/ambientes',(req,res)=>{
    var serviceData = []
    var request = new Request("select * from ambientes",(err,rowCount,rows)=>{
        if(err){
            res.json({"ErrorServices": err})
        }
    });

    request.on('row',(columns)=>{

        var item = {}

        columns.forEach(column => {
            item[column.metadata.colName] = column.value;
        });

        serviceData.push(item)
    });

    request.on('done',()=>{
        res.status(200).json(serviceData);
    });


    mssql.execSqlBatch(request);

});


module.exports = router;
