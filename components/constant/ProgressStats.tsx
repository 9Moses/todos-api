import { createSettingsStyles } from '@/assets/images/styles/settings.styles'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'

import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'

const ProgressStats = () => {
    const { colors } = useTheme()!
    const todos = useQuery(api.todos.getTodos);
    const totalTodos = todos ? todos.length : 0;
    const settingStyles = createSettingsStyles(colors);

    const completeCount = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
    const activeTodos = totalTodos - completeCount;

  return (
   <LinearGradient colors={colors.gradients.surface} style={settingStyles.section}>
    <Text style={settingStyles.sectionTitle}>Progress Stats</Text>

    <View style={settingStyles.statsContainer}>
    {/* Totoal Todos */}
    <LinearGradient colors={colors.gradients.background} style={[settingStyles.statCard, {borderLeftColor: colors.primary}]}>
        <View style={settingStyles.statIconContainer}>
            <LinearGradient colors={colors.gradients.primary} 
            style={settingStyles.statIcon}>
                <Ionicons name = "list" size={20} color="#fff"/>
            </LinearGradient>
        </View>
        <View >
            <Text style={settingStyles.statNumber}>{totalTodos}</Text>
            <Text style={settingStyles.statLabel}>Total Todos</Text>
        </View>
    </LinearGradient>

     {/* Complete Todos */}
    <LinearGradient colors={colors.gradients.background} style={[settingStyles.statCard, {borderLeftColor: colors.success}]}>
        <View style={settingStyles.statIconContainer}>
            <LinearGradient colors={colors.gradients.success} 
            style={settingStyles.statIcon}>
                <Ionicons name = "checkmark-circle" size={20} color="#fff"/>
            </LinearGradient>
        </View>
        <View >
            <Text style={settingStyles.statNumber}>{completeCount}</Text>
            <Text style={settingStyles.statLabel}>Completed</Text>
        </View>
    </LinearGradient>

    {/* Active Todos */}
    <LinearGradient colors={colors.gradients.background} style={[settingStyles.statCard, {borderLeftColor: colors.warning}]}>
        <View style={settingStyles.statIconContainer}>
            <LinearGradient colors={colors.gradients.warning} 
            style={settingStyles.statIcon}>
                <Ionicons name = "time" size={20} color="#fff"/>
            </LinearGradient>
        </View>
        <View >
            <Text style={settingStyles.statNumber}>{activeTodos}</Text>
            <Text style={settingStyles.statLabel}>Active</Text>
        </View>
    </LinearGradient>

   </View>
   </LinearGradient>
  )
}

export default ProgressStats