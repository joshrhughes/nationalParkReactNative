// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component 
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}> 
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    //no css. Camel Casing
    viewStyle: {
        backgroundColor: '#f6f6f6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, 
            height: 2,
            elevation: 2,
            position: 'relative'
        },
        shadowOpacity: .2,

    },
    textStyle: {
        fontSize: 20
    }
};


//  Make the component avaibale to other parts of the app
export { Header};
