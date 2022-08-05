const { render } = require('ejs');
const raport = require('../models/addReport')
const addReportModel = require('../models/addReport');



function homePage(req, res){
    addReportModel.find()
        .then( data => {
            res.render('index', {
                data: data
                }) 
        })
        .catch( err => {
            console.log(err)
        })
}

const newPost = (req , res ) => {
    let newPost = addReportModel(req.body)
    newPost.save()
    .then( () => {
        res.redirect('/feed')
    })
    .catch(err => {
        console.log(err)
    })
}

const editPost = ( req, res ) => {
    addReportModel.findById(req.params.id)
    .then( raports => {
        if(raports){
            res.render('editPage', {
            raports: raports
        }) 
        } else {
            res.redirect('/edit-Posts/:id')
        }
    })
    .catch( err => {
        console.log(err)
    })
}
const addReportInformation = (req, res) => {
    addReportModel.findById(req.params.id)
    .then( raports => {
        res.render('infoPage', {
            raports:raports
        })
    })
    .catch(err => {
        console.log(err)
    })

}
const deletePost = (req, res) => {
    addReportModel.findByIdAndDelete(req.params.id)
    .then( () =>{
        res.redirect('/feed')
    })
    .catch( err => {
        console.log(err)
    })
}

const updatePost = (req, res) => {
    var postId =  req.params.id;
    
    addReportModel.findByIdAndUpdate(postId, req.body)
    .then( () => {
        res.redirect('/feed')
    })
    .catch(err => {
        console.log(err)
    })
    
}









module.exports = {
    homePage,
    newPost,
    editPost,
    addReportInformation,
    deletePost,
    updatePost
}