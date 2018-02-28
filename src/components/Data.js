import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class Data extends Component {
  state = { parks: [] };

  componentWillMount() {
    axios
      .get(
        "https://developer.nps.gov/api/v1/parks?stateCode=CO&api_key=eZfQSCr0qjpmZKXhG5zHUwIWauNAgYBMObEQ02ex"
      )
      .then(response => this.setState({ parks: response.data.data }));
  } //response.data.data[0].name

  renderParks() {
    for (var i = 0; i < this.state.parks.length; i++) {
      var obj = this.state.parks[i];
      var name = obj.name;

      console.log(name);

      {/* <Text> {name} </Text>; */}
    }
  }

  renderAlbums() {
   // console.log(this.state.parks);
     return this.state.parks.map(potato => {
    console.log(potato.name);
    return (<Text key={potato.name} >{potato.name}</Text>)
     });
  }

  render() {
    // console.log(this.state);
    // this.renderParks();
    return (
      <View>
        {/* {this.renderParks()} */}
        {this.renderAlbums()}
      </View>
    );
  }
}

export default Data;
