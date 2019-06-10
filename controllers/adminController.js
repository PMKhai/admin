const admin = require('../models/admin');

const findElementInArrayByEmail = (list, email) => {
    let i = 0;
    let size = list.length;
    let result;
    for (i; i < size; i++) {
        if (list[i].email == email)
            result = i;
    }
    return result;
}

exports.admin_list = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');

    const adminList = await admin.list();

    const index = findElementInArrayByEmail(adminList, req.user.email);
    adminList.splice(index, 1);
    //console.log(adminList);
    res.render('admin/index', {
        title: "Quản trị viên",
        adminList,
        admin: req.user
    })
}

exports.changeInfo = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');

    const isMe = {}
    const display = {
        btn: "Cập nhật"
    };
    console.log(req.params.id);
    const adminDetail = await admin.getByID(req.params.id);
    res.render('admin/detail', {
        title: "Thông tin quản trị viên",
        admin: req.user,
        isMe,
        adminDetail,
        display
    })
}

exports.admin_detail = (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');
    console.log(req.params.id);
    const edit = {}
    const roleOption = [{
        option: 'admin'
    }, {
        option: 'normal'
    }];
    const display = {
        btn: "Thêm"
    };
    res.render('admin/detail', {
        title: "Thông tin quản trị viên",
        admin: req.user,
        edit,
        roleOption,
        display
    })
}

exports.loadAdminDetail = async (req, res, next) => {
    if (!req.user)
        res.redirect('/authen');

    const adminDetail = await admin.getByID(req.params.id);
    const edit = {}
    const display = {
        btn: "Cập nhật"
    };
    const roleOption = [{
        option: 'admin'
    }, {
        option: 'normal'
    }];


    roleOption.forEach(element => {
        if (element.option == adminDetail.role)
            element.selected = 'selected';
    });

    res.render('admin/detail', {
        title: "Thông tin quản trị viên",
        admin: req.user,
        adminDetail,
        roleOption,
        edit,
        display
    })
}

exports.updateInfo = async (req, res, next) => {
    let isVetify = true;

    if (req.body.password != '')
        isVetify = await admin.verify(req.body.email, req.body.password);

    if (!isVetify) {
        const path = '/admin/setting/id=' + req.user._id;
        res.redirect(path);
    }
    if (req.body.newPassword != req.body.repassword) {
        const path = '/admin/setting/id=' + req.user._id;
        res.redirect(path);
    }
    const updatingAdmin = {
        email: req.body.email,
        username: req.body.name,
        newPassword: req.body.newPassword,
    }
    admin.updated(updatingAdmin);
    res.redirect('/');

}

exports.addAdmin = async (req, res, next) => {
    console.log(req.body);
    await admin.register(req.body.name, req.body.email, req.body.newPassword, req.body.role);
    res.redirect('/admin');
}