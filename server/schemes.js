'use strict';

const {
    spread,
    extend,
    isEmpty
} = require('lodash');

const {
    getUser,
    getQuestionsByUserName,
    getQuestionsByIds,
    getAnswers
} = require('./db');

const schemes = [
    {
        verb: 'get', 
        url:  '/user/:user',
        action: user
    },
    {
        verb: 'get',
        url:  '/questions',
        action: questions
    },
    {
        verb: 'post',
        url:   '/daily',
        action: daily
    },
    {
        verb: 'get',
        url: '/settings/:user',
        action: user
    }
]

function user(req, res, next) {
    const {user} = req.params;

    return getUser(user)
        .then(data => Promise.all([
            data,
            getQuestionsByIds(data.questionIds)
        ]))
        .then(spread((userdata, questions) => {           
            res.json({
                user: userdata,
                questions: questions
            });
        }))
}

function questions(req, res, next) {
    const {currentDate} = req.query;
   
    return Promise.all([
        getQuestionsByUserName('Trdat'),
        getAnswers('Trdat', currentDate)
    ]).then(spread((questions, answersData) => {
        let answers = [];

        if (!isEmpty(answersData)) {
            answers = Array.isArray(answersData) ? answersData[0].answers : answersData.answers;
        }

        res.json({questions, answers});
    }))
}

function daily(req, res, next) {
    res.json({
        ok: true
    })   
}

module.exports = function (app) {
    schemes.forEach(({verb, url, action}) => {
        console.log('verb', verb);
        app[verb](url, action);
    });
};

