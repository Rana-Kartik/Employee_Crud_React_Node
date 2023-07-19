import Task from "../../model/Task";
import { dbConnect } from "../../../utils/index";
import { runMiddlewere } from "../../../utils/runMiddlewere";
import Morgan from 'morgan'

dbConnect()

export default async (req, res) => {
    const { method, body } = req
    const morgan = Morgan("dev")

    switch (method) {
        case "GET":
            try {
                const tasks = await Task.find()
                //await runMiddlewere(req,res,morgan)
                return res.status(200).json(tasks)
            }
            catch (err) {
                console.log(err)
                res.status(500).json({
                    message: err.message
                })
            }
        case "POST":
            try {
                const newTask = new Task(body)
                const savedTask = await newTask.save()
                return res.status(201).json(savedTask)
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