const fs = require('fs');
const path = require('path');
const Client = require('../models/client');  


let total;

const ITEMS_PER_PAGE = 5; 

exports.getEnglish = (req, res, next) => {
    const page = +req.query.page || 1;
    Client.find().countDocuments()
    .then(numProducts=>{
        total = numProducts;
        return Client.find()
        .skip((page-1)*ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE)
    }).then(products => {
            // console.log(products);
            res.render('english', {
                prods: products,
                pageTitle: 'English',
                currPage: page,
                hasNextPage: page*ITEMS_PER_PAGE < total,
                hasPrevious: page>1,
                nextPage: page+1,
                previousPage: page-1,
                lastPage: Math.ceil(total/ITEMS_PER_PAGE),
                path:'/'
             });
        })
        .catch(err => {
            console.log(err);
        });

    // Client.fetchAll(products => {
    //     res.render('english', {
    //         prods: products,
    //         pageTitle: 'English'
    //     });

    // });
};

exports.getArabic = (req, res, next) => {
    const page = +req.query.page || 1;
    
    Client.find().countDocuments()
    .then(numProducts=>{
        total = numProducts;
        return Client.find()
        .skip((page-1)*ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE)
    }).then(products => {

            // console.log(products);
            res.render('arabic', {
                prods: products,
                pageTitle: 'arabic',
                currPage: page,
                hasNextPage: page*ITEMS_PER_PAGE < total,
                hasPrevious: page>1,
                nextPage: page+1,
                previousPage: page-1,
                lastPage: Math.ceil(total/ITEMS_PER_PAGE),
                path:'/arabic'
             });
        })
        .catch(err => {
            console.log(err);
        });
}