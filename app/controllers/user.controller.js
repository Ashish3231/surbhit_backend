const db = require('../models')
const User = db.user

//get user api
exports.signin = async (req, res) => {
  try {
    const {email, password} = req.query
    console.log("---------------------------", email, password)
    const user = await User.findOne({
      where: {
        email: email,
        password: password
      }
    })
    // console.log("--------------------------",user)
    if (!user) {
      return res.status(404).send({ message: 'User Not found.', success: false })
    }

    return res.status(200).send({
      success: true,
      id: user.id,
      username: user.username,
      email: user.email
    })
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}

//post user api
exports.create = async (req,res) => {
    try {
        const data= req.body
        console.log('user_ data: ',data)
        const userData = {
          username: data.username,
          email: data.email,
          password: data.password
        }
    
        if (!data) {
          return res.status(400).json({
            message: 'username, email and password is required for creating user'
          })
        }
    
        const user = await User.create(userData)
    
        res.status(200).json({
          success: true,
          user
        })
      } catch (err) {
        console.log('*******', err)
        return res.status(500).json({
          message: 'Internal server error'
        })
      }

}