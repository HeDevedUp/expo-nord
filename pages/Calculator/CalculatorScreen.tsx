import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import TextInput from "../../components/TextInput";
import Toast from "../../components/Toast";
const CalculatorScreen = () => {
    const [result, setResult] = useState('');
    const [numberOne, setNumberOne] = useState('');
    const [numberTwo, setNumberTwo] = useState('');

    // const handleEqualPress = () => {
    //     let finalResult = '';
    //     switch (operator) {
    //         case '+':
    //             finalResult = Number(previousNumber) + Number(currentNumber);
    //             break;
    //         case '-':
    //             finalResult = Number(previousNumber) - Number(currentNumber);
    //             break;
    //         case '*':
    //             finalResult = Number(previousNumber) * Number(currentNumber);
    //             break;
    //         case '/':
    //             finalResult = Number(previousNumber) / Number(currentNumber);
    //             break;
    //         default:
    //             finalResult = currentNumber;
    //     }
    //     setCurrentNumber(finalResult.toString());
    //     setPreviousNumber('');
    //     setOperator('');
    //     setResult(finalResult);
    // }

      const handleOperatorPress = async (operator: string) => {
        // console.log(JSON.stringify({ numberOne, numberTwo, operator }));
        try {
            const response = await fetch('https://nordstone-main.vercel.app/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ numberOne, numberTwo, operator }),
            });
            const data = await response.json();
            setResult(data.result);
            console.log(data.result);
        } catch (error) {
            <Toast message={"'Error', 'An error occurred while trying to calculate the result'"} onDismiss={() => {}} />
        }
    };


    const handleClearPress = () => {
        setResult('');
        setNumberOne('');
        setNumberTwo('');
    }


        return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="First Number"
        returnKeyType="next"
        keyboardType="numeric"
        value={numberOne}
        onChangeText={(text)=> {
            setNumberOne(text.replace(/[^0-9]/g, ''))
          }}
      />
        <TextInput
          placeholder="Second Number"
          keyboardType="numeric"
          onChangeText={(text)=> {
            setNumberTwo(text.replace(/[^0-9]/g, ''))
          }}
          value={numberTwo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={handleClearPress}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
);
        }

        export default CalculatorScreen;

        const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    width: '100%',
    height: 100,
    padding: 20,
    backgroundColor: '#202020',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  resultText: {
    color: 'white',
    fontSize: 40,
  },
  inputContainer: {
    width: '100%',
    height: 100,
    padding: 20,
    backgroundColor: '#202020',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  input: {
    color: 'white',
    fontSize: 40,
    width: '100%',
    textAlign: 'right',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#333333',
    width: '23%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  equalButton: {
    backgroundColor: '#ff7f50',
    width: '23%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  clearButton: {
    backgroundColor: '#ff0000',
    width: '23%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});
