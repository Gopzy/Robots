import moment from 'moment';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import BotStyles from './BotsStyle';

const Robots = ({item, index, robots, onPressCart}) => {
  const {name, image, price, stock, createdAt, material} = item;

  return (
    <View style={BotStyles.botStyle}>
      <View style={BotStyles.stockView}>
        <Text style={BotStyles.fontWeightMedium}>In Stock </Text>
        <Text style={BotStyles.fontWeightMedium}>{stock}</Text>
      </View>
      <Image
        style={BotStyles.image}
        source={{
          uri: image,
        }}
      />
      <Text>{name}</Text>
      <Text>{material}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>Created date -</Text>
        <Text>{moment(createdAt).format('DD-MMM-Y')}</Text>
      </View>
      <Text>LKR {price}</Text>
      <TouchableOpacity
        disabled={robots[index].stock === 0}
        style={{backgroundColor: 'lightgrey'}}
        onPress={() => onPressCart(index)}>
        <Text
          style={
            robots[index].stock > 0
              ? BotStyles.textAlignCenter
              : [BotStyles.textAlignCenter, {color: 'grey'}]
          }>
          {' '}
          Add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Robots;
