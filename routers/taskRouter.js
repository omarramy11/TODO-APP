 // for endpoints API
const express = require('express')
const router = express.Router(); // for organization
const Task = require('../models/task')

// Get => find()
router.get('/tasks', async (request, response) =>
{
    try
    {
        const tasks = await Task.find(); // find schema
        response.status(200).json(tasks) // response 
    }
    catch
    {
        response.status(500).json({ error: err.message})
    }
}
)

// get : save()
router.post('/tasks', async (request, response) => 
{
    try
    {
        const task = new Task(request.body);
        await task.save();
        response.status(200).json({ message : "Addedd Scuccessfuly", task});
    }
    catch(err)
    {
        response.status(400).json({ error : err.message})
    }
}
); 

// put : find by id()
router.put("/tasks/:id" , async (request, response) =>
{   
    try
    {
        const{ id } = request.params; // كائن يحتوي علي معلومات المسار
        const dataToUpdate = request.body;
        const task = await Task.findByIdAndUpdate(id , dataToUpdate, { new: true});
        response.status(400).json({message : "Updated Successfuly", task});
    }
    catch
    {
        response.status(400).json({message : err.message});
    }
}
)

// delete
router.delete("/tasks/:id" , async (request, response) =>
    {   
        try
        {
            const{ id } = request.params; // كائن يحتوي علي معلومات المسار
            await Task.findByIdAndDelete(id);
            response.status(200).json({message : "Deleted Successfuly"});
        }
        catch
        {
            response.status(400).json({message : err.message});
        }
    }
    )


module.exports = router; // export to add in : app.js