const distributor = require('../models/distributor');

exports.distributor_list = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');

    const sizeOfDistributor = await distributor.count();
    const numberOfPge = Math.ceil(sizeOfDistributor / 6);
    const paging = []

    for (let i = 1; i <= numberOfPge; i++) {
        if (i == req.params.pageNumber)
            paging.push({
                pnb: i,
                curentPage: 'disabled'
            })
        else
            paging.push({
                pnb: i
            })
    }

    const distributorList = await distributor.list(req.params.pageNumber);
    console.log(distributorList);

    if (req.user.role !== "admin")
        var role = {};

    res.render('distributor/index', {
        title: "Nhà phân phối",
        distributorList,
        admin: req.user,
        paging,
        role
    })
}

exports.distributor_detail = (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const display = {
        btn: "Thêm"
    };

    if (req.user.role === "normal")
        var role = {};

    res.render('distributor/detail', {
        title: "Chi tiết nhà phân phối",
        display,
        admin: req.user,
        role
    })
}

exports.distributor_adding = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await distributor.adding(req.body);
    res.redirect('./');
}

exports.distributor_loading_detail = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    const display = {
        btn: "Cập nhật"
    };
    const distributorDetail = await distributor.detail(req.params.id);
    console.log(distributorDetail);
    if (req.user.role !== "admin")
        var role = {};
    res.render('distributor/detail', {
        distributorDetail,
        display,
        admin: req.user,
        role
    });
}

exports.distributor_edit = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await distributor.editing(req.params.id, req.body);
    res.redirect('/distributor/page=1');
}

exports.distributor_delete = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    await distributor.deleting(req.params.id);
    res.redirect('/distributor/page=1');
}