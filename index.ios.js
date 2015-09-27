/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var FirstScene = require('./components/FirstScene');

var {
  AppRegistry,
  Navigator,
  StyleSheet,
  View,
} = React;

var STATUS_BAR_HEIGHT = 15;

var ReactNativeNavigationBar = React.createClass({
    renderScene: function (route, navigator) {
      var Component = route.component;

      return (
        <Component navigator={navigator} route={route} />
      );
    },

    render: function () {
      return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
          <Navigator 
            renderScene={this.renderScene} 
            initialRoute={{
              component: FirstScene, 
              title: 'Page One' 
            }}
          />
        </View>
      );

    }

  });

  var styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    statusBar: {
      height: STATUS_BAR_HEIGHT,
    },
  });

AppRegistry.registerComponent('ReactNativeNavigationBar', () => ReactNativeNavigationBar);
