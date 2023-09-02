const app = require("./app");

const port = 3000;

app.listen(port, (err) => {
    if (!err) {
        console.log(`Server is successfully running on Port ${port}...`);
    } else {
        console.log(err);
    }
});