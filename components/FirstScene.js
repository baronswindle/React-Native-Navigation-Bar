// FirstScene.js

var React = require('react-native');

var NavigationBar = require('./NavigationBar');

var SecondScene = require('./SecondScene');

var {
  ScrollView, 
  StyleSheet, 
  Text, 
  TextInput, 
  View
} = React;

var FirstScene = React.createClass({

  goToPageTwo: function () {
    this.props.navigator.push({
      component: SecondScene,
      title: 'Page Two',
      previousPageTitle: this.props.route.title,
    });
  },
  
  render: function () {
    return (
      <View style={styles.container}>
        <NavigationBar 
          title={this.props.route.title} 
          rightButtonTitle='Page Two' 
          onRightButtonPress={this.goToPageTwo} 
        />
        <ScrollView contentContainerStyle={styles.innerContainer}>
          <Text>
            You've reached page one.
          </Text>
        </ScrollView>
      </View>
    );
  }

});


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

module.exports = FirstScene;
