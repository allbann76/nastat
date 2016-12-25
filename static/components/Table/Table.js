import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';
import css from './Table.css';

const MAX_PARTICIPANTS_COUNT = 12;

export default class Table extends BaseComponent {
    render() {
        const {
            onTableRemove,
            tableId,
            name,
            toRemove,
            children
        } = this.props;

        return (
            <div className={toRemove ? css.toRemove : css.root}>
                <span onClick={_ => onTableRemove(tableId)} className={css.remove}>x</span>
                <div className={css.players}>
                    {name ? <div className={css.title}>{name}</div> : null}
                    {this._renderPlayers()}
                </div>
            </div>
        );
    }

    _renderPlayers() {
        const {
            participants
        } = this.props;

        const players = new Array(MAX_PARTICIPANTS_COUNT).join('.').split('.').map((_, index) => {
            return <span className={index <= participants ? css.activePlayer : css.player}></span>
        });

        return (
            <div className={css.playersContainer}>
                {players}
            </div>
        );
    }
}
