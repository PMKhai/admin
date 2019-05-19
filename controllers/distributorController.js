const distributor = require('../models/distributor');

exports.distributor_list = async (req, res, next) => {
    const distributorList = await distributor.list();
    console.log(distributorList);
    res.render('distributor/index', {
        title: "Nhà phân phối",
        distributorList
    })
}

exports.distributor_detail = (req, res, next) => {
    res.render('distributor/detail', {
        title: "Chi tiết nhà phân phối"
    })
}

exports.distributor_adding = async (req, res, next) => {
    await distributor.adding(req.body);
    res.redirect('./');
}

exports.distributor_loading_detail = async (req, res, next) => {
    const distributorDetail = await distributor.detail(req.params.id);
    console.log(distributorDetail);
    res.render('distributor/detail', {
        distributorDetail
    });
}

exports.distributor_edit = async (req, res, next) => {
    await distributor.editing(req.params.id, req.body);
    res.redirect('./');
}