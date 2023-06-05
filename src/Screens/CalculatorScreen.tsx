import { View, Text } from "react-native";
import { styles } from "../Theme/appTheme";
import { CalButton } from "../Components/CalButton";
import { useCalculator } from "../hooks/useCalculator";



export const CalculatorScreen = (): JSX.Element => {

    const { 
        previousNumber, 
        number,
        clean,
        abs,
        delButton,
        btnDivision,
        getNumber,
        btnMutiplication,
        btnSubstraction,
        btnAddition, 
        calculate
    } = useCalculator()

    return (
        <View style={styles.calContainer}>
            {
                (previousNumber !== '0') && (<Text style={styles.smallResult}>{previousNumber}</Text>)
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            {/* buttons row */}
            <View style={styles.row}>
                <CalButton title="C" color="#9b9b9b" action={clean} />
                <CalButton title="+/-" color="#9b9b9b" action={abs} />
                <CalButton title="del" color="#9b9b9b" action={delButton} />
                <CalButton title="/" color="#ff9427" action={btnDivision} />
            </View>

            <View style={styles.row}>
                <CalButton title="7" action={getNumber} />
                <CalButton title="8" action={getNumber} />
                <CalButton title="9" action={getNumber} />
                <CalButton title="x" color="#ff9427" action={btnMutiplication} />
            </View>

            <View style={styles.row}>
                <CalButton title="4" action={getNumber} />
                <CalButton title="5" action={getNumber} />
                <CalButton title="6" action={getNumber} />
                <CalButton title="-" color="#ff9427" action={btnSubstraction} />
            </View>

            <View style={styles.row}>
                <CalButton title="1" action={getNumber} />
                <CalButton title="2" action={getNumber} />
                <CalButton title="3" action={getNumber} />
                <CalButton title="+" color="#ff9427" action={btnAddition} />
            </View>
            <View style={styles.row}>
                <CalButton title="0" isWidth={true} action={getNumber} />
                {/* <CalButton title="+/-" /> */}
                <CalButton title="." action={getNumber} />
                <CalButton title="=" color="#ff9427" action={calculate} />
            </View>
        </View>
    );
};