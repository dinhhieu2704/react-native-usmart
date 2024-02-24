import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    function navigateToDashboard(name: string, icon: string) {
        navigation.navigate('DashboardCommon', { name, icon});
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.img} source={{ uri: "https://u2210-dev.dttt.vn/admin/assets/environments/logo.png" }} />
                <Text style={styles.firstTitle}>Trường Đào tạo và Phát triển Nguồn nhân lực VIETINBANK</Text>
                <Text style={styles.secondTitle}>HỆ THỐNG QUẢN TRỊ TỔNG THỂ</Text>
            </View>
            <View style={styles.appWitcher}>
                <Pressable
                    onPress={() => navigateToDashboard('Quản lý cán bộ', 'person')
                    }
                >
                    <View style={styles.appItem}>
                        <Ionicons name="person" size={40} color={'#2f70aceb'} />
                        <Text>Cán bộ</Text>
                    </View>
                </Pressable>
                <View style={styles.appItem}>
                    <Ionicons name="person" size={40} color={'#2f70aceb'} />
                    <Text>Cổng</Text>
                    <Text>cán bộ</Text>
                </View>
                <View style={styles.appItem}>
                    <Ionicons name="person-add" size={40} color={'#2f70aceb'} />
                    <Text>Người dùng</Text>
                </View>
                <View style={styles.appItem}>
                    <Ionicons name="person-add" size={40} color={'#2f70aceb'} />
                    <Text>Cổng</Text>
                    <Text>người dùng</Text>
                </View>
                <View style={styles.appItem}>
                    <Ionicons name="book" size={40} color={'#2f70aceb'} />
                    <Text>Đào tạo</Text>
                </View>
                <View style={styles.appItem}>
                    <Ionicons name="settings" size={40} color={'#2f70aceb'} />
                    <Text>Quản trị</Text>
                </View>
            </View>
        </View>
    );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        backgroundColor: '#f9f4f4eb',
        position: 'relative'
    },
    logo: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 16
    },
    firstTitle: {
        fontSize: 12,
        color: '#271756',
        fontWeight: 'bold'
    },
    secondTitle: {
        fontSize: 16,
        color: '#2f70ac',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    appWitcher: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        top: 200,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    appItem: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 4,
        color: '#2f70aceb',
        borderColor: 'rgb(240 240 240)',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    icon: {

    }
});
