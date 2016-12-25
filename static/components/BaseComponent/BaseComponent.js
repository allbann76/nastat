import React from 'react';

export default class BaseComponent extends React.Component {
    getRootClassName(internalClassName = []) {
        let {className} = this.props;
        className = Array.isArray(className) ? className : [className];
        internalClassName = Array.isArray(internalClassName) ? internalClassName : [internalClassName];

        return className
            .concat(internalClassName)
            .filter(Boolean)
            .join(' ');
    }
}
