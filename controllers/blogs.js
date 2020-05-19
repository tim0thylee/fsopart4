const Blog = require('../models/blog')
const blogsRouter = require('express').Router()
  
blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})
  
blogsRouter.post('/', async (request, response, next) => {
    const blog = new Blog(request.body)
    try {
        const result = await blog.save()
        response.json(result)
    } catch (exception) {
        next(exception)
    }
})

module.exports = blogsRouter