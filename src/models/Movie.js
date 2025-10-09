
import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
   title: {
      type: String,
      required: [true, 'Move title is required!'],
      minLength: [5, 'Title is too short!'],
      match: [/^[A-Za-z0-9 ]+$/, 'Title has some invalid characters!']
   },
   category: {
      type: String,
      enum: {
         values: ['tv-show', 'animation', 'movie', 'documentary', 'short-film'],
         massage: 'Your category is invalid!',
      },
      required: [true, 'Move category is required!'],
   },
   genre: {
      type: String,
      required: [true, 'Move genre is required!'],
      minLength: [5, 'Genre is too short!'],
      match: [/^[A-Za-z0-9 ]+$/, 'Genre has some invalid characters!']
   },
   director: {
      type: String,
      required: [true, 'Move director is required!'],
      minLength: [5, 'Movie director is too short!'],
      match: [/^[A-Za-z0-9 ]+$/, 'Director has some invalid characters!']
   },
   year: {
      type: Number,
      required: [true, 'Movie year is required!'],
      min: [1900, 'Movie year cannot be less than 1900!'],
      max: [2024, 'Movie year cannot be more than 1900!'], //TODO Dynamic year check
   },
   imageUrl: {
      type: String,
      required: [true, 'Movie imageUrl is required!'],
      match: [/^https?:\/\//, 'Image Url is invalid']
   },
   rating: {
      type: Number,
      required: [true, 'Movie rating is required!'],
      min: [1, 'Rating cannot be less then 1'],
      max: [1, 'Rating cannot be more then 10'],

   },
   description: {
      type: String,
      required: [true, 'Movie description is required!'],
      minLength: [20, 'Movie description is too short!']
   },
   casts: [{
      type: Types.ObjectId,
      ref: 'Cast',
   }],
   creator: {
      type: Types.ObjectId,
      ref: 'User',
      required: [true, 'Movie should have creator!'],
   }
});

const Movie = model('Movie', movieSchema);

export default Movie;