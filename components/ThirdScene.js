// ThirdScene.js

var React = require('react-native');

var NavigationBar = require('./NavigationBar');

var {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} = React;

var ThirdScene = React.createClass({

  goBack: function () {
    this.props.navigator.pop();
  },
  
  render: function () {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={this.props.route.title} 
          leftButtonTitle={this.props.route.previousPageTitle}  
          onLeftButtonPress={this.goBack}
        />
        <ScrollView contentContainerStyle={styles.innerContainer}>
          <Text>
            You've reached page three.
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

module.exports = ThirdScene;
