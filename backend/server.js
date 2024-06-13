const express = require("express");
// const app = express();
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const { app, server } = require("./sockets.io/socket");

const path = require("path");
__dirname = path.resolve();


dotenv.config();
const PORT = process.env.PORT || 5000;

const mongodb = require("./config/connectdb");
mongodb();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
const authRoute = require("./routes/authRoutes");
const messageRoute = require("./routes/messageRoutes");
const userRoute = require("./routes/userRoutes");

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


server.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
