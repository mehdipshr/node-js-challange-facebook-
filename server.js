const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const controle = require('./controller/facebook');

const app = express();

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static('public'));


mongoose.connect('mongodb+srv://mehdipshr-12:mehdi1234@cluster0.gyf8dhc.mongodb.net/?retryWrites=true&w=majority')
    .then( () => {
        console.log('DB is connected')
    })
    .catch( err => {
        console.log(err)
    })

    app.get('/feed', controle.homePage)
    app.post('/new-post', controle.newPost)
    app.get('/raport/:id/info', controle.addReportInformation)
    app.get('/edit-Posts/:id', controle.editPost)
    app.get('/delete-Post/:id', controle.deletePost)
    app.post('/update-Post/:id', controle.updatePost)

    



    
    const port = 5500;
app.listen(port, () => console.log(`server running on ${port}`))