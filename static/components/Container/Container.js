import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';
// import css from './Table.css';

export default class Container extends BaseComponent {
    render() {
        const {
            children,
            row
        } = this.props;

        return (
            <div className="container">
                {this._getBody(row, children)}
            </div>
        );
    }

    _getBody(row, children) {
        if (row) {
            return (
                <div className="row">
                    {children}
                </div>
            );
        }

        return children;
    }
}
