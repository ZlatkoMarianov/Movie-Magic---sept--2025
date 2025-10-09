import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: [true, 'Email should be unique!'],
      match: [/[A-Za-z0-9]+\.[A-Za-z0-9]+$/],
      minLength: [10, 'Email should be at least 10 characters long!'],
   },
   password: {
      type: String,
      required: [true, 'Password is required'],
      match: [/^[A-Za-z0-9]+$/],
      minLength: [6, 'Password should be at least 6 characters long!'],
   }
});

// Hash password
userSchema.pre('save', async function () {
   //Generate salt
   // const salt = await bcrypt.genSalt(10);

   this.password = await bcrypt.hash(this.password, 10);
});


const User = model('User', userSchema);

export default User;