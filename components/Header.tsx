import { createHomeStyles } from "@/assets/images/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const { colors } = useTheme()!;
  const homeStyles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);

  const completeCount = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
  const totalCount = todos ? todos.length : 0;
  const progressPercent = totalCount > 0 ? (completeCount / totalCount) * 100 : 0;

  return (
    <View style={homeStyles.header}>
    <View style={homeStyles.titleContainer}>
        <LinearGradient colors={colors.gradients.primary} 
        style={homeStyles.iconContainer}>
            <Ionicons name="flash-outline" size={24} color="#fff" />
        </LinearGradient>
        <View style={homeStyles.titleTextContainer}>
            <Text style={homeStyles.title}>Todo&apos;s Tasks</Text>
            <Text style={homeStyles.subtitle}>{completeCount} of {totalCount} tasks completed</Text>
        </View>
    </View>

    {totalCount > 0 && (
        <View style={homeStyles.progressContainer}>
            <View style={homeStyles.progressBarContainer}>
                <View style={homeStyles.progressBar}>
                    <LinearGradient colors={colors.gradients.primary}
                    style={[homeStyles.progressBar, { width: `${progressPercent}%` }]} />
                </View>
                <Text style={homeStyles.progressText}>{Math.round(progressPercent)}%</Text>
            </View>
        </View>
    )}

    </View>
  );
};

export default Header;
