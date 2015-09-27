// SecondScene.js

var React = require('react-native');

var NavigationBar = require('./NavigationBar');

var ThirdScene = require('./ThirdScene');

var {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} = React;

var SecondScene = React.createClass({

  goBack: function () {
    this.props.navigator.pop();
  },

  goToPageThree: function () {
    this.props.navigator.push({
      component: ThirdScene,
      title: 'Page Three',
      previousPageTitle: this.props.route.title,
    });
  },
  
  render: function () {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={this.props.route.title} 
          leftButtonTitle={this.props.route.previousPageTitle}  
          onLeftButtonPress={this.goBack}
          rightButtonTitle='Page Three' 
          onRightButtonPress={this.goToPageThree} 
        />
        <ScrollView contentContainerStyle={styles.innerContainer}>
          <Text>
            You've reached page two.
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

module.exports = SecondScene;
