import {StyleSheet} from 'react-native';

export const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c7996",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#b6b6b6",
    fontSize: 16,
  },
  input:{
    flex: 1,
    height: 56,
    backgroundColor: "#2d5767",
    borderRadius: 5,
    color: "#e1c289",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#31cf67",
    height: 56,
    width: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  }
});