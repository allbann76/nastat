import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';
import css from './List.css';

export default class List extends BaseComponent {
    render() {
        const {
            questions
        } = this.props;

        const questionsMarkup = questions.map(this._renderQuestion.bind(this));

        return (
            <div className={css.container}>
                <form>
                    {questionsMarkup}
                </form>
            </div>
        );
    }

    _renderQuestion(question, i) {
        const {
            answers
        } = this.props;
        
        const {
            id,
            text,
            awaits
        } = question;

        let answer = null;

        let hasAnswer = answers.filter(([qId, qAns]) => qId === id);

        if (hasAnswer.length) {
            answer = hasAnswer.pop()[1];
            hasAnswer = true;
        }

        return (
            <div className={css.question} key={id}>
                {
                    this._renderLabel(question, answer)
                }
                {
                    hasAnswer ? String(answer) : null
                }
            </div>
        );
        
    } 

    _renderLabel(question, answer) {
        const {text, awaits, id, options} = question;
        
        const {
            changeBooleanAnswer,
            changeSelectAnswer
        } = this.props;

        let className = 'label';

        let control = null;

        if (awaits === 'boolean') {
            className = Boolean(answer) ? 'labelTrue' : 'labelFalse';
            control = (
                <input 
                    type="checkbox"
                    checked={Boolean(answer)}
                    className={css.checkbox}
                    onChange={e => changeBooleanAnswer(e, id)}
                />
            );
        }

        if (awaits === 'select') {
            className = 'labelSelect';
            control = (
                <select onChange={e => changeSelectAnswer(e, id)}>
                    {options.map((option, i) => {
                        return (<option selected={option == question.default} key={i}>{option}</option>)
                    })}
                </select>
            );
        }

        return (
            <label className={css[className]}>
                <span className={css.text}>{text}</span>
                <span className={css.control}>{control}</span>
            </label>
        );
    }
}
