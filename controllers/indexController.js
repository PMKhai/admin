const product = require('../models/product');
const customer = require('../models/customer');

const compare = (a, b) => {
    if (a.quantityPurchased > b.quantityPurchased)
        return -1;
    else
        return 1;
}

exports.index = async (req, res, next) => {
    if (!req.user) {
        res.redirect('/authen');
    } else {

        if (req.user.role !== "admin")
            var role = {};

        const productList = await product.listAll();

        const customerList = await customer.listAll();
        let order = [];
        customerList.forEach(element => {
            if (element.listorder != undefined || element.listorder != null) {
                order.push(element.listorder);
            }
        });

        for (let u = 0; u < productList.length; u++) {
            let quantityPurchased = 0;
            let sizei = order.length;
            for (let i = 0; i < sizei; i++) {
                let sizey = order[i].length;

                for (let y = 0; y < sizey; y++) {
                    let sizez = order[i][y].productlist.length;

                    for (let z = 0; z < sizez; z++)
                        if (order[i][y].productlist[z].name == productList[u].name)
                            quantityPurchased++;
                }
            }
            productList[u].quantityPurchased = quantityPurchased;
        }

        productList.sort(compare)

        productList.splice(10, productList.length - 10);

        res.render('index', {
            tile: 'Trang chủ',
            admin: req.user,
            role,
            productList
        });
    }
}