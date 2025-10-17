import { createSettingsStyles } from "@/assets/images/styles/settings.styles";
import Preferences from "@/components/constant/Preferences";
import ProgressStats from "@/components/constant/ProgressStats";
import HeaderSetting from "@/components/HeaderSettings";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const { colors } = useTheme()!;
  const settingStyles = createSettingsStyles(colors);

  return (
    <LinearGradient // Background Linear Gradient
      colors={colors.gradients.background}
      style={settingStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={settingStyles.safeArea}>
        <HeaderSetting />

        <ScrollView style={settingStyles.scrollView}
        contentContainerStyle={settingStyles.content}
        showsVerticalScrollIndicator={false}
        >
          <ProgressStats/>
          {/* PREFERENCES */}
          <Preferences />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SettingsScreen;
