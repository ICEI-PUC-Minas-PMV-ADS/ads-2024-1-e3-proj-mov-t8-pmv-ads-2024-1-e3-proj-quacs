import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sidebar}>
                <TouchableOpacity onPress={() => console.log('Image pressed')}>
                    <Image
                        style={{ width: 50, height: 50, marginTop: 10 }}
                        source={require('./assets/Quacs.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Image pressed')}>
                    <Image
                        style={{ width: 50, height: 50, marginTop: 10 }}
                        source={require('./assets/comunidade.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Image pressed')}>
                    <Image
                        style={{ width: 45, height: 45, marginTop: 650 }}
                        source={require('./assets/engrenagem1.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.homescreen}>
                <Image
                    style={{ position: 'absolute', top: 0, left: 0, width: 50, height: 50 }}
                    source={{ uri: 'path_to_your_image/MicrosoftTeams-image.png' }} // Update the path
                />
                <TextInput
                    style={{ height: 30, textAlign: 'center', backgroundColor: 'grey', borderWidth: 2, borderRadius: 50, marginTop: 5 }}
                    placeholder="Busque uma nova comunidade"
                />
                <TouchableOpacity onPress={() => console.log('Circle 1 pressed')}>
                    <View style={styles.circleContainer}>
                        <TouchableOpacity onPress={() => console.log('Circle 1 pressed')}>
                            <View style={styles.circle} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Circle 2 pressed')}>
                            <View style={styles.circle} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Circle 3 pressed')}>
                            <View style={styles.circle} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Circle 4 pressed')}>
                            <View style={styles.circle} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Circle 5 pressed')}>
                            <View style={styles.circle} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Image pressed')}>
                            <Image
                                style={{ width: 30, height: 30, marginTop: 12, }}
                                source={require('./assets/propriedadesBranco.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
               
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 40,
    },
    sidebar: {
        width: 50,
        backgroundColor: '#606060',
        alignItems: 'center',
    },
    homescreen: {
        flex: 1,
        backgroundColor: '#202020',
        position: 'relative',
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    circle: {
        width: 50,
        height: 50,
        backgroundColor: '#DCDCDC',
        borderRadius: 50,       
    },
});

export default App;
