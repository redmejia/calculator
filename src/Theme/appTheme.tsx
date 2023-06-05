import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screenBackground : {
        flex: 1,
        backgroundColor : '#000',
    },
    calContainer: {
        flex: 1,
        paddingHorizontal:20,
        justifyContent : 'flex-end'
    },
    result : {
        color: 'white',
        fontSize:60,
        textAlign :'right',
        marginBottom: 10
    },
    smallResult : {
        color: 'rgba(255,255,255, 0.5)',
        fontSize:30,
        textAlign :'right'
    },
    row : {
        flexDirection : 'row',
        justifyContent : 'center',
        marginBottom : 18,
        paddingHorizontal :10
    },
    button: {
        height:80,
        width:80,
        backgroundColor:'#9b9b9b',
        borderRadius : 100,
        justifyContent : 'center',
        marginHorizontal : 10
    },
    btnText : {
        textAlign : 'center',
        padding :10,
        fontSize :30,
        color : '#fff',
        fontWeight : '300'
    }
});