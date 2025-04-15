import React, { useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import PetCard from './PetCard';
import AdCard from './AdCard';
import { Pet } from '@/entities/Pet';
import { Ad } from '@/entities/Ad';
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.1;

type CardItem = Pet | Ad;

type CardsControllerProps = {
  item: CardItem;
  onSwipe: (direction: 'left' | 'right') => void;
};

const CardsController: React.FC<CardsControllerProps> = ({ item, onSwipe }) => {
  const position = useRef(new Animated.ValueXY()).current;

  const handleGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: position.x } }],
    { useNativeDriver: true }
  );

  const handleGestureStateChange = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX > SWIPE_THRESHOLD) {
        triggerSwipe('right');
      } else if (nativeEvent.translationX < -SWIPE_THRESHOLD) {
        triggerSwipe('left');
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    }
  };

  const triggerSwipe = (direction: 'left' | 'right') => {
    Animated.timing(position, {
      toValue: { x: direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH, y: 0 },
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      onSwipe(direction);
      requestAnimationFrame(() => {
        position.setValue({ x: 0, y: 0 });
      });
    });
  };

  const rotation = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
    outputRange: ['-15deg', '0deg', '15deg'],
    extrapolate: 'clamp',
  });

  const renderCard = () => {
    if ('name' in item && 'breed' in item) {
      return <PetCard pet={item} />;
    }
    return <AdCard ad={item} />;
  };

  return (
    <PanGestureHandler
      onGestureEvent={handleGestureEvent}
      onHandlerStateChange={handleGestureStateChange}
      activeOffsetX={[-15, 15]}
    >
      <Animated.View
        style={[styles.animatedCard, { transform: [{ translateX: position.x }, { rotate: rotation }] }]}
      >
        {renderCard()}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default CardsController;
