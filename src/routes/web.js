import express from "express";
import HomeController from '../controller/HomeController'

const router = express.Router()

const initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello World!")
    })

    router.get("/user", HomeController.handleUserPage)

    return app.use("/", router)
}

export default initWebRoutes