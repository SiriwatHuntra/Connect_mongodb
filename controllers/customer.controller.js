const customer = require("../models/customer.js")
const Customer = require("../models/customer.js")

exports.index = (req, res) => {
    res.send('<h1>Customer Application</h1> <hr><a href="/api/customer">name_list</a>')
}

exports.findAll = (req, res) => {
    customer.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        })
    })
}

exports.create = (req, res ) => {
    const c = new customer(req.body)

    c.save().then(data => {
        res.json(data)
    }).catch(err => {
        return res.status(500).json({
            msg:"ERROR HAPPEND : "+ err.message
        })
    })

}

exports.findById = (req, res ) => {
    customer.findById(req.params.customerTd).then(data =>{
        if(!data){
            return res.status(404).json({
                msg: "Record Not Found CODE: " + req.params.customerId

            })
        }
        res.json(data)
    }).catch(err => {
        return res.status(500).json({
            msg:"ERROR HAPPEND : "+ err.message
        })
    })

}

exports.update = (req, res) => {
    customer.findByIdAndUpdate(req.params.customerId, {$set: req.body}, {new: true})
    .then(data => {
        if(!data){
            return res.status(404).json({
                msg: "Not Found RecordCode: " + req.params.customerId
            })
        }
        res.json(data)
    }).catch(err => {
        return res.status(500).json({
            msg:"ERROR HAPPEND : "+ err.message
        })
    })
}

exports.delete = (req, res) => {
    customer.findByIdAndDelete(req.params.customerId)
    .then(data => {
        if(!data){
            return res.status(404).json({
                msg: "Not Found RecordPass: " + req.params.customerId
            })
        }
        res.json({ msg: "Data deleted!!!"})
    }).catch(err => {
        return res.status(500).json({
            msg:"ERROR HAPPEND : "+ err.message
        })
    })
}
