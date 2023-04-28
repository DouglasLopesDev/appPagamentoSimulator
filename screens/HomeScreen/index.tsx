import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

interface IHomeScreen {
  navigation : any
}

export const HomeScreen = (props: IHomeScreen) =>  {
  
  const {navigation} = props

  const [purchaseValue, setPurchaseValue] = useState<string>()

  const pushToInstallmentScreen = () => { navigation.navigate("InstallmentScreen", { purchaseValue: purchaseValue })}


  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.label}>
          <Text>Digite o valor abaixo da sua compra para continuar</Text>
        </View>
        <TextInput
            style={styles.input}
            onChangeText={(value) => {setPurchaseValue(value)}}
            value={purchaseValue}
            placeholder="Digite o valor da compra"
            keyboardType="numeric"
        />
        <Button
          onPress={pushToInstallmentScreen}
          title="Avançar"
          color="#841584"
          accessibilityLabel="Avance para a próxima tela"
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  label:{
    alignItems: 'center',
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
