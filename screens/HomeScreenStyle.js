import {StyleSheet} from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  btnActive: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    marginLeft: 20,
  },
  btnDisable: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightgrey',
    marginLeft: 20,
  },
  clearText: {
    fontSize: 16,
    color: 'white',
  },
  container: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 16,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  dropdown: {
    flex: 0.8,
  },
});
export default HomeScreenStyle;
