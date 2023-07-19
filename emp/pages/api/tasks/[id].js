import Task from "../../model/Task";
import { dbConnect } from "../../../utils/index";
import { runMiddlewere } from "../../../utils/runMiddlewere";
import Morgan from 'morgan'

dbConnect()


export default async (req, res) => {
    const { method, body, query: { id } } = req
    const morgan = Morgan("dev")

    switch (method) {
        case "GET":
            try {
                const tasks = await Task.findById(id)
                if (!tasks) { return res.status(200).json({ msg: 'Task does not exist' }) }
                //await runMiddlewere(req,res,morgan)
                return res.status(200).json(tasks)
            }
            catch (err) {
                console.log(err)
                res.status(500).json({
                    message: err.message
                })
            }
        case "DELETE":
            try {
                const deleteTask = await Task.findByIdAndDelete(id)
                if (!deleteTask) { return res.status(200).json({ msg: 'Task does not exist' }) }
                return res.status(201).json(deleteTask)
            }
            catch (err) {
                console.log(err)
                res.status(500).json({
                    message: err.message
                })
            }
        case "PUT":
            try {
                const updatetask = await Task.findByIdAndUpdate(id, body, {
                    new: true,
                    runValidators: true
                })
                if (!updatetask) { return res.status(200).json({ msg: 'Task does not exist' }) }
                return res.status(201).json(updatetask)
            }
            catch (err) {
                console.log(err)
                res.status(500).json({
                    message: err.message
                })
            }
        default:
            return res.status(400).json({
                msg: "This method is not supported"
            })
    }
}