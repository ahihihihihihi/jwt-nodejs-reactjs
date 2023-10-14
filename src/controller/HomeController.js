import express from "express";


const handleUserPage = (req, res) => {
    return res.render("user.ejs")
}

module.exports = {
    handleUserPage
}