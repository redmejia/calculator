import { View, Text } from "react-native";
import { styles } from "../Theme/appTheme";
import { CalButton } from "../Components/CalButton";

export const CalculatorScreen = (): JSX.Element => {
    return (
        <View style={styles.calContainer}>
            <Text style={styles.smallResult}>5300</Text>
            <Text style={styles.result}>5300</Text>
            
            {/* buttons row */}
            <View style={styles.row}>
               <CalButton title="C" color="#9b9b9b" />
               <CalButton title="+/-" color="#9b9b9b" />
               <CalButton title="del" color="#9b9b9b" />
               <CalButton title="/" color="#ff9427" />
            </View>

            <View style={styles.row}>
               <CalButton title="7" />
               <CalButton title="8" />
               <CalButton title="9" />
               <CalButton title="x" color="#ff9427" />
            </View>

            <View style={styles.row}>
               <CalButton title="4"  />
               <CalButton title="5" />
               <CalButton title="6" />
               <CalButton title="-" color="#ff9427" />
            </View>

            <View style={styles.row}>
               <CalButton title="1"  />
               <CalButton title="2" />
               <CalButton title="3" />
               <CalButton title="+" color="#ff9427" />
            </View>
            <View style={styles.row}>
               <CalButton title="0"  isWidth={true} />
               {/* <CalButton title="+/-" /> */}
               <CalButton title="." />
               <CalButton title="=" color="#ff9427" />
            </View>
        </View>
    );
};