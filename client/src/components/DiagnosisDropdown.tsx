import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Healthy", value: "Healthy" },
  {
    label: "CNV (Choroidal Neovascularization)",
    value: "CNV (Choroidal Neovascularization)",
  },
  {
    label: "DME (Diabetic Macular Edema)",
    value: "DME (Diabetic Macular Edema)",
  },
  { label: "Drusen", value: "Drusen" },
  { label: "Other", value: "Other" },
];

interface Props {
  value: any;
  setValue: any;
}

const DiagnosisDropdown: React.FC<Props> = ({ value, setValue }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Diagnosis" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DiagnosisDropdown;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: Dimensions.get("window").width - 24,
  },
  dropdown: {
    height: 50,
    backgroundColor: "#E5E5E5",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    color: "#999999",
  },
  selectedTextStyle: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
});
