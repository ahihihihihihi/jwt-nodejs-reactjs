import express from "express";
import HomeController from '../controller/HomeController'

const router = express.Router()

const initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello World!")
    })

    router.get("/user", HomeController.handleUserPage)
    router.post("/users/create-user", HomeController.handleCreateUser)

    return app.use("/", router)
}

export default initWebRoutes