// NavigationBar.js

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

var NAV_HEIGHT = 40;

var NavigationBar = React.createClass({

  renderLeftButton: function () {
    if (this.props.leftButtonTitle) {
      return (
        <TouchableOpacity onPress={this.props.onLeftButtonPress}>
          <Text style={[styles.leftButtonText, styles.buttonText]}>
            {'< ' + this.props.leftButtonTitle}
          </Text>
        </TouchableOpacity>
      );
    }
  },

  renderRightButton: function () {
    if (this.props.rightButtonTitle) {
      return (
        <TouchableOpacity onPress={this.props.onRightButtonPress}>
          <Text style={[styles.rightButtonText, styles.buttonText]}>
            {this.props.rightButtonTitle}
          </Text>
        </TouchableOpacity>
      );
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.leftButton}>
          {this.renderLeftButton()}
        </View>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <View style={styles.rightButton}>
          {this.renderRightButton()}
        </View>
      </View>
    );
  }

});


var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 10,
    height: NAV_HEIGHT,
    backgroundColor: 'white',
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1,
  },

  title: {
    flex: 1,
    textAlign: 'center',
    color: '#373e4d',
    fontWeight: '500',
  },

  leftButton: {
    width: 90,
  },

  rightButton: {
    width: 90,
  },

  buttonText: {
    color: '#5890ff',
  },

  leftButtonText: {
    textAlign: 'left',
  },

  rightButtonText: {
    textAlign: 'right',
  }

});

module.exports = NavigationBar;
