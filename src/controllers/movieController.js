import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get(`/create`, (req, res) => {

   res.render('create');
});

movieController.post(`/create`, (req, res) => {
   const movieData = req.body;
   const movie = movieService.create(movieData);

   res.redirect('/');
});

movieController.get('/:movieId/details', (req, res) => {
   const movieId = req.params.movieId;
   const movie = movieService.getOne(movieId);

   // TODO Prepare view data (temp solution)
   const raitingViewData = '&#x2605;'.repeat(Math.round(movie.rating));


   res.render('details', { movie, rating: raitingViewData });
});

movieController.get('/search', (req, res) => {
   const filter = req.query;
   const movies = movieService.getAll(filter);

   res.render('search', { movies, filter, pageTitle: 'Search Movies' });
});

export default movieController;