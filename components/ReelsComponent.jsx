import { View, Text, FlatList, Animated, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import { reelsVideosData } from '../data'
import SingleReels from './SingleReels'
import { SwiperFlatList } from 'react-native-swiper-flatlist'



const ReelsComponent = () => {

  const [currentVideo, setCurrentVideo] = useState(null);

  const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get("screen");

  const [currentIndex, setCurrentIndex] = useState(0);

  const reelsSlider = useRef(null);

  const scrollY = useRef(new Animated.Value(0)).current;

  // const handleChangeIndexValue = ({index}) => {
  //   setCurrentIndex(index);
  // };

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      
      const index = Math.round(value / ScreenHeight);
      setCurrentIndex(index);
      console.log(index, ScreenHeight);
      setCurrentVideo(reelsVideosData[index]);
    })
  }, [])

  return (

      // <SwiperFlatList

      //   vertical={true}
      //   data={reelsVideosData}
      //   pagingEnabled={true}
      //   showsVerticalScrollIndicator={false}
      //   ref={reelsSlider}
      //   scrollEventThrottle={35}
      //   snapToInterval={ScreenHeight}
      //   snapToAlignment={'start'}
      //   // onScroll={Animated.event(
      //   //   [{nativeEvent: { contentOffset: {y: scrollY}}}],
      //   //   {useNativeDriver: true},
      //   // )}
      //   onChangeIndex={handleChangeIndexValue}
      //   renderItem={(item, index) => (
      //     <SingleReels item={item} index={index} currentIndex={currentIndex} />
      //   )}
      //   keyExtractor={(item, index) => item.id}
      // />


      <Animated.FlatList
        vertical={true}
        data={reelsVideosData}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        ref={reelsSlider}
        scrollEventThrottle={35}
        snapToInterval={ScreenHeight}
        snapToAlignment={'start'}
        onScroll={Animated.event(
          [{nativeEvent: { contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => (
          <SingleReels item={item} currentVideo={currentVideo} index={index} currentIndex={currentIndex} />
        )}
        keyExtractor={(item, index) => item.id}
      />
  )
}

export default ReelsComponent