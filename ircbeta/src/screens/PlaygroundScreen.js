import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { database } from '../firebase/firebase'
import { connect } from 'react-redux';

class PlaygroundScreen extends Component {
  componentWillMount() {

  }

  componentDidMount() {
    // console.log(this.props)
    // database.ref('/staff').once('value').then((snapshot) => {
    //   console.log('firebase data ',snapshot)
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperBox}>
          <TouchableOpacity
            style={styles.box1}
            onPress={() => this.props.navigation.navigate('alert')}>
              <Text style={styles.textStyle1}>You Are In</Text>
              <Text style={styles.textStyle1}>Aleppo</Text>
              <Text style={styles.textStyle1}>Syria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box2}
            onPress={() => this.props.navigation.navigate('alert')}>
            <Text style={styles.textStyle1}>Emergency Contact</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lowerBox}>
          <View style={styles.box3}>
            <TouchableOpacity style={styles.box2}
              onPress={() => this.props.navigation.navigate('alert')}>
            <Text style={styles.textStyle1}>Health</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.box4} onPress={() => this.props.navigation.navigate('alert')}>
            <Text style={styles.textStyle1}>Local Customs</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

//This fetches from the global store
const mapStateToProps = (state) => {
  console.log(mapStateToProps)
  return {

  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  upperBox: {
    flex: 1,
    flexDirection: 'row'
  },
  lowerBox: {
    flex: 1,
    flexDirection: 'row'
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle1: {
    fontSize: 24
  },
  box2: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: 'blue',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box4: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(mapStateToProps)(PlaygroundScreen)