import { StatusBar } from "expo-status-bar";
import { debounce } from "lodash";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ListComp from "./components/ListComp";
import AddList from "./components/AddList";

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    if (!name) return;
    setList((prevState) => [...prevState, { name, id: Math.random() }]);
    setName("");
  };

  const handleChange = (value) => {
    setName(value);
  };

  const handleDelete = (value) => {
    setList((currentList) => {
      return currentList.filter((item) => item.id !== value);
    });
  };

  return (
    // <ImageBackground
    //   source={{
    //     uri: "https://images.pexels.com/photos/5238645/pexels-photo-5238645.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   }}
    //   style={styles.container}
    // >
    <View style={styles.container}>
      <Button
        title="Add goal list"
        color="purple"
        onPress={() => setVisible(!visible)}
      />
      <AddList
        visible={visible}
        name={name}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setVisible={setVisible}
      />
      <View style={styles.list}>
        {/* <ScrollView alwaysBounceVertical>
          {list.map((li, i) => (
            <View style={styles.listGoal}>
              <Text key={i} style={styles.txt}>
                {li}
              </Text>
            </View>
          ))}
        </ScrollView> */}
        <View style={styles.img}>
          <Image source={require("./assets/hola.jpeg")} style={styles.image} />
        </View>
        <ListComp list={list} handleDelete={handleDelete} />
      </View>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  list: {
    flex: 5,
    marginTop: 10,
    textAlign: "center",
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 30,
  },
  listGoal: {
    backgroundColor: "purple",
    borderRadius: 2,
    borderRadius: 5,
    padding: 10,
    margin: 7,
  },
  txt: {
    textAlign: "center",
    color: "white",
  },
});
