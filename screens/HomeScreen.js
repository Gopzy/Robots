import React, {useEffect, useRef, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRobots} from '../store/Action/FetchRobotDataAction';
import {Dropdown} from 'react-native-material-dropdown';
import Robots from '../components/RenderBots.component';
import {materialData} from '../const/MetrialData';
import HomeScreenStyle from './HomeScreenStyle';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const robotData = useSelector(state => state?.robotData);

  const [robots, setRobots] = useState([]);
  const [selectedRobotIndex, setSelectedRobotIndex] = useState([]);
  const [selectedRobotCount, setSelectedRobotCount] = useState(0);
  const [filterDisable, setFilterDisable] = useState(false);

  useEffect(() => {
    dispatch(
      fetchRobots(),
      //   () => {
      //   setRobots(robotData?.data);
      // }
    );
  }, []);

  useEffect(() => {
    setRobots(robotData?.data);
  }, [robotData]);

  // useEffect(() => {
  //   if (selectedRobotCount > 5) showAleart();
  // }, [selectedRobotCount]);

  const showAleart = () => {
    Alert.alert('Oops!', "You can't add more than 6 Robots!", [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const setRobotsCount = index => {
    if (selectedRobotCount > 5 && !selectedRobotIndex.includes(index))
      return showAleart();
    else if (!selectedRobotIndex.includes(index) && selectedRobotCount < 6) {
      setSelectedRobotIndex([...selectedRobotIndex, index]);
      setSelectedRobotCount(selectedRobotCount + 1);
    }
  };

  const onPressCart = index => {
    setRobotsCount(index);

    if (robots[index].stock > 0 && selectedRobotCount < 7) {
      setRobots([...robots, (robots[index].stock = robots[index].stock - 1)]);
    }
  };

  const RenderBots = ({item, index}) => (
    <Robots
      item={item}
      index={index}
      robots={robots}
      onPressCart={onPressCart}
    />
  );

  const onPressFilter = item => {
    const filteredRobots = robots?.filter(items => items.material === item);
    setRobots(filteredRobots);
    setFilterDisable(true);
  };

  const onPressClear = () => {
    console.log(robotData?.data);
    setRobots(robotData?.data);
    setFilterDisable(false);
  };

  return (
    <>
      <Text style={HomeScreenStyle.headerText}>Robots Home Screen </Text>
      <View style={HomeScreenStyle.filterRow}>
        <View style={HomeScreenStyle.dropdown}>
          <Dropdown
            label="Filter By material"
            data={materialData}
            onChangeText={item => onPressFilter(item)}
            disabled={filterDisable}
          />
        </View>
        <TouchableOpacity
          style={
            filterDisable
              ? HomeScreenStyle.btnActive
              : HomeScreenStyle.btnDisable
          }
          onPress={onPressClear}>
          <Text style={HomeScreenStyle.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <View style={HomeScreenStyle.container}>
        <FlatList
          data={robots}
          renderItem={(data, index) => RenderBots(data, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
};

export default HomeScreen;
