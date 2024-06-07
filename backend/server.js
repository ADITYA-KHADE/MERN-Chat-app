const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser=require("cookie-parser")

dotenv.config();
const PORT = process.env.PORT || 5000 ;

const mongodb=require("./config/connectdb");
mongodb();

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


const authRoute=require("./routes/authRoutes");
const messageRoute=require("./routes/messageRoutes");
const userRoute=require("./routes/userRoutes");

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users",userRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    }
);