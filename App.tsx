import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';

// Função principal do aplicativo
const App = () => {
  const [input, setInput] = useState('');  // Para armazenar o input
  const [result, setResult] = useState(''); // Para armazenar o resultado

  // Função para atualizar o input
  const handleInput = (text: string) => {
    setInput(text);
  };

  // Função para realizar os cálculos
  const calculate = () => {
    try {
      const res = eval(input); // Cálculos simples usando a função eval
      setResult(res.toString());
    } catch (error) {
      Alert.alert('Erro', 'Expressão inválida!');
    }
  };

  // Função para limpar o input
  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/calculator-icon.jpg')} style={styles.image} />
      
      <Text style={styles.title}>Calculadora Estilizada</Text>
      
      <TextInput 
        style={styles.textInput}
        placeholder="Digite sua expressão"
        value={input}
        onChangeText={handleInput}
      />
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(input + '/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={calculate}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>

      <Button title="Limpar" onPress={clear} color="red" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 20,
    margin: 5,
    borderRadius: 5,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  resultContainer: {
    marginVertical: 20,
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default App;
