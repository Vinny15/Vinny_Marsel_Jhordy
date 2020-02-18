import React from 'react';
import { Text, StyleSheet, FlatList, View, Image } from 'react-native';

const minum = [
    {name: 'Orange Juice', image: 'http://pngimg.com/uploads/juice/juice_PNG7152.png', harga: 'Rp. 7.000'},
    {name: 'Juice Alpukat', image: 'http://4.bp.blogspot.com/-zGYPIYHr7pE/VH2KVsjFzYI/AAAAAAAAAXc/F99LyvjPUzo/s1600/Alpokat%2BPNG.png', harga: 'Rp. 8.000'}
];

const MinumanScreen = () => {
    return (
        <FlatList 
            data={minum}
            renderItem={({ item }) =>
                <View style={styles.textstyle}>
                    <Text style={{alignSelf: 'center'}}>
                        {item.name}
                    </Text>
                    <Image 
                        source={{uri: item.image}}
                        style={{width: 300, height: 300, alignSelf: 'center'}} 
                    />
                    <Text>
                        {item.harga}
                    </Text>
                </View>
            }
            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textstyle: {
        marginVertical: 20
    }
});

export default MinumanScreen;