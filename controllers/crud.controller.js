/*
Controller defintion
*/
    const createOne = (req, res) => {
        let dataModal = require(`../models/${req.params.endpoint}.model`);
        dataModal.create(req.body)
        .then(newObject => {
            return res.json({
                url: req.originalUrl,
                method: 'POST',
                msg: 'Data created',
                data: newObject,
                err: null
            });
        })
        .catch(err => {
            return res.json({
                url: req.originalUrl,
                method: 'POST',
                msg: 'Data not created',
                data: null,
                err: err
            });
        });
    }

    const readAll = (req, res) => {
        let dataModal = require(`../models/${req.params.endpoint}.model`);
        dataModal.find((err, data) => {
            if (err) {
                return res.json({
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data not sended',
                    data: null,
                    err: err
                });
            } else {
                return res.json({
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data sended',
                    data: data,
                    err: null
                });
            }
        });
    }

    const readOne = (req, res) => {
        let dataModal = require(`../models/${req.params.endpoint}.model`);
        dataModal.findById(req.params.id, (err, data) => {
            if (err) {
                return res.json({
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data not sended',
                    data: null,
                    err: err
                });
            } else {
                return res.json({
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data sended',
                    data: data,
                    err: null
                });
            }
        });
    }

    const updateOne = (req, res) => {
        let dataModal = require(`../models/${req.params.endpoint}.model`);
        dataModal.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if (err) {
                return res.json({
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data not updated',
                    data: null,
                    err: err
                });
            } else {
                return res.json({
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data updated',
                    data: data,
                    err: null
                });
            }
        });
    }

    const deleteOne = (req,res) => {
        let dataModal = require(`../models/${req.params.endpoint}.model`);
        dataModal.deleteOne({'_id': req.params.id}, (err, data) => {
            if (err) {
                return res.json({
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data not deleted',
                    data: null,
                    err: err
                });
            } else {
                return res.json({
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data deleted',
                    data: data,
                    err: null
                });
            }
        });
    }
//

/*
Export
*/
    module.exports = {
        createOne,
        readAll,
        readOne,
        updateOne,
        deleteOne
    }
//