require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, connectDB } = require("./config/db");

const app = express();
app.use(cors(), express.json());
const port = process.env.PORT;

const Password = require("./models/password");

// save password
app.post('/api/password/save', async (req, res) => {
  try {
    const { user, password } = req.body;
    const result = await Password.create({ user, password });
    res.json(result);
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ error: "Failed to save password" });
  }
});

app.delete('/api/password/delete/:id', async (req, res) => {
  try{
    const { id } = req.params
    const result = await Password.destroy({ where: {id}})
    res.json({message: "Deleted sucessfully"})
  }catch(err){
    console.error("Delete error:", err)
    res.status(500).json({ error: "Failed to delete password"})
  }
})

// get history
app.get('/api/password/list', async (req, res) => {
  try {
    const list = await Password.findAll({
      order: [["createdAt", "DESC"]]
    });
    res.json(list);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

connectDB();


sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is runing on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
