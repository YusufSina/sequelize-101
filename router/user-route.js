const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const db = require('../models/index')
const User = require('../models/User').User

router.get('/', (req, res) => {
  const jane = db.User.create({ firstName: "Jane2", lastName: "Kerry2", email: "jk2@gml.com" });
  console.log(jane instanceof User); // true
  console.log(jane); 
  res.send("User was created!");
})

router.get('/getAll', async (req, res) => {
  const users = await db.User.findAll()
  console.log("All users:", JSON.stringify(users, null, 2));
  res.send("Users were selected")
})

router.put('/update/:id', async (req, res) => {
  const user = await db.User.update(
    {
      firstName: "Updated Jane"
    },
    {
      where: {
        id: req.params.id
      }
    }
   )
   console.log("Selected users:", JSON.stringify(user, null, 2));

  res.send("It is updated")
})

router.delete('/delete/:id', async (req, res) => {
  const user = db.User.destroy({
    where: {
      id: req.params.id
    }
  })

  console.log("Deleted users:", JSON.stringify(user, null, 2));
  res.send("It is deleted")

})

module.exports = router