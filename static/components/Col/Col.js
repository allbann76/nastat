import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';
// import css from './Table.css';

export default class Col extends BaseComponent {
    render() {
        const {
            children,
            md,
            sm,
            lg,
            xs,
            hidden
        } = this.props;

        const classes = [
            md ? `col-md-${md}` : null,
            sm ? `col-sm-${sm}` : null,
            lg ? `col-lg-${lg}` : null,
            xs ? `col-xs-${xs}` : null,
            hidden ? `hidden-${hidden}` : null
        ].filter(Boolean).join(' ');

        return (
            <div className={classes} {...this.props}>
                {children}
            </div>
        );
    }
}
