import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../Theme/appTheme";

interface ButtonProps {
    title: string ;
    color?: string;
    isWidth?: boolean;
    action: (textNumber: string) => void;
}

export const CalButton = ({ title, color = '#2d2d2d', action, isWidth = false }: ButtonProps): JSX.Element => {
    return (
        <TouchableOpacity
            onPress={() => action(title)}
        >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (isWidth) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.btnText,
                    color: (color === '#9b9b9b') ? '#000' : '#fff'
                }}> {title} </Text>
            </View>
        </TouchableOpacity>
    );
};