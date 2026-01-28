import { Pressable, StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react';
import AllItems from './AllItems.jsx'
import CreateScreen from './CreateScreen.jsx'

const HomeScreen = () => {
    const [view, setview] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={()=>setview(0)}>
            <Text style={styles.btnText}>All Items</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>setview(1)}>
            <Text style={styles.btnText}>Low Stock</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>setview(2)}>
            <Text style={styles.btnText}>Create</Text>
        </Pressable>
       </View>
        {view === 0 && <AllItems/>}
        {view === 1 && <AllItems/>}
        {view === 2 && <CreateScreen/>}

    </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        padding: "4%",
        backgroundColor: "#ffffff"
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#333"
    },
    buttonContainer:{
        flexDirection: "row",
        gap: 10,
        marginVertical: 10

    },

    button:{
      paddingVertical: 3.5,
      paddingHorizontal: 10,
      borderRadius: 50,
      borderWidth: 0.8,
      borderColor: "green"
    },
    btnText:{
        color: "green",
        fontSize: 12
    }
})