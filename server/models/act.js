const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActSchema = new Schema({
    ActNumber: {
        type: String,
        required: true,
    },
    ActName: {
        type: String,
        required: true,
    },
});

const Acts =  mongoose.model('acts', ActSchema);

module.exports = Acts;