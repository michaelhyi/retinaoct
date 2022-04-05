import { FC, useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";

import Screen from "../components/screen";

interface Props {
    navigation: {
      navigate: (name: string) => void;
    };
  }

const Createpatient: FC<Props> = ({ navigation }) => {

    const [text, onChangeText] = useState(null);

    return(
        <Screen>
            <TouchableOpacity>
                <FontAwesome5 name="less-than" size={15} />
            </TouchableOpacity>

            <View style={styles.container}>
                <Image style={{marginTop: Dimensions.get("window").height / 12}} source={require ("../assets/createpatient.png")} />
                <Text style={styles.header}>Enter Patient MRN</Text>
                <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <TouchableOpacity style={styles.btn1}>
                    <View style={{flexDirection: "row", marginLeft: 20, alignItems: "center"}}>
                        <Feather name="user" size={25} color="#999999"/>
                        <TextInput style={{color: "#999999", fontSize: 16, marginLeft: 15, fontFamily: "Montserrat-Regular"}} placeholder="Enter MRN"/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Patient.info")}} style={styles.btn2}>
                    <Text style={{color: "white", fontSize: 20, fontFamily: "Montserrat-Medium"}}>Create Patient</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 20,
        fontFamily: "Montserrat-Medium",
        marginTop: 20,
    },
    desc: {
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        marginTop: 10,
    },
    btn1: {
        marginTop: 20,
        width: "100%",
        height: Dimensions.get("window").height / 15,
        backgroundColor: "#E5E5E5",
        borderRadius: 20,
        justifyContent: "center",
        shadowColor: "black",
            shadowOpacity: 0.25,
            shadowOffset: {
              width: 4,
              height: 4,
            },
    },
    btn2: {
        marginTop: 20,
        width: "100%",
        height: Dimensions.get("window").height / 15,
        backgroundColor: "#B6DCFE",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
            shadowOpacity: 0.25,
            shadowOffset: {
              width: 4,
              height: 4,
            },
    }
})

export default Createpatient;