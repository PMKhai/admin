exports.category_list = (req, res, next) => {
    res.render('category/index', {
        title: "Loại sản phẩm"
    })
}

exports.category_detail = (req, res, next) => {
    res.render('category/detail', {
        title: "Chi Tiết loại sản phẩm"
    })
}