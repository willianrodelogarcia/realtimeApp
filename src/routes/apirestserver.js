const express = require('express');

var Request = require('tedious').Request;

const router = express.Router();


const mssql = require('../database');


router.get('/api/ambientes',(req,res)=>{
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

router.get('/api/huespeds',(req,res)=>{

    var huespedData = [];
    var request = new Request("select * from huesped",(err,rowCount,rows)=>{
        if(err){
            res.json({"HuespedErr":err})
        }
    });

    request.on('row',(columns)=>{
        var item = {}
        columns.forEach(column => {
            item[column.metadata.colName] = column.value;
        });

        huespedData.push(item)
    });

    request.on('done',()=>{
        res.status(200).json(huespedData)
    });

    mssql.execSqlBatch(request);
});


router.post('/api/login',(req,res)=>{
    const { IdentificacionHusped } = req.body;
    var huespedData = [];
    var request = new Request("select * from huesped where IdentificacionHusped ="+IdentificacionHusped,(err,rowCount,rows)=>{
        if(err){
            res.json({"HuespedErr":err})
        }
    });

    request.on('row',(columns)=>{
        var item = {}
        columns.forEach(column => {
            item[column.metadata.colName] = column.value;
        });

        huespedData.push(item)
    });

    request.on('done',()=>{
        
        if(huespedData.length === 0){
            
            res.status(200).json({
                "Status":"NoUser"
            })
        }else{ 
            res.status(200).json({"Status":"Ok",huespedData})
        }
        
    });

    mssql.execSqlBatch(request)
    
});


router.get('/api/productos',(req,res)=>{

    var productoData = []
    var request = new Request("select * from roomService",(err,rowCount,rows)=>{
        if(err){
            res.json({"ErrorProductos":err})
        }
    });

    request.on('row',(columns)=>{
        var item = {}

        columns.forEach(column => {
            item[column.metadata.colName] = column.value;
        });

        productoData.push(item)
    });

    request.on('done',()=>{
        res.status(200).json(productoData)
    });


    mssql.execSqlBatch(request)
});


router.get('/api/mantenimietos',(req,res)=>{

    var mantData = []
    var request = new Request("select * from Mantenimiento",(err,rowCount,rows)=>{
        if(err){
            res.json({"MantenimientoErr":err})
        }
    });

    request.on('row',(columns)=>{
        var item = {}

        columns.forEach(column => {
            item[column.metadata.colName] = column.value;
        });

        mantData.push(item)
    });

    request.on('done',()=>{
        res.status(200).json(mantData)
    });

    mssql.execSqlBatch(request)

})



module.exports = router;