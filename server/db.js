'use strict';

const {
	mongolabUri
} = require('./config')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logger = require('./utils/logger');

const User = mongoose.model('User', new Schema({
    id: String,
    userdata: {
        name: String
    },
    questionIds: Array
}));

const Question = mongoose.model('Question', new Schema({
    id: Number,
    text: String,
    awaits: String,
    colume: String
}));

const Daily = mongoose.model('Daily', new Schema({
    user: String,
    date: String,
    answers: Array
}));

module.exports = {
    db,
    getUser,
    getQuestionsByUserName,
    getQuestionsByIds,
    getAnswers
}


/**
 * @public
 * @return {Promise}
 */
function db() {
    return new Promise((resolve, reject) => {
        mongoose.connect(mongolabUri, error => {
            if (error) {           
                reject(error)
                return;
            }

            resolve();
        });
    }).then(() => {
        return logger
            .success('Service Bot connected with database');
    }).catch(error => {
        return logger
            .error('An error was occured while connecting to Mongo')
            .dev.error(error);
    });
}

function getUser(name) {
    return User.findOne({
        userdata: {name}
    });
}

function getQuestionsByUserName(username) {
    return getUser(username).
        then(({questionIds}) => Question.find({
            id: {
                $in: questionIds
            }
        }));
}

function getQuestionsByIds(ids = []) {
    return Question.find({
        id: {
            $in: ids
        }
    });
}

function getAnswers(user, date = null) {
    if (date === null) {
        return Daily.find({user});
    }

    return Daily.findOne({
        user,
        date
    });
}
