import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  screen: {
    fontFamily: 'Inter_500Medium',
    marginTop: 6,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  generatorScreen: {
    justifyContent: 'flex-start'
  },
  schemeContainer: {
    height: 130,
    width: windowWidth - 15,
    margin: 5,
    flexDirection: 'row',
    borderRadius: 25
  },
  cardContainer: {
    height: 130,
    width: windowWidth - 15,
    margin: 5,
    borderRadius: 25,
    flexDirection: 'row'
  },
  cardTextHeader: {
    fontFamily: 'Inter_500Medium',
    fontSize: 30
  },
  cardTextMid: {
    fontFamily: 'Inter_500Medium',
    fontSize: 20
  },
  cardTextSub: {
    fontFamily: 'Inter_500Medium',
    fontSize: 15
  },
  subSubtle: {
    fontSize: 16,
    padding: 10,
    color: '#808080'
  },
  cardTextContainer: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  actionContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#888888'
  },
  actionButton: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#00000011',
    margin: 10
  },
  cardButtons: {
    marginLeft: 'auto',
    margin: 20
  },
  generatorScrollBG: {
    backgroundColor: '#f2f2f2'
  },
  shareButton: {
    height: 90,
    width: windowWidth - 40,
    margin: 5,
    marginBottom: 30,

    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#888888'
  }
});
