import {StyleSheet} from 'react-native';

export const styles=StyleSheet.create({
  container: {
    backgroundColor: "#1F1E25",
    width: "100%",
    borderRadius:5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  name:{
    flex:1,
    color: "#fdfcfe",
    fontSize: 16,
    marginLeft:16,
  },
  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#e23c44",
    height: 56,
    width: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});