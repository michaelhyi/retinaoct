import { FC } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Screen from "../components/screen";
import { FontAwesome5 } from "@expo/vector-icons"

const Uploadleft: FC = (): JSX.Element => {
    return (
        <Screen>
            <TouchableOpacity style={{padding: 10}}>
                    <FontAwesome5 name="less-than" size={15} />
            </TouchableOpacity>
            <View style={styles.container}>
                <Image style={{marginTop: 60}}source={require("../assets/leftdoctors.png")} />
                <View style={{marginTop: 20, justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.header}>Upload Left Eye OCT Scan</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                </View>

                <TouchableOpacity style={{borderRadius: 15, padding: 20, backgroundColor: "#E5E5E5", width: "100%", alignItems: "center", justifyContent: "center", marginTop: 30}}>
                    <Text style={styles.header}>Upload Scan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius: 15, padding: 20, backgroundColor: "#B6DCFE", width: "100%", alignItems: "center", justifyContent: "center", marginTop: 20}}>
                    <Text style={styles.whitetext}>Submit</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

const styles=StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontSize: 20,
        fontFamily: "Montserrat-Medium",
    },
    text: {
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        marginTop: 5
    },
    whitetext: {
        fontSize: 20,
        fontFamily: "Montserrat-Medium",
        color: "white"
    }
});

export default Uploadleft;