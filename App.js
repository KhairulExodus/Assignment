import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      str: '',
      count: 0,
      vowel: 0,
      cons: 0
    }
  }

  analyze = () => {

    let word = this.state.str;
    let c= 0;
    let v= 0;
    let length = word.length;

  let arr_vowel_list = 'aeiouAEIOU'.split(''); 
  this.setState({count: this.state.str.length});
  word.split('').forEach(function(word){
    //console.log(x);
    if(arr_vowel_list.indexOf(word) !== -1){
  //  this.setState({vowel: this.state.vowel+1});} 
  v++;}
  else
  c++;
  // this.setState({cons: this.state.cons+1});
  });

  this.setState({count: length, vowel: v,cons:c})

  };

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>Khairul Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(str) => this.setState({str})} style={Styles.instructions} placeholder='Input a word'/>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={Styles.container}>
        <Button color="#841584" onPress={this.analyze} title='Analyze'/>
        <Text></Text>
        <Text style={Styles.instructions}>Word: {this.state.str}</Text>
        <Text style={Styles.instructions}>No of Consonants: {this.state.cons}</Text>
        <Text style={Styles.instructions}>No of Vowel: {this.state.vowel}</Text>
        <Text style={Styles.instructions}>No of Character: {this.state.count}</Text>
        </View>
      </View>
    );
  }
}
