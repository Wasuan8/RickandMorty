import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { RickyMorty2 } from '../assets';


const HomeScreen = () => {
    const navigation = useNavigation();
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false

    //     })

    // }, [])
    return (
        <SafeAreaView className="bg-white flex-1 relative ">
            {/* fisrt section */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center ">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2A2B4B] text-3xl font-semibold">RickandMorty</Text>
            </View>


            {/* second section */}
            <View className="px-6 mt-8 space-y-3">
                <Text className="text-[#3C6072] text-[42px]">Wubba lubba dub dub!</Text>
                <Text className="text-[#00BCC9] text-[38px] font-bold">Aw geez, Rick!</Text>
                <Text className="text-[#3C6072] text-base">
                Sometimes science is more art than science, Morty.
                </Text>
            </View>


            {/* Circle Section */}
            <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-12 -right-36 ">
            </View>
            <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-36 -left-36">
            </View>


            {/* Image container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                animation="pulse"
                easing="ease-in-out"
                    source={RickyMorty2}
                    className="w-full h-full object-cover mt-5"
                />

                {/* Navigation Go */}
                <TouchableOpacity
                onPress={() => navigation.navigate("Character")}
                className="absolute bottom-20 w-24 h-24 border-r-2 border-l-2  border-t-4 border-[#00BCC9] rounded-full items-center justify-center ">
                        <Animatable.View  animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
                        </Animatable.View>
                
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

export default HomeScreen;

