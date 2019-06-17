const customer = require("../models/customer");

exports.orders_list = async (req, res, next) => {
  if (!req.user) res.redirect("/authen");
  if (req.user.role !== "admin") var role = {};

  const customerList = await customer.listAll();
  let order = [];
  customerList.forEach(element => {
    if (element.listorder != undefined || element.listorder != null) {
      order.push(element.listorder);
    }
  });

  for (let i = 0; i < order.length; i++) {
    let size = order[i].length;
    for (let y = 0; y < size; y++) {
      order[i][y].index = i;

      if (order[i][y].status === "đang giao")
        order[i][y].display = "btn-warning"
      if (order[i][y].status === "đã giao")
        order[i][y].display = "btn-success"
      if (order[i][y].status === "hủy đơn")
        order[i][y].display = "btn-danger"

    }
  }

  res.render("order/index", {
    title: "Đơn đặt hàng",
    admin: req.user,
    role,
    order
  });
  x;
};

exports.orderDetail = async (req, res, next) => {
  if (!req.user) res.redirect("/authen");
  if (req.user.role !== "admin") var role = {};

  const customerList = await customer.listAll();
  let order = [];
  customerList.forEach(element => {
    if (element.listorder != undefined || element.listorder != null) {
      order.push(element.listorder);
    }
  });

  const orderDetail = order[req.params.indexInUserlist][req.params.indexInOrderlist];

  const statusOption = [{
    option: 'đang giao'
  }, {
    option: 'đã giao'
  }, {
    option: 'hủy đơn'
  }];


  statusOption.forEach(element => {
    if (element.option == orderDetail.status)
      element.selected = 'selected';
  });

  res.render('order/detail', {
    title: "Chi tiết đơn hàng",
    admin: req.user,
    role,
    orderDetail,
    statusOption
  })
}