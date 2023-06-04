
import { SafeAreaView, StatusBar } from "react-native";
import { CalculatorScreen } from "./src/Screens/CalculatorScreen";
import { styles } from "./src/Theme/appTheme";

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.screenBackground}>
      <StatusBar 
        backgroundColor="#000"
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;