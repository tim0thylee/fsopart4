const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    url: {
        type: String,
        required: true
    },
    likes: Number
})

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        if (!returnedObject.likes) {
            returnedObject.likes = 0; 
        }
        delete returnedObject._id
    }
})
  
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog