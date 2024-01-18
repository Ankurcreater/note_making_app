import {app} from "./app.js";
import {connectDB} from "./data/database.js"

connectDB();

const Port = process.env.PORT;

app.listen(Port, () => {
    console.log("Server is working");
});