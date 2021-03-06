import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { database } from '../firebase/firebase'
import { connect } from 'react-redux';
import NavBar from '../components/NavBar'
import { Icon } from 'react-native-elements';
import AlertBar from '../components/AlertBar';
import CheckIn from '../components/CheckIn';
import IRC from '../components/IRC'


class HomeScreen extends Component {
  state = {
    modalVisible: false
  }

  setModalVisible = (visible) => this.setState({modalVisible: visible})

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CheckIn
          visible={this.props.checkIn.needCheckIn}
          disc={this.props.checkIn.MSG}
        />
        <View style={styles.container}>
          <AlertBar onPress2={() => this.props.navigation.navigate('alert')} />
          <IRC />
          <View style={{ flex: 10 }}>
            <View style={styles.upperBox}>
              <TouchableOpacity
                style={styles.box1}
                onPress={() => {}}>
                <Image
                  source={require('../../assets/graphics/country.png')}
                  style={styles.planet}
                />
                  <Text style={styles.textStyle1}>Syria</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box2}
                onPress={() => this.props.navigation.navigate('contacts')}>
                <Image
                  source={require('../../assets/graphics/alert.png')}
                  style={styles.emergency}
                />
                <Text style={styles.textStyle1}>Contacts</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.lowerBox}>
              <View style={styles.box3}>
                <TouchableOpacity style={styles.box2}
                  onPress={() => this.props.navigation.navigate('health')}>
                <Image
                  source={require('../../assets/graphics/health.png')}
                  style={styles.emergency}
                />
                <Text style={styles.textStyle1}>Health</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.box4} onPress={() => this.props.navigation.navigate('customs')}>
                <Image
                  source={require('../../assets/graphics/chat.png')}
                  style={styles.emergency}
                />
                <Text style={styles.textStyle1}>Local Customs</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

//This fetches from the global store
const mapStateToProps = (state) => {
  // console.log('CHECK IN OBJECT',state.profile.checkIn)
  return {
    checkIn: state.profile.checkIn
  }
}
//
// const mapDispatchToProps = ( dispatch, ownProps ) => {
//   return {
//     ...ownProps,
//     dispatch: (action) => dispatch(action)
//   }
// }

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
  alertStyle: {
    color: 'white'
  },
  box1: {
    flex: 1,
    backgroundColor: '#fdc513',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle1: {
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emergency: {
    height: 100,
    width: 100
  },
  planet: {
    height: 100,
    width: 100
  },
  box2: {
    flex: 1,
    backgroundColor: '#fdc513',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: '#fdc513',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box4: {
    flex: 1,
    backgroundColor: '#fdc513',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(mapStateToProps)(HomeScreen)
