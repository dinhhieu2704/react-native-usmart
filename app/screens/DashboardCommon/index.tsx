import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export type DashboardProps = {
    icon: string;
    name: string;
}

export default function DashboardCommon() {
    return (
        <View style={styles.container}>
            <View>
                <Ionicons name={'person'} size={100} color={'green'} />
            </View>
            <Text style={styles.firstLabel}>Chào mừng bạn đến với</Text>
            <Text style={styles.secondLabel}>Quản lý cán bộ</Text>
            {/* <Text style={styles.secondLabel}>{props.name}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f4f4eb'
    },
    firstLabel: {
        fontSize: 16,
        color: 'green'
    },
    secondLabel: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'green'
    }
});
