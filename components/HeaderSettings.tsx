import { createHomeStyles } from "@/assets/images/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const HeaderSetting = () => {
  const { colors } = useTheme()!;
  const homeStyles = createHomeStyles(colors);

  return (
    <View style={homeStyles.header}>
    <View style={homeStyles.titleContainer}>
        <LinearGradient colors={colors.gradients.primary} 
        style={homeStyles.iconContainer}>
            <Ionicons name="settings" size={24} color="#fff" />
        </LinearGradient>
        <View style={homeStyles.titleTextContainer}>
            <Text style={homeStyles.title}>Settings</Text>
           
        </View>
    </View>

   

    </View>
  );
};

export default HeaderSetting;
