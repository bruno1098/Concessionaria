import { Text, StyleSheet, Image, View, TextInput, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {

  const [fabricante, setFabricante] = useState("");
  const [modelo, setModelo] = useState("");
  const [preco, setPreco] = useState("");

  return (
  <View style={estilo.pai}>  
   <View style={estilo.container}>
    <Text style={estilo.texto}>Concessionária de veículos</Text>
    <Image source={require('./assets/carro.png')}
          style={{ width: 250, height: 110, position:'relative', top: '56%'}}
    />
   </View>
  <LinearGradient
        colors={['#3b58db', '#8c9ff5', '#bbc5f0']}
        style={estilo.container2}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }}>

      <View style={{flexDirection: 'row', alignItems:'center', marginTop: 40, display:'flex', justifyContent:'space-around'}}>
        <Text style={{fontSize: 30, color:'white', fontWeight:'800',}}>Fabricante:</Text>
        <TextInput
          value={fabricante}
          onChangeText={setFabricante}
          style={estilo.input}
        />
      </View>   

      <View style={{flexDirection: 'row', alignItems:'center', marginTop: 40,display:'flex', justifyContent:'space-between'}}>  
        <Text style={{fontSize: 30, color:'white', fontWeight:'800',}}>Modelo:</Text>
        <TextInput
          value={modelo}
          onChangeText={setModelo}
          style={estilo.input}
        />
      </View>   

        <View style={{flexDirection: 'row', alignItems:'center',  marginTop: 40 ,display:'flex', justifyContent:'space-between'}}>  
        <Text style={{fontSize: 30, color:'white', fontWeight:'800',}}>Preço:</Text>
        <TextInput
          value={preco}
          onChangeText={setPreco}
          style={estilo.input}
        />
      </View> 

      <Button 
        title='Cadastrar/Salvar' 
        style={{
          padding: 10,
          borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e74c3c',
        fontWeight:'100', color: '#e74c3c',
        fontSize: 16,
        fontWeight: 'bold',}}
      />


  </LinearGradient>
  </View>
  );
}

const estilo = StyleSheet.create({
  
  pai:{
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    height: 50,
    
  },
  container: {
    padding: 10,
    height: "30%",
    alignItems: 'center',
  },
  container2 :{
    flex: 1,
    padding: 8,
    height: '70%',
  
  },
  
  texto:{
    zIndex: 1,
  width: '80%',
  height: '40%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#6587FC',
  opacity: 0.8,
  borderRadius: 20,
  overflow: 'hidden',
  fontSize: 25,
  color: 'white',
  fontWeight: '800',
  top: 70,
  textAlign: 'center',
  },
  input:{
    width: '50%',
    height: 70,
    borderRadius: 40,
    backgroundColor: 'white',
    borderColor: 'blue',
    overflow: 'hidden',
    fontSize: 25, 
  },
});
