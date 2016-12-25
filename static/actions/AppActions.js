import socket from '../modules/Socket';

export const ON_QUESTIONS_RECIEVED = 'ON_QUESTIONS_RECIEVED';
export function onQuestionsRecieved({questions, answers}) {
    return {
        type: ON_QUESTIONS_RECIEVED,
        questions,
        answers
    };
}

export const ON_SEND_DAILY = 'ON_SEND_DAILY';
export function onSendDaily(event) {
    return function(dispatch, getState) {
        const {answers, currentDate} = getState();
        const body = {answers, currentDate};

        fetch('/daily', {
            method: 'POST',
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    dispatch(sendQuestionSuccess());
                } else {
                    dispatch(sendQuestionFailed(data.error));
                }
            });        
    };
}

export const CHANGE_BOOLEAN_ANSWER = 'CHANGE_BOOLEAN_ANSWER';
export function changeBooleanAnswer(e, id) {
    return {
        type: CHANGE_BOOLEAN_ANSWER,
        id: id,
        value: e.target.checked
    };
}

export const CHANGE_SELECT_ANSWER = 'CHANGE_SELECT_ANSWER';
export function changeSelectAnswer(e, id) {
    return {
        type: CHANGE_SELECT_ANSWER,
        id: id,
        value: e.target.selectedOptions[0].value
    };
}

export const ON_SETTINGS_LOAD = 'ON_SETTINGS_LOAD';
export function onSettingsLoad(settings) {
    return {
        type: ON_SETTINGS_LOAD,
        settings
    };
}