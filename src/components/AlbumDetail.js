import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle, 
        headerTextStyle, 
        headerContentStyle, 
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle} />
        <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
          <Button onPress1  ={() => Linking.openURL(url)}>
              Buy Now
          </Button>
      </CardSection>    
    </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};


export default AlbumDetail;