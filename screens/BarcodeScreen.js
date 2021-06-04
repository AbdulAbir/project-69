import React from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';
import *as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component {
  constructor()
  {
    super ();
    this.state = {
      hasCameraPermissions:null,
      scanned : false,
      scannedData : '',
      buttonState :'normal'

    }
  }

   getCameraPermission = async()=>{
     const {status}= await Permissions.askAsync(Permissions.CAMERA)
     this.setState({
       hasCameraPermissions:status==="granted",
       buttonState :"clicked"
      
     })
   }

  handleBarCodeScanned = async({
    type,data

  })=>{
    this.setState({
      scanned :true,scannedData : data,buttonState : "normal"
    })
  }

    render() {
      const hasCameraPermissions = this.state.hasCameraPermissions
      const scanned = this.state.scanned;
      const buttonState = this.state.buttonState
      if(buttonState === "clicked"&& hasCameraPermissions){
        return(
          <BarCodeScanner onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned} />
        )
      }
      else{
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Image
              source={require('../assets/220px-Barcode-scanner.jpg')}
            />
      
        
        <Text>{hasCameraPermissions===true?this.state.scannedData:"request Camera Permission"} </Text>
          <TouchableOpacity style = {{backgroundColor : "blue",padding : 10}} 
          onPress = {this.getCameraPermission}
           title ="BAR CODE SCANNER" >
         
          <Text>Scan QR code </Text>
          </TouchableOpacity>

        </View>
      );}
    }
  }