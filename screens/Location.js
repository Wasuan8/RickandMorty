import { StyleSheet, Text, View, ActivityIndicator, Image, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const Location = ({ route }) => {
    const { character } = route.params;
    const [location, setLocation] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();


    useEffect(() => {
        axios
            .get(character.location.url)
            .then((response) => {
                setLocation(response.data);
            })
            .catch((error) => console.error(error));

        const episodePromises = character.episode.map((episodeUrl) =>
            axios.get(episodeUrl).then((response) => response.data)

        );

        Promise.all(episodePromises)
            .then((data) => {
                setEpisodes(data);
                setLoading(false);
            }).catch((e) => console.error(e));

    }, [character]);

    const renderEpisodeItem = ({ item }) => (
        <View className="flex-row items-center border-2  border-cyan-800  divide-opacity-10 p-2 ">
            <Text className="text-[#0c0b1f] text-[15px] font-semibold" >{item.episode}</Text>
            <Text className=" text-blue-950 ml-10 text-[10px]">Name: {item.name}</Text>

        </View>
    );
    if (loading) {
        return (
            <View className="flex-1 justify-center items-center ">
                <ActivityIndicator size="large" />
            </View>
        )
    }



    return (
        <View className="flex-1 bg-slate-200">

            <View className="items-center p-5">
                <View className="flex-1 items-cente mr-5 border-5 border-[#2A2B4B]">
                    <Animatable.Image animation="pulse"
                        easing="ease-in-out" source={{ uri: character.image }} className="w-60 h-60 rounded-full " />
                </View>
                <Text className="text-black text-[30px] mt-3 font-bold">{character.name}</Text>
                <View className="flex-row m-1">
                    <Text className="text-[#00BCC9] text-[15px] border-slate rounded-md p-1 bg-slate-100 font-semibold ">Species: </Text>
                    <Text className="text-[18px] text-[#2A2B4B] border-slate rounded-md px-5 bg-slate-400 font-semibold ">{character.species}</Text>
                </View>
                <View className="flex-row m-1">
                    <Text className="text-[#00BCC9] text-[15px] border-slate rounded-md p-1 bg-slate-100 font-semibold ">Gender: </Text>
                    <Text className="text-[18px] text-[#2A2B4B] border-slate rounded-md px-5 bg-slate-400 font-semibold ">{character.gender}</Text>
                </View>

            </View>
            {location ? (
                <View className="items-center m-2 ">
                    <Text className="text-[25px] font-bold mb-3 text-slate-700 w-'100%">LOCATION:</Text>
                    <View className="flex-row m-1">
                        <Text className="text-[#00BCC9] text-[15px] border-slate rounded-md p-1 bg-slate-100 font-semibold ">Name: </Text>
                        <Text className="text-[18px] text-[#2A2B4B] border-slate rounded-md px-5 bg-slate-400 font-semibold ">{location.name}</Text>
                    </View>
                    <View className="flex-row m-1 ">
                        <Text className="text-[#00BCC9] text-[15px] border-slate rounded-md p-1 bg-slate-100 font-semibold ">Type: </Text>
                        <Text className="text-[18px] text-[#2A2B4B] border-slate rounded-md px-5 bg-slate-400 font-semibold">{location.type}</Text>
                    </View>
                    <View className="flex-row ">
                        <Text className="text-[#00BCC9] text-[15px] border-slate rounded-md p-1 bg-slate-100 font-semibold ">Dimension: </Text>
                        <Text className="text-[18px] text-[#2A2B4B] border-slate rounded-md px-5 bg-slate-400 font-semibold">{location.dimension}</Text>
                    </View>
                </View>
            ) : (
                <View className="items-center m-2 ">
                    <Text className="text-[25px] font-bold mb-3 text-black w-'100%">LOCATION:</Text>

                    <Text className="text-[18px] text-[#2A2B4B]">No location data available.</Text>
                </View>

            )}

            <View className=" mb-15 ">
                <Text className="text-[25px] font-bold mb-5 text-slate-700 w-'100%">FEATURED CHAPTERS:</Text>
                <FlatList
                    data={episodes}
                    renderItem={renderEpisodeItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

        </View>

    );
};

export default Location;

const styles = StyleSheet.create({})