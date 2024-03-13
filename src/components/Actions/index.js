import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {AntDesign} from '@expo/vector-icons'



export default function Actions() {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size="40" color="#000"/>
            </View>
            <Text style={styles.labelButton}>
                Entradas
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="tagso" size="40" color="#000"/>
            </View>
            <Text style={styles.labelButton}>
                Compras
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="creditcard" size="40" color="#000"/>
            </View>
            <Text style={styles.labelButton}>
                Carteira
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="barcode" size="40" color="#000"/>
            </View>
            <Text style={styles.labelButton}>
                Boletos
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="setting" size="40" color="#000"/>
            </View>
            <Text style={styles.labelButton}>
                Conta
            </Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32
    },
    areaButton:
    {
        backgroundColor: '#ecf0f1',
        height: 50,
        width: 50,
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton:
    {
        marginTop: 4,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold'   
    }

})