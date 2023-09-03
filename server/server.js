const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });


const app = require("./app");

//console.log(process.env)

const port = process.env.PORT;

app.listen(port, (err) => {
    if (!err) {
        console.log(`Server is successfully running on Port ${port}...`);
    } else {
        console.log(err);
    }
});