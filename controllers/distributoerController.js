exports.distributor_list = (req, res, next) => {
    res.render('distributor/index', {
        title: "Nhà phân phối"
    })
}

exports.distributor_detail = (req, res, next) => {
    res.render('distributor/detail', {
        title: "Chi tiết nhà phân phối"
    })
}