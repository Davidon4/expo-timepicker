import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

const App = () => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));

  const options = { hour: "2-digit", minute: "2-digit" };

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const hidePicker = () => {
    setIsPickerShow(false);
  };

  const onChange = (event, value) => {
    setTime(value);
    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the selected date */}
      <TouchableOpacity
        onPress={!isPickerShow ? showPicker : hidePicker}
        style={styles.pickedDateContainer}
      >
        <Text style={styles.pickedDate}>
          {time.toLocaleTimeString([], options)}
        </Text>
      </TouchableOpacity>

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={time}
          mode={"time"}
          display={"spinner"}
          onChange={onChange}
          textColor="#CE2EBE"
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: "#CE2EBE",
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default App;
