//To house entering and email and signing a user in

//going to be a class based component

import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';



class LoginForm extends Component {
    //add state to recive input from user
    state = { email: '', password: '', error: '', loading: false};

    onButtonPress() {
        const { email, password  } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLonginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLonginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
    }

    onLonginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: ''
         });
    }


    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    //TextInput -> user types text -> onChange Text event called -> 'setstate' with new text -> component rerenders 
    // when TextInput rendere, we tell it that its value is this.state.text

    render(){
        return ( 
            <Card>
                <CardSection>
                    <Input 
                    placeholder="user@gmail.com"
                    label="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    //could also be {text => this.setState({ email: text })}
                    />         
                </CardSection>   

                <CardSection >
                    <Input 
                    placeholder="password"
                    label="Password"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    />
                </CardSection>    

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                   {this.renderButton()}
                </CardSection>    
             </Card>
        ); 
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;