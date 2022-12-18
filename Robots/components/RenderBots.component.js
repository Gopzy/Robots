import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Robots = ({item, index, robots, onPressCart}) => {
  const {name, image, price, stock, createdAt, material} = item;

  return (
    <View style={styles.botStyle}>
      <View style={styles.stockView}>
        <Text style={styles.fontWeightMedium}>In Stock </Text>
        <Text style={styles.fontWeightMedium}>{stock}</Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text>{name}</Text>
      <Text>{material}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>Created date -</Text>
        <Text>{moment(createdAt).format('DD-MMM-YY')}</Text>
      </View>
      <Text>฿ {price}</Text>
      <TouchableOpacity
        disabled={robots[index].stock === 0}
        style={{backgroundColor: 'lightgrey'}}
        onPress={() => onPressCart(index)}>
        <Text
          style={
            robots[index].stock > 0
              ? styles.textAlignCenter
              : [styles.textAlignCenter, {color: 'grey'}]
          }>
          {' '}
          Add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  botStyle: {
    padding: 15,
    borderWidth: 1,
    maxHeight: 250,
    maxWidth: 220,
    borderRadius: 10,
    marginTop: 15,
  },
  stockView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fontWeightMedium: {
    fontWeight: '500',
  },
  image: {
    width: 50,
    height: 50,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

export default Robots;
