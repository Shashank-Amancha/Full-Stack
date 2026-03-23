const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// =======================
// Middleware
// =======================
app.use(cors());
app.use(express.json());
app.use(express.static("public"));   // 🔥 This enables HTML

// =======================
// MongoDB Connection
// =======================
mongoose.connect("mongodb://127.0.0.1:27017/studentGradesDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// =======================
// Import Model
// =======================
const Grade = require("./models/Grade");

// =======================
// CRUD OPERATIONS
// =======================

// 1️⃣ Add Grade
app.post("/grades", async (req, res) => {
    try {
        const newGrade = await Grade.create(req.body);
        res.status(201).json(newGrade);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 2️⃣ Get All Grades
app.get("/grades", async (req, res) => {
    try {
        const grades = await Grade.find();
        res.json(grades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 3️⃣ Get Grades By Student Name
app.get("/grades/student/:name", async (req, res) => {
    try {
        const grades = await Grade.find({
            student_name: req.params.name
        });
        res.json(grades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 4️⃣ Update Grade
app.put("/grades/:id", async (req, res) => {
    try {
        const updated = await Grade.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 5️⃣ Delete Grade
app.delete("/grades/:id", async (req, res) => {
    try {
        await Grade.findByIdAndDelete(req.params.id);
        res.json({ message: "Grade deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// =======================
// Start Server
// =======================
app.listen(5000, () => {
    console.log("Server running on port 5000");
});