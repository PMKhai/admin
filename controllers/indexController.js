exports.index = (req, res, next) => {
    if (!req.user) {
        res.redirect('/authen');
    } else {
        res.render('index', {
            tile: 'Trang chủ',
            admin: req.user
        });
    }
}