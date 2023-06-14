import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import SingleStory from '../SingleStory/SingleStory';
import CreateStory from '../CreateStory/CreateStory';
import styles from './Styles';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {STORYVIEW} from '../../constants/Navigation';

const Stories = props => {
  const stories = useSelector(state => state.user.storiesList);
  const _renderItem = ({item}) => {
    return (
      <>
        {item === 'create' ? (
          <CreateStory {...props} />
        ) : (
          <SingleStory
            onPress={() => props.navigation.navigate(STORYVIEW, {item})}
            {...props}
            item={item}
          />
        )}
      </>
    );
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.listWrapper}>
      {stories?.result?.length > 0 && (
        <FlatList
          data={['create', ...stories?.result]}
          renderItem={_renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{gap: 3, columnGap: 3}}
        />
      )}
    </SafeAreaView>
  );
};

export default Stories;
