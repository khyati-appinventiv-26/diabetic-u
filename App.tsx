import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet ,Text, ImageBackground} from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.splashContainer}>
            <ImageBackground source={require('./src/assets/Images/splash.png')}  >
              <Image source={require('./src/assets/Images/splash_alterate.gif')} style={styles.splashImage}/>
            </ImageBackground>
        </View>
    );
};

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); 
    }, []);

    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <View style={{flex: 1}}>
            <Text> App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    splashImage: {
        width: 200,
        height: 200,
    },
});

export default App;
