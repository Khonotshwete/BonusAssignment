var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Book = require('../models/Bio_books');
let BookController = require('../controllers/Bio_books')
let mongoose = require('mongoose');
// helper function
function requireAuth(req,res,next){
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}
/* Get route for the Trainer's list */
// Read Operation
router.get('/', BookController.DislayBooklist);
/* Get route for Add Trainer page --> Create */
router.get('/add', requireAuth, BookController.AddBook); 
/* Post route for Add Trainer page --> Create */
router.post('/add', requireAuth, BookController.ProcessBook);
/* Get route for displaying the Edit Trainer page --> Update */
router.get('/edit/:id', requireAuth, BookController.EditBook);
/* Post route for processing the Edit Trainer page --> Update */
router.post('/edit/:id', requireAuth, BookController.ProcessEditBook);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', requireAuth, BookController.DeleteBook);
 module.exports = router;