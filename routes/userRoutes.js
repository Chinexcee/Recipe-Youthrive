const express = require("express")
const { usersRegister, userLogin, getAllUsers, onlyOneUser, updateUserPassword, deleteUser } = require("../ctrls/users")
const {userValidation} = require("../middlewares")





const router = express.Router()


router.post("/post_user", usersRegister)
router.get("/users", getAllUsers)
router.get("/one_user", onlyOneUser)
router.post("/login",  userLogin)
router.patch("/update_user", updateUserPassword)
router.delete("/delete_user", deleteUser)



module.exports = router