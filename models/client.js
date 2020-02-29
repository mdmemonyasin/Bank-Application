const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    currency:{
        type:Number,
        required:true
    },
    phoneNum:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Product',productSchema);




// const fs = require('fs');
// const path = require('path');

// const p = path.join(path.dirname(process.mainModule.filename),
//         'data',
//         'clients.json'
// );
// const getProductsFromFile = (cb) => {
    
//     fs.readFile(p, (err, fileContent) => {
//         if (err) {
//             cb([]);
//         }else{
//             cb(JSON.parse(fileContent));
//         }
        
//     });
// }

// module.exports = class Product {
//     static fetchAll(cb) {
//         getProductsFromFile(cb);
//     }


//     static findById(id, cb){
//         getProductsFromFile(products=>{
//             const product = products.find(p => p.id === id);
//             cb(product);
//         });
//     }
// };