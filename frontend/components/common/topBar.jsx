import React from "react";
import { Image, StyleSheet, useWindowDimensions, View, Text } from "react-native";

export const Topbar = () => {
    const {width, height} = useWindowDimensions();
    const dynamicStyles = {
        //for responsive width
        bar : {
            width: width,
        }
    };
    const WorkoutShortcut = (props) => {
        const dynamicStyle = styles[props.styleName];
        //console.log(dynamicStyle);
    return <>
        <View style={[styles.circle, dynamicStyle]}>
            {
                props.styleName==='workout'? 
                <>
                    <Image source={require('../../assets/PremiumTry.png')} style={styles.circleImg} ></Image>
                    <Text style={styles.tinyWriting}>workout subscription</Text>
                </>
                    :
                    <Image source={require('../../assets/Default_Profile.png')} style={styles.circleProfile}></Image>
            }
        </View>
    </>
}
    // |-3Bar menu----FitFaat----------()-()|
    return(<>
    <View style={[dynamicStyles.bar, styles.bar]}>      
        <Image source={require('../../assets/3_Dot_icon.png')} style={styles.image} />    
        <Text style={styles.Logo}>FitFaat</Text>
        <WorkoutShortcut styleName='workout'></WorkoutShortcut>
        <WorkoutShortcut styleName='profile'></WorkoutShortcut>
    </View>
    </>);
}
const styles = StyleSheet.create({
    bar:
    {
        height: 55,
        display: 'flex',
        flexDirection: 'row'
    },
    Logo: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: 10,
        marginLeft: 15,
        //fontFamily: ''
    },
    image:
    {
        marginLeft: 25,
        marginTop: 15,
        padding: 5,
        width: 24,
        height: 22
    },
    workout:
    {
        right: 10+10+35,
        marginTop: 10
    },
    profile:
    {
        position: 'absolute',
        right: 10,
        marginTop: 10
    },
    circle: {
        width: 35,
        height: 35,
        borderRadius: 35,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        position: 'absolute',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        //backgroundColor: 'blue',
    },
    circleImg: {
        width: '45%', 
        height: '45%', 
        //resizeMode: 'contain'
        //backgroundColor: 'blue',
    },
    circleProfile: {
        width: '95%', 
        height: '95%',
        resizeMode: 'contain'
        //backgroundColor: 'blue',
    },
    tinyWriting:
    {
        fontSize: 4,
        textAlign:'center'
    }
});
