import React , { Component } from 'react';
import { View } from 'react-native';
import firebase from "firebase";  //should be above anything else we import
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    //bringin in Firebase
    componentWillMount () {
        firebase.initializeApp ({
            apiKey: 'AIzaSyDN_RWExpV6WC6f0lRkFb8bMWli3-CO0Us',
            authDomain: 'auth-3236f.firebaseapp.com',
            databaseURL: 'https://auth-3236f.firebaseio.com',
            projectId: 'auth-3236f',
            storageBucket: 'auth-3236f.appspot.com',
            messagingSenderId: '740860130602'
        });

        firebase.auth().onAuthStateChanged((user) => {
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
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default: 
                return <Spinner size="large" /> // can wrap in a view tag to center
        }

        
    }


    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {  this.renderContent() }
            </View>
        );
    }

}

export default App;