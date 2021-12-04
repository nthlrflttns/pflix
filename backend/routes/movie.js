const router = require('express').Router();
let Movie = require('../models/movie.model');

//home
router.route('/').get((req, res)=>{

    Movie.find()
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error: ' + err));


});

//add
router.route('/add').post((req, res)=>{

    const title = req.body.title;
    // const image = req.body.image;
    const date_released = req.body.date_released;
    const plot = req.body.plot;
    const genre = req.body.genre;
    const cast = req.body.cast;
    const director = req.body.director;

    const newMovie = new Movie({title, date_released, plot, genre, cast, director});

    newMovie.save()
        .then(movies => res.json('New Movie Added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

//details
router.route('/:id').get((req,res)=> {
    Movie.findById(req.params.id)
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req,res)=> {
    Movie.findByIdAndDelete(req.params.id)
    .then(movies => res.json('Movie Deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//update
router.route('/update/:id').post((req, res)=>{

    Movie.findById((req.params.id))
    .then(movies => {
    movies.title = req.body.title;
    // movie. image = req.body.image;
    movies.date_released = req.body.date_released;
    movies.plot = req.body.plot;
    movies.genre = req.body.genre;
    movies.cast = req.body.cast;
    movies.director = req.body.director;

    movies.save()
        .then(() => res.json('Movie Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));

});


module.exports = router;