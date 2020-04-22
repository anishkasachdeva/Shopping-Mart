const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const PORT = 4000;
const userRoutes = express.Router();
app.use(cors());
app.use(bodyParser.json());

let User = require('./models/user');
let Products = require('./models/products');
let Customer = require('./models/customer')


// app.use(cors());
// app.use(bodyParser.json());

// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
// mongoose.connect('mongodb://127.0.0.1:27017/products', { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})


var global_sort_by;
var global_product_name;

// API endpoints

// Adding a new user
userRoutes.route('/register_user').post(function(req, res) {
    //  console.log("ghjkl;kjhgfhjkl");
    let user = new User(req.body);
    // console.log(user.username);
    user.save()
        .then(user => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
    // let user_type = req.body.user_type;
});





//Adding a product

userRoutes.route('/add_product').post(function(req, res) {
    let product = new Products(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'Products': 'Product added successfully'});
        })
        .catch(err => {

            res.status(400).send('Error');
        });
});

//adding the bookings of customers

userRoutes.route('/add_customer_buy_details').post(function(req,res){
    console.log("dxfghjklkjhgfdghjk");
    let customer_booking = new Customer(req.body.toadd);
    customer_booking.save()
    .then(customer_booking => {
        console.log("added")
        // res.status(200).json({'Customer Booking': 'Customer booking added successfully'});
        // let Product = new Product(req.body);
        Products.update(
            { _id : req.body.pid},
            {$set : {quantity: req.body.toadd.quantity_left}},
            {multi : true},
            function(err,changed){
                if(err){
                console.log(err);
            } else {
                
                // console.log(changed[0].quantity);
                // Products.find({req.body.pid})
                // Products.find({_id : req.body.details},function(err,vendor_exist1){
                // console.log(changed);
                
                console.log("changed")
                res.json(changed);
            }
        }
        );
    })
    .catch(err => {

        res.status(400).send('Error');
    });
    // let Product = new Product(req.body);
});


// userRoutes.route('/add_customer_buy_details').post(function(req, res) {
//     console.log("fghjkjhgfghjkjhgfdxghjhgfdgh");
//     let customer = new Customer(req.body);
//     customer.save()
//         .then(product => {
//             res.status(200).json({'Customer': 'Customer details added successfully'});
//         })
//         .catch(err => {

//             res.status(400).send('Error');
//         });
// });

userRoutes.route('/changing_quantity_of_products').post(function(req, res) {
    console.log("came to change quantity");
    console.log(req.body.quantity);
    // Products.find
    Products.findById(req.body.product_id,function(err,user_exist2){
        console.log(user_exist2.quantity);
        user_exist2.quantity = user_exist2.quantity - req.body.quantity;
        console.log(user_exist2.quantity);
        user_exist2.save()
        .then(product => {
            res.status(200).json({'Products':'Decreased'});
        })
        .catch(err => {

            res.status(400).send('Error');
        });
    });
    // Customer.find()
});  



// userRoutes.route('/changing_quantity_for_customer').post(function(req, res) {
//     console.log("came to change quantity for customer");
//     console.log(req.body.quantity_left);
//     // Products.find
//     Products.findById(req.body.product_id,function(err,user_exist2){
//         console.log(user_exist2.quantity);
//         user_exist2.quantity = user_exist2.quantity - req.body.quantity;
//         console.log(user_exist2.quantity);
//         user_exist2.save()
//         .then(product => {
//             res.status(200).json({'Products':'Decreased'});
//         })
//         .catch(err => {

//             res.status(400).send('Error');
//         });
//     });
//     // Customer.find()
// });  








    // console.log(req.body);
    // Products.update(
    //     { _id : req.body.details},
    //     {$set : {is_dispatched: 1 }},
    //     {multi : true},
//     Products.aggregate(
//         { find on the basis of vendor name and product name},
//             {subtract}
//         function(err,success){
//             if(err){
//             console.log(err);
//         } else {
//             res.json(success);
//         }
//     }
//     );
// });









// Getting all the users
userRoutes.route('/registeredusers').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});


//Getting all the products
userRoutes.route('/get_all_products').get(function(req, res) {
    Products.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});



userRoutes.route('/find_personal_products_of_customer').post(function(req, res) {
    // console.log("kkkkkkkkkkkkkkkkkkkkkk");
    customer_making_order = req.body.customer_name;
    Customer.find({ customer_making_order : customer_making_order},function(err,bookings){
        if (err) {
            console.log(err);
        } else {
            res.json(bookings);
        }
    });
});



// setting true to is_dispatched 
userRoutes.route('/set_dispatch_to_true').post(function(req, res) {
    console.log("came to set dispatch = true i.e 1");
    // console.log(req.body);
    Products.update(
        { _id : req.body.details},
        {$set : {is_dispatched: 1 }},
        {multi : true},
        function(err,dispatch){
            if(err){
            console.log(err);
        } else {
    console.log("came to set find dfghjkl;kjhgfdghjkl;kjhgfhjkl = true i.e 1");
            // Products.find({_id : req.body.details})
            Products.find({_id : req.body.details},function(err,vendor_exist1){
                if(err) {
                    console.log(err);
                } else {
                console.log("came to set dispatch = true gfehdjkslskjhgfdhsjkal;kjshgd i.e 1");
                    // console.log()
                    pro_name = vendor_exist1[0].product_name;
                    vend_name = vendor_exist1[0].username;
                    console.log(pro_name);
                    console.log(vend_name);
                    Customer.update(
                        {product_name : pro_name, vendor_name : vend_name},
                        {$set : {status: 'Dispatched'}},
                        {multi : true},
                        function(err,dispatched){
                            if(err){
                            console.log(err);
                        } else {
                            // console.log(dispatched.status);
                            console.log("balle balleee");
                            res.json(dispatched);
                        }
                    });
                    // Customer.update()
                    // console.log(vendor_exist1)
                    // res.json(vendor_exist1);
                }
            })
            
            // res.json(dispatched);
        }
    }
    );
});





userRoutes.route('/set_cancel_to_true').post(function(req, res) {
    console.log("came to set cancel = true i.e 1");
    // console.log(req.body);
    Products.update(
        { _id : req.body.details},
        {$set : {is_canceled: 1 }},
        {multi : true},
        function(err,cancel){
            if(err){
            console.log(err);
        } else {
    console.log("came to set find dfghjkl;kjhgfdghjkl;kjhgfhjkl = true i.e 1");
            // Products.find({_id : req.body.details})
            Products.find({_id : req.body.details},function(err,vendor_exist1){
                if(err) {
                    console.log(err);
                } else {
                console.log("came to set dispatch = true gfehdjkslskjhgfdhsjkal;kjshgd i.e 1");
                    // console.log()
                    pro_name = vendor_exist1[0].product_name;
                    vend_name = vendor_exist1[0].username;
                    console.log(pro_name);
                    console.log(vend_name);
                    Customer.update(
                        {product_name : pro_name, vendor_name : vend_name},
                        {$set : {status: 'Canceled'}},
                        {multi : true},
                        function(err,canceled){
                            if(err){
                            console.log(err);
                        } else {
                            // console.log(dispatched.status);
                            console.log("balle dfghjk;jhgballeee");
                            res.json(canceled);
                        }
                    });
                    // Customer.update()
                    // console.log(vendor_exist1)
                    // res.json(vendor_exist1);
                }
            })
            
            // res.json(dispatched);
        }
    }
    );
});











// userRoutes.route('/set_cancel_to_true').post(function(req, res) {
//     console.log("came to set cancel = true i.e 1");
//     // console.log(req.body);
//     Products.update(
//         { _id : req.body.details},
//         {$set : {is_canceled: 1 }},
//         {multi : true},
//         function(err,dispatched){
//             if(err){
//             console.log(err);
//         } else {
//             res.json(dispatched);
//         }
//     }
//     );
// });



// userRoutes.route('/cancel_products_from_customer_database').post(function(req, res) {
//     Customer.deleteOne(
//         { _id : req.body.details},
//         {$set : {is_canceled: 1 }},
//         {multi : true},
//         function(err,dispatched){
//             if(err){
//             console.log(err);
//         } else {
//             res.json(dispatched);
//         }
//     }
//     );
// });



// getting personal products of vendors
userRoutes.route('/find_personal_products_of_vendors').post(function(req,res){
    console.log(req.body.username);
    console.log("dooodlleeeee");
    username = req.body.username;
    console.log(username);
    Products.find({username : username},function(err,vendor_exist1){
        if(err) {
            console.log(err);
        } else {
            res.json(vendor_exist1);
        }
    });
});

// searching the products

userRoutes.route('/search_product_add_global').post(function(req,res){
    global_product_name = req.body.product_name;
    global_sort_by = req.body.sort_by;
    console.log(global_product_name);
    console.log(global_sort_by);
    console.log("maggiiiiiiiiiiiiiiiii");
    res.send("1");
});
 

// Searching for the vendors after searchinf for the product by the customer
userRoutes.route('/find_vendors').get(function(req,res){
    console.log(global_product_name);
    if(global_sort_by == 'price')
    {
        Products.find({product_name : global_product_name},function(err,vendor_exist1){
            if(err) {
                console.log(err);
            } else {
                // console.log(vendor_exist1)
                res.json(vendor_exist1);
            }
        }).sort({'price' : 1});
    }
    else
    {
        Products.find({product_name : global_product_name},function(err,vendor_exist1){
            if(err) {
                console.log(err);
            } else {
                // console.log(vendor_exist1)
                res.json(vendor_exist1);
            }
        }).sort({'quantity' : -1});
    }
});




userRoutes.route('/store_the_purchased_product_details').post(function(req,res){
    console.log(req.body.details);
    console.log("came here");
    Products.find({_id : req.body.details},function(err,vendor_exist1){
        if(err) {
            console.log(err);
        } else {
            console.log(vendor_exist1)
            res.json(vendor_exist1);
        }
    });    // res.send("4");
});



// userRoutes.route('/find_personal_products_of_customers').get(function(req, res) {
//     // console.log("fdcfghjklkjhg");
        // username = req.body.username;
//     Products.find(function(err, users) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(users);
//         }
//     });
// });




userRoutes.route('/find_usertype_of_new_registered_user').post(function(req,res) {
    // console.log("req.body.user_type");
    user_type = req.body.user_type;
    console.log(user_type);

    User.find({user_type : req.body.user_type},function(err,user_exist1){
        // console.log(user_exist1)
        // if(err) 
        // {
        //     console.log(err);
        // } 
        if (user_exist1.user_type == "customer")
        {
            console.log("customer haiiiiiiiii");
            // console.log("Username doesn't exist. Please register.");
            // res.status(420).json({ UsernameNotFound: "Username not found" });
            res.send("1");
        }
        else
        {
            console.log("vendor haiiiiiiiiiiiii");
            res.send("2");
        }
            });    
        });






userRoutes.route('/login').post(function(req,res) {
    // console.log("xdfghjkl");
    // const username = req.body.username
    User.find({username : req.body.username},function(err,user_exist1){
        // console.log(user_exist1)
        if(err) 
        {
            console.log(err);
        } 
        if (!user_exist1.length)
        {
            console.log("Username doesn't exist. Please register.");
            // res.status(420).json({ UsernameNotFound: "Username not found" });
            res.send("1");
        }
        else
        {
            // const password = req.body.password
            User.find({password : req.body.password},function(err,user_exist2){  
                if(err) 
                {
                    console.log(err);
                }    
                if (!user_exist2.length)
                {
                    res.send("2");
                    // res.status(400).json({ passwordincorrect: "Password incorrect" });
                }   
                else
                {
                    if(user_exist1[0].user_type === "customer")
                    {
                        res.send("3");
                    }
                    else
                    {
                        res.send("4");
                    }
                }
            });    
        }
    });
});


// Getting a user by id
userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

app.use('/', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});
