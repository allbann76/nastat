import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {
    ON_QUESTIONS_RECIEVED,
    ON_SEND_DAILY,
    SEND_DAILY_SUCCESS,
    SEND_DAILY_FAIL,

    CHANGE_BOOLEAN_ANSWER,
    CHANGE_SELECT_ANSWER,

    ON_SETTINGS_LOAD
} from '../actions/AppActions';

let initialState = {
    questions: [],
    answers: [],
    currentDate: getCurrentDate(),
    user: 'Trdat',
    settings: {}
};

let store = applyMiddleware(thunk)(createStore)(function (state = initialState, action) {
    let change = {};


    switch (action.type) {
    case ON_QUESTIONS_RECIEVED:
        change = {
            questions: action.questions,
            answers: action.answers
        };
        break;
    case SEND_DAILY_SUCCESS:
        change = {
            answersChanged: null,
        }
        break;
    case SEND_DAILY_FAIL:
        change = {
            answerError: action.error,
        }
        break;
    case CHANGE_BOOLEAN_ANSWER:
    case CHANGE_SELECT_ANSWER:
        const {
            id,
            value
        } = action;

        const answers = state.answers.map(answer => {
            if (answer[0] == id) {
                return [answer[0], value];
            }
            return answer;
        })

        change = {
            answers
        };
        break;
    case ON_SETTINGS_LOAD:
        change = {
            settings: action.settings
        }
        break;
    }

    change.currentDate = getCurrentDate();

    return JSON.parse(JSON.stringify(Object.assign({}, state, change)));
});

export default store;

function getCurrentDate() {
    const d = new Date();
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('-');
}
