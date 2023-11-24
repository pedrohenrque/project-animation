import { Button, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

export default function Home() {
  function AnimatedStyleUpdateExample() {
    const randomWidth = useSharedValue(10);

    const config = {
      duration: 2000,
      easing: Easing.bezier(0.5, 0.01, 0, 1)
    };

    const style = useAnimatedStyle(() => {
      return {
        width: withTiming(randomWidth.value, config)
      };
    });

    return (
      <View style={styles.content}>
        <Animated.View style={[styles.box, style]} />
        <Button
          title="toggle"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
      </View>
    );
  }

  return (
    <>
      <AnimatedStyleUpdateExample />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: 'black',
    margin: 30
  }
});
