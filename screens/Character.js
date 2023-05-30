import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Character = () => {
    const [characters, setCharcaters] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                setCharcaters(response.data.results);
                setLoading(false);

            }).catch((e) => console.error(e));
    }, []);


    const handleCharacterPress = (character) => {
        navigation.navigate('Location', { character });
    }
    
    const renderCharcterItem = ({ item }) => (

        <TouchableOpacity onPress={() => handleCharacterPress(item)}>
            <View className="flex-row items-center bg-red-200 m-2 border-1  border-cyan-800  divide-opacity-20 rounded-lg ">
                <View className="flex-1 items-cente mr-5 border-10 ">
                    <Animatable.Image animation="pulse"
                        easing="ease-in-out" source={{ uri: item.image }} className="w-[150px] h-[150px] rounded-lg " />
                </View>
                <View className="items-center mr-8">
                <View className="justify-center content-center">
                    <Text className="text-black text-[20px] w-'100%' font-bold text-center ">{item.name}</Text>
                    <Text className="text-[#421c89] text-[18px] m-2 font-semibold text-center "  > {item.species}</Text>
                    <View className="flex-row align-middle ">
                        <Text className="text-[#00BCC9] text-[15px] border-slate rounded-md p-1 bg-white font-semibold mx-5">{item.gender}</Text>
                        <Text className="text-[#aca7ad] text-[15px] rounded-md p-1 bg-white font-semibold">{item.status}</Text>
                    </View>
                   
                </View >
                </View>
                
            </View>
        </TouchableOpacity>
    );
    if (loading) {
        return (
            <View className=" flex-1 justify-center items-center">
                <ActivityIndicator size="large" />

            </View>
        )
    }
    return (

        <FlatList
            className="bg-[#00BCC9]"
            data={characters}
            renderItem={renderCharcterItem}
            keyExtractor={(item) => item.id.toString()}
        />

    )
}

export default Character

const styles = StyleSheet.create({})