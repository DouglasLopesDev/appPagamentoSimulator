import React, {useState} from 'react';
import { Button, Modal, Pressable, SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';
import { generateTokenCard, paymentCreditCard } from '../../services/GetnetSandboxService';

interface IPasswordScreen {
  navigation : any
  route: any
}

export const PasswordScreen = (props: IPasswordScreen) =>  {
  
  const {navigation, route} = props

  const pushHomeScreen = () => { navigation.navigate("Home", {})}


  const [amount, setAmount] = useState(route.params.installmentValue)
  const [number_installments, setNumber_installments] = useState(route.params.number_installments)

  console.log("root", route.params)
  const [ password, setPassword ] = useState<string>()
  const [modalVisible, setModalVisible] = useState(false);

  const confirmPayment = async () => {
    try {
      const amountCent= amount * 100

      // const response = await generateTokenCard()
      await paymentCreditCard("b824d023bd6f43c1544421a0765ad2f34c90d1b9b4d76c023a29af86465e81e25c15eff51050f63b1e95016b402682f63a74d9948fba827c238da9c3d4677b18",
       number_installments, amountCent, null)

      setModalVisible(true)
    } catch (error) {
      console.log("error no pagamento: ", error)
    }
   
  }

  return (
      <SafeAreaView style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={(value) => {setPassword(value)}}
            value={password}
            placeholder="Digite sua senha"
            keyboardType="numeric"
            secureTextEntry={true}
        />
        <Button
            onPress={confirmPayment}
            title="Confirmar"
            color="#841584"
            accessibilityLabel="Confirme sua compra"
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Pagamento Realizado com Sucesso</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  pushHomeScreen()
                  setModalVisible(!modalVisible)
                }}>
                <Text style={styles.textStyle}>Finalizar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
