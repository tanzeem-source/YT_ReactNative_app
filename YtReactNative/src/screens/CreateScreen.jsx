import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native'
import { useState } from 'react'

const CreateScreen = ({ data, setdata }) => {
  const [itemName, setItemName] = useState('')
  const [stockAmt, setStockAmt] = useState('')
  const [isEdit, setisEdit] = useState(false)
  const [editItemId, seteditItemId] = useState(null)

  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmt
      



    }

    setdata([...data, newItem])
    setItemName('')
    setStockAmt('')
    setisEdit(false)

  }

  const deleteItemHandler = (id) => {
    setdata(data.filter((item) => item.id !== id))
  }

  const editItemHandler=(item) =>{
    setItemName(item.name)
    setisEdit(true)
    seteditItemId(item.id)
  }

  const updateItemHandler=()=>{
     setdata(data.map((item)=>(
      item.id === editItemId ? {...item, name: itemName, stock: stockAmt} : item
     )))
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name..."
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
      />

      <TextInput
        placeholder="Enter stock amount..."
        style={styles.input}
        value={stockAmt}
        onChangeText={setStockAmt}
      />

      <Pressable style={styles.button} onPress={() =>isEdit? updateItemHandler(): addItemHandler()}>
        <Text style={styles.btnText}>{isEdit? 'EDIT ITEM IN STOCK': 'ADD ITEM IN STOCK'}</Text>
      </Pressable>

      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Items</Text>
          <Text style={styles.headingText}>Quantity</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.row,
                { backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BF' },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>


              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>

          )}


        />
      </View>
    </View>
  )
}

export default CreateScreen



const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#D7F6BF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7
  },
  button: {
    backgroundColor: "#90D5FF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7
  },
  btnText: {
    color: "white",
    fontWeight: "500",
    fontSize: 15
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 6,
  },
  itemText: {
    fontSize: 14,
    fontWeight: "500"
  }

})
