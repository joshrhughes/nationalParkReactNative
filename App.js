import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase"; //should be above anything else we import
import { Header, Button, Spinner, CardSection } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";
import Data from "./src/components/Data";

class App extends Component {
  state = { loggedIn: null };

  //bringin in Firebase
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDN_RWExpV6WC6f0lRkFb8bMWli3-CO0Us",
      authDomain: "auth-3236f.firebaseapp.com",
      databaseURL: "https://auth-3236f.firebaseio.com",
      projectId: "auth-3236f",
      storageBucket: "auth-3236f.appspot.com",
      messagingSenderId: "740860130602"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <View>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
            {/* <CardSection>
              <Data />
            </CardSection> */}
          </View>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />; // can wrap in a view tag to center
    }
  }

  render() {
    return <View>
        {/* <Header headerText="Authentication" /> */}
        <Header headerText="T H I S  I S   H A R D . . ." />
        {this.renderContent()}
        <CardSection>
          <Data />
        </CardSection>
      </View>
      
  }
}

export default App;
