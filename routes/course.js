const Course = require('../models/Course')

async function courseRoutes(fastify, options) {
    fastify.get('/courses',async (request, reply)=>{
        try{
            const course=await Course.findAll()
        }
    })
    
}

module.exports = courseRoutes;