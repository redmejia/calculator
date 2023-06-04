import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../Theme/appTheme";

interface ButtonProps {
    title?: string;
    color?: string;
    isWidth?: boolean;
}

export const CalButton = ({ title, color = '#2d2d2d', isWidth = false }: ButtonProps): JSX.Element => {
    return (
        <TouchableOpacity>
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