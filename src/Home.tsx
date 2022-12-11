import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import useStoreZustand from './hooks/useStoreZustand';

const Home = () => {
  const {count, increaseCount, reduceCount, clearCount, log2, log1} =
    useStoreZustand(state => state);

  const navigation = useNavigation();

  const gotoDetail = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <Button title="-" onPress={reduceCount} />
        <Text style={{paddingHorizontal: 20}}>{count}</Text>
        <Button title="+" onPress={increaseCount} />
      </View>
      <Button title="Clear Count" onPress={clearCount} />
      <Button title="Go to Details" onPress={gotoDetail} />
    </View>
  );
};

export default Home;
