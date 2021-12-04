const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({

     title: {
         type: String,
         required:true,
         trim: true
     },
    //  image: {
    //     type: Image,
    //     required: true,
    //     trim: true
    // },
     date_released: {
         type: Date,
         required: true,
         trim: true
     },
     plot: {
         type: String,
         required: true,
         trim: true
     },
     genre: {
         type: String,
         required: true,
         trim: true
     },
     cast: {
         type: String,
         required: true,
         trim: true
     },
     director: {
         type: String,
         required: true,
         trim: true
     },

}, {
    timestamps: true
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;