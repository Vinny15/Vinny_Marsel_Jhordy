import React from 'react';
import { Text, StyleSheet, FlatList, View, Image, TouchableOpacity } from 'react-native';

const makan = [
    {name: 'Nasi Goreng Spesial', image: 'http://unknown-gaming.com/wp-content/uploads/2018/11/resep-nasi-goreng.jpg', harga: 'Rp. 15.000'},
    {name: 'Ayam Lalapan', image: 'https://cdn.idntimes.com/content-images/community/2018/04/resep-cara-membuat-ayam-bakar-pedas-manis-45f3388b72056bb4a5ec4015be591b53_600x400.jpg', harga: 'Rp. 20.000'}
];

const MakananScreen = ({ navigation }) => {
    return (
        <FlatList 
            data={makan}
            renderItem={({ item }) =>
                <View style={styles.textstyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('MenuPetani')} >
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
                    </TouchableOpacity>
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

export default MakananScreen;