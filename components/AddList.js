import React from "react";
import {
  Button,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const AddList = ({ name, handleChange, handleSubmit, visible, setVisible }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.modal}>
        <View style={styles.submit}>
          <View style={styles.title}>
            <Text style={{ color: "white" }}>Warning</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              value={name}
              placeholder="My goaaal..."
              style={styles.text}
              onChangeText={(e) => handleChange(e)}
            />
          </View>
          <View style={styles.cancel}>
            <View>
              <Button onPress={handleSubmit} title="Add Goal" />
            </View>
            <View>
              <Button onPress={() => setVisible(false)} title="Close" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    flexDirection: "row",
    padding: 1,
    marginHorizontal: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 25,
  },
  submit: {
    borderBottomColor: "#cccc",
    borderBottomWidth: 1,
    gap: 20,
    width: 300,
    height: 300,
    backgroundColor: "yellow",
    borderRadius: 20,
  },
  text: {
    borderWidth: 2,
    width: "80%",
    borderColor: "#cccc",
    padding: 4,
    borderColor: "black",
    borderWidth: 1,
  },
  list: {
    flex: 5,
    marginTop: 1,
    textAlign: "center",
  },
  cancel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  txt: {
    textAlign: "center",
  },
});

export default AddList;
