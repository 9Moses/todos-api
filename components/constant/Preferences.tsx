import { createSettingsStyles } from "@/assets/images/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Switch, Text, View } from "react-native";

const Preferences = () => {
  const { colors, isDarkMode, toggleDarkMode } = useTheme()!;
  const settingStyles = createSettingsStyles(colors);
//   const [isAutoSync, setIsAutoSync] = useState(true);
//   const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingStyles.section}
    >
      <Text style={settingStyles.sectionTitle}>Preferences</Text>
      
      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
            <LinearGradient colors={colors.gradients.primary} style={settingStyles.settingIcon}>
                <Ionicons name="moon" size={20} color="#fff"/>
            </LinearGradient>
            <Text style={settingStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
    </LinearGradient>
  );
};

export default Preferences;
