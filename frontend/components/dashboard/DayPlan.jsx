import { StyleSheet, View } from "react-native"
import { Topbar } from "../common/topBar"
const Day = {
    DayNumber: 1,
    GoalCompletion: 75,
    Date: '--/--/--',
    Callories: 250,
    Hydration: 4,
    Timer: '--/--/--',
    Target: 2600,
    Remarks: 'remarks',
    Status: 1
}
export const DayPlan = () => {
    return <>
    <Topbar/>
    <View style={styles.list}>
        
    </View>
    </>
}
const styles = StyleSheet.create({
    list:
    {
        height: '90%',
        width: '90%',
        borderStyle: 'dashed',
        borderWidth: 2,
        marginTop: 10,
        //backgroundColor: 'blue',
        margin: '5%'
    }
})
