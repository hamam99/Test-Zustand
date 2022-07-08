import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import useStoreZustand from './hooks/useStoreZustand';

const Details = () => {
  const {count, increaseCount, reduceCount, clearCount} = useStoreZustand(
    state => state,
  );

  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <Text style={{paddingHorizontal: 20}}>{count}</Text>
      </View>
      <Button title="Clear Count" onPress={clearCount} />
    </View>
  );
};

export default Details;
