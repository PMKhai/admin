exports.admin_list = (req, res, next) => {
    res.render('admin/index', {
        title: "Quản trị viên"
    })
}

exports.admin_detail = (req, res, next) => {
    res.render('admin/detail', {
        title: "Thông tin quản trị viên"
    })
}