const User = require('../models/schema');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
 const {name, email, password } = req.body

 try {
    if(!name || !email || !password){
        return res.status(400).json ({message: 'All fields are required'})
    }
    const user = await User.findone({email});
    if(user){
    return res.status(400).json({message: 'User already exists'})
    }
const hashedpassword = await bcrypt.hash(password, 10);
const Otp = Math.floor(100000 + Math.random() * 900000).toString();
const OtpExpiry = new Date(Date.now() + 10 * 60 * 1000);
const newUser = new User({
 name,
 email,
 password: hashedpassword,
 Otp,
 OtpExpiry
});

await newUser.save();
 } catch (error) {
    console.error('Internal server error', error)
    
 }
}