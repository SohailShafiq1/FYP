import React from "react"
import { View, Image } from "react-native";

export const Day = (props) => {
    const dynamicStyle = styles[props.styleName]; 
    return<>
    <View style={dynamicStyle}>
        {
            dynamicStyle==='locked'?
            <View style={styles.circleView}>
                <Image source={require('../../assets/locked')}></Image>
            </View>
            :
            dynamicStyle==='finished'?
            <View style={styles.circleView}>
                <Image source={require('../../assets/locked')}></Image>
            </View>
            :
            <View style={styles.circleView}>
                
            </View>
        }
    </View>
        </>
}

const LockedDay = () =>{
    <View>

    </View>
}

const styles = StyleSheet.create({
    circleIcon:{

    }
    }
);
