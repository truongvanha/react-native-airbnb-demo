import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import colors from '../../styles/colors';

export default class NextArrowButton extends Component {
  render() {
    const { disabled, handleNextButton } = this.props;
    const { opacityStyle } = disabled ? 0.2 : 0.6;
    return (
      <TouchableHighlight
        style={[{ opacity: opacityStyle }, styles.button]}
        onPress={handleNextButton}
        disabled={disabled}
      >
        <Icon
          name="angle-right"
          color={colors.green01}
          size={32}
          style={styles.icon}
        />
      </TouchableHighlight>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: 60,
    height: 60,
    backgroundColor: colors.white
  },
  icon: {
    marginRight: -2,
    marginTop: -2,
  }
});
