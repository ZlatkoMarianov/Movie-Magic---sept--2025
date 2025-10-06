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
      // return Movie.findById(movieId).populate('casts');
      return Movie.findById(movieId);
   },
   create(movieData, userId) {
      return Movie.create({
         ...movieData,
         rating: Number(movieData.rating),
         creator: userId,
      });
   },
   async attach(movieId, castId) {
      // Attach method: find movie by id, validate, initialize casts and avoid duplicates
      const movie = await Movie.findById(movieId);
      if (!movie) {
         throw new Error('Movie not found');
      }

      if (!Array.isArray(movie.casts)) {
         movie.casts = [];
      }

      // avoid duplicate attach
      if (!movie.casts.includes(castId)) {
         movie.casts.push(castId);
      }

      return movie.save();
   },
   delete(movieId) {
      return Movie.findByIdAndDelete(movieId)
   },
   edit(movieId, movieData) {
      return Movie.findByIdAndUpdate(movieId, {
         ...movieData,
         rating: Number(movieData.rating)
      }, { new: true });
   },
};