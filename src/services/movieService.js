import Movie from "../models/Movie.js";

export default {
   getAll(filter = {}) {
      let query = Movie.find();
      // const result = await Movie.find(filter).lean();
      // const resultObj = result.map(movie => movie.toObject());

      if (filter.title) {
         query = query.where('title', new RegExp(filter.title, 'i'));
      }

      if (filter.genre) {
         query = query.where('genre', new RegExp(filter.genre, 'i'));
      }

      if (filter.year) {
         query = query.where('year').equals(Number(filter.year));
         // result = result.find({ year: filter.year });
      }

      return query;
   },
   getOne(movieId) {
      // return Movie.findOne({ _id: movieId });
      return Movie.findById(movieId);
   },
   create(movieData) {
      movieData.rating = Number(movieData.rating);

      // const movie = new Movie(movieData);
      // return movie.save();

      return Movie.create(movieData);
   }
};