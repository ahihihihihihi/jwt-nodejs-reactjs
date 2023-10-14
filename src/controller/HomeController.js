import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3305',
    database: 'jwt'
});


const handleUserPage = (req, res) => {
    return res.render("user.ejs")
}

const handleCreateUser = (req, res) => {
    console.log(">>> check req: ", req.body)
    let email = req.body.email
    let password = req.body.password
    let username = req.body.username

    // simple query
    connection.query(
        `INSERT INTO User(email, password, username)
VALUES(?,?,?)`, [email, password, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        }
    );

    return res.send("handleCreateUser")
}

module.exports = {
    handleUserPage,
    handleCreateUser,
}