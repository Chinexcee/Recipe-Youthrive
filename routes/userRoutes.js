const express = require("express")
const { usersRegister, userLogin, getAllUsers, onlyOneUser, updateUserPassword, deleteUser, forgotPassword } = require("../ctrls/users")
const auth = require("../middlewares/verifytoken")





const router = express.Router()


router.post("/post_user", usersRegister)
router.get("/users", getAllUsers)
router.get("/one_user", onlyOneUser)
router.post("/login", auth, userLogin)
router.post("/forgot_user", forgotPassword)
router.patch("/update_user", updateUserPassword)
router.delete("/delete_user", deleteUser)



module.exports = router