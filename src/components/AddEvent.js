import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Dialog } from "@rneui/themed";
import { useAuthentication } from "../utils/hooks/useAuthentication";


const {user} = useAuthentication();

useEffect (() => {
  //async function 
}
 )

export default function AddEvent({ isVisible, onClose }) {
  return (
    <Dialog overlayStyle= {styles.DialogueBox} isVisible={isVisible} onBackdropPress={onClose}>
      <Text style={styles.eventText}>Event Details</Text>
      <TextInput style={styles.inputFields} placeholder="Title"></TextInput>
      <TextInput
        style={styles.descriptionField}
        placeholder="Description"
      ></TextInput>
      <TextInput style={styles.inputFields} placeholder="Time"></TextInput>
      <TextInput style={styles.inputFields} placeholder="Location"></TextInput>
      <Button title = "Upload pic"> </Button>
      <Dialog.Actions>
        <Button title="Create Event" />
        <Button title="Close" onPress={onClose} />
      </Dialog.Actions>
    </Dialog>
  );
}
const styles = StyleSheet.create({
  userInfo: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "yellow",
    width: "80%",
    aspectRatio: 1,
    position: "absolute",
    alignSelf: "center",
    top: "20%",
    borderRadius: 20,
    padding: 20,
  },
  DialogueBox:{
    height: "60%",
    borderRadius:20,
    // backgroundColor :"red"
  },
  eventText: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
  },
  inputFields: {
    marginTop: 10,
    backgroundColor: "#F0F0F0",
    padding: 5,
    borderRadius: 5,
  },
  descriptionField: {
    marginTop: 10,
    backgroundColor: "#F0F0F0",
    padding: 5,
    borderRadius: 5,
    paddingBottom: 30,
  },
});
