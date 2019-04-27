exports.index = (req, res, next) => {
    res.render('index', {
        tile: 'Trang chủ'
    });
}