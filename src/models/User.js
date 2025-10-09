import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
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