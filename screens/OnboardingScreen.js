import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

const slides = [
  {
    id: "1",
    image: require("../assets/images/onboarding-img-1.png"),
    title: "Your Health Hub",
    subtitle:
      "We are here to revolutionize your healthcare experience. We put you in control.",
  },
  {
    id: "2",
    image: require("../assets/images/onboarding-img-2.png"),
    title: "Your Health, Your Rules",
    subtitle:
      "Schedule appointments, access medical records, and communicate with your healthcare team seamlessly.",
  },
  {
    id: "3",
    image: require("../assets/images/onboarding-img-3.png"),
    title: "Track Your Vital Signs",
    subtitle:
      "Record your glucose, temperature, heart rate, blood pressure, and more with ease, while we keep an eye on your well-being.",
  },
];

const Slide = ({ item }) => {
  return (
    <View>
      <View className="px-4 pt-6 pb-4">
        <Image className="" source={require("../assets/images/Logo.png")} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={item?.image}
          style={{ height: "70%", width, resizeMode: "contain" }}
        />
        <View>
          <Text style={styles.title}>{item?.title}</Text>
          {/* <Text style={styles.subtitle}>{item?.subtitle}</Text> */}
        </View>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: "#011D7E",
                  width: 16,
                  borderRadius: 50,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View className="flex items-center justify-center space-y-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            className="w-full bg-ResolutionBlue py-4 rounded-full"
          >
            <Text className="text-center text-white font-bold">
              Create free account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signin")}
            className="w-full border border-ResolutionBlue py-4 rounded-full"
          >
            <Text className="text-center text-ResolutionBlue font-bold">
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('HomeScreen')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View> */}
      </View>
    );
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnboardingScreen;
