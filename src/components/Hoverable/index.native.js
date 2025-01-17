import React from 'react';
import {View} from 'react-native';
import _ from 'underscore';
import {defaultProps, propTypes} from './hoverablePropTypes';

/**
 * On mobile, there is no concept of hovering, so we return a plain wrapper around the component's children,
 * where the hover state is always false.
 *
 * @param {Object} props
 * @returns {React.Component}
 */
function Hoverable(props) {
    const childrenWithHoverState = _.isFunction(props.children) ? props.children(false) : props.children;
    return <View style={props.containerStyles}>{childrenWithHoverState}</View>;
}

Hoverable.propTypes = propTypes;
Hoverable.defaultProps = defaultProps;
Hoverable.displayName = 'Hoverable';

export default Hoverable;
