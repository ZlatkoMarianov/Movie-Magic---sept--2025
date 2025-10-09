import bcrypt from "bcrypt";

import User from "../models/User.js";
import { generateAuthToken } from "../utils/tokenUtils.js";

export default {
   async register(userData) {
      const user = await User.create(userData);

      // const count = await User.countDocuments({ email: userData.email });
      // if (count > 0) {
      //    throw new Error('User already exists!');
      // }

      const userExsits = await User.exists({ email: userData.email });
      if (userExsits) {
         throw new Error('User already exists!');
      }

      const token = generateAuthToken(user);

      return token;
   },
   async login(email, password) {
      // Validate user
      const user = await User.findOne({ email });

      if (!user) {
         throw new Error('Invalid user or password!');
      }

      // validate password

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
         throw new Error('Invalid user or password!');
      }

      // Create token
      const token = generateAuthToken(user);

      return token;
   },
};