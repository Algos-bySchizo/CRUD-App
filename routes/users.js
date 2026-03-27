const User=require('../models/User')

async function userRoutes(fastify, options){

    fastify.post('/users', async(request, reply) =>{
        try{
        const {name, email}=request.body;
        if (!name || !email) {
            return reply.code(400).send({ error: 'Name and email are required' });
        }
        const user = await User.create({name, email});
        return user;
    }catch(err){
        fastify.log.error(err)
        reply.code(500).send({error: 'Internal Server Error'});
    }
    });
    
    fastify.get('/users', async(request, reply)=>{
        try{
            const user = await User.findAll()
            if (user.lenght===0){
                return reply.code(204).send({message: 'the database is empty'});
            }
            return reply.code(200).send(user)
        }catch(err){
            fastify.log.error(err)
            return reply.code(500).send({message: 'something went wrong :/'});
        }
    });
    
    fastify.get('/users/:id', async(request, rep)=>{
        try{
            const {id}=request.params;
            const user=await User.findByPk(id)
            if(!user){
                return rep.code(404).send({message: "User not found"});
            }
            return user;
        }catch(err){
            fastify.log.error(err)
            return rep.code(204).send({message:'user not found!'})
        }
    });
    fastify.put('/users/:id', async(request, rep)=>{
        try{
            const {id}=request.params;
            const {name, email}=request.body;
            if (!name || !email){
                return rep.code(400).send({message: 'name and email is required!'});
            }
            const user=await User.findByPk(id)
            user.name= name;
            user.email=email;
            await user.save(); 
            return user
        }catch(err){
            fastify.log.error(err)
            return rep.code(204).send({message: 'user not found'})
        }
    })

    fastify.delete('/users/:id', async(request, reply)=>{
        try{
            const {id}=request.params;
            const user= await User.findByPk(id)
            if (!user) {
                return reply.code(404).send({ message: 'User not found' });
            }
            await user.destroy();
            return {message: 'User Deleted'};
        }catch(err){
            fastify.log.error(err)
            return reply.code(404).send({message: 'user not found'});
        }
})
}
module.exports = userRoutes;