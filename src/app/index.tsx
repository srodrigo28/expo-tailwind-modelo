
import { Text, TouchableOpacity, View } from "react-native"

export default function Index(){
    return(
        <View className="bg-black flex h-screen gap-5 items-center justify-center">
            <Text className="text-3xl text-white">Bem vindo</Text>
            <TouchableOpacity className="bg-green-600 rounded-md hover:bg-green-500 p-2 px-10 animate-pulse">
                <Text className="text-white text-md">Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}