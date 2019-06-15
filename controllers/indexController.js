exports.index = (req, res, next) => {
    if (!req.user) {
        res.redirect('/authen');
    } else {

        if (req.user.role !== "admin")
            var role = {};

        res.render('index', {
            tile: 'Trang chủ',
            admin: req.user,
            role
        });
    }
}