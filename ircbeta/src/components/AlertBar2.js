import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

class AlertBar2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backStyle}>
          <Icon
            name="chevron-left"
            reverse
            size={26}
          />
        </TouchableOpacity>
        <View style={styles.leftStyle}>
          <Text style={styles.alertStyle}>ALERT</Text>
        </View>
        <View style={styles.rightStyle}>
          <Text style={styles.info}>Expanded refugee vett...</Text>
        </View>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1.25,
    flexDirection: 'row'
  },
  backStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  leftStyle: {
    flex: 3,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightStyle: {
    flex: 6,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  alertStyle: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold'
  },
  info: {
    color: 'black',
    fontSize: 20
  }
}

export default AlertBar2
