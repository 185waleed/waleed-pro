import {View, Image, Text, TextInput, TouchableOpacity, ScrollViewBase, ScrollView} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView>
        
      <View style={{height: 250, width: '100%'}}>
        <Image 
        style={{height: 250, width: '100%'}}
        source={require('../assets/images/login-img.jpg')} />
      </View>
    
      <View
        style={{
          height: 300,
          width: '100%',
          backgroundColor: 'white',
          padding: 20,
        }}>
        <View
          style={{
            height: 40,
            width: '100%',
            backgroundColor: 'white',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 25, fontWeight: '700'}}>Login</Text>
        </View>
        <View
          style={{
            height: 250,
            width: '100%',
            backgroundColor: 'white',
            marginTop: 20,
          }}>
          <View style={{height: 70, width: '100%'}}>
            <TextInput
              style={{
                height: 50,

                borderBottomWidth: 2,
                // borderWidth:1,
                borderRadius: 15,
                backgroundColor: 'white',
              }}
              placeholder="Waleeedproj"
            />
          </View>
          <View style={{height: 70, width: '100%'}}>
            <TextInput
              style={{
                height: 50,

                borderBottomWidth: 2,
                borderRadius: 15,
                backgroundColor: 'white',
              }}
              placeholder="password "
            />
          </View>
        </View>
      </View>
      <View
        style={{
          height: 100,
          width: '100%',
          backgroundColor: 'white',
          bottom: 10,
          padding: 20,
        }}>
        <TouchableOpacity
          //    onPress={() => {
          //     this.props.navigation.navigate("");
          //   }}

          style={{
            borderRadius: 25,
            justifyContent: 'center',
            height: 50,
            width: '100%',
            backgroundColor: '#191E32',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 100,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 270,
            justifyContent: 'center',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 15}}>If don't Have a Account ?</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: 'white', width: 250, justifyContent: 'center'}}>
          <TouchableOpacity
            //      onPress={() => {
            //     this.props.navigation.navigate("");
            //   }}

            style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: '#191E32',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Login;
