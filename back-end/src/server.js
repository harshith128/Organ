const app = require("./index")

const connect = require("./configs/db")

app.listen(2737,async () => {
    await connect()
    console.log("listening at port 2737");
})