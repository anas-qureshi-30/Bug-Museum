const express=require('express')
const cors=require('cors')
const helmet=require('helmet')
const connectDB=require("./config/db")
const authRoutes = require("./routes/authRoutes")
const bugRoutes = require("./routes/bugRoutes");
require('dotenv').config({
    path: "./backend/.env"
})
const app=express()
connectDB()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/bugs", bugRoutes)
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to BugMuseum API"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`BugMuseum server running on port ${PORT}`);
});