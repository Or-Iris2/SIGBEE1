const Cont = require('../models/reach')
const asyncWrapper = require('../middleware/async')

const createTasks= asyncWrapper(async(req,res)=>{
    
        const task = await Cont.create(req.body);
    res.status(201).json({task})
    
})

module.exports = createTasks
