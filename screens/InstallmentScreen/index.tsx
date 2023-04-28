import React, {useState} from 'react';
import { Text, StyleSheet, View} from 'react-native';
import { InstallmentOptions } from '../../components/InstallmentLines/InstallmentOptions';

interface IInstallmentScreen {
  navigation : any
  route: any
}

export const InstallmentScreen = (props: IInstallmentScreen) => {
  
  const { navigation, route} = props

  const [installmentValue, setInstallmentValue] = useState()
  const [installmentsQuantity, setInstallmentsQuantity] = useState()

  const [purchaseValue, setPurchaseValue] = useState(route.params.purchaseValue)
  const pushPasswordScreen = () => { navigation.navigate("PasswordScreen", { installmentValue: installmentValue, number_installments: installmentsQuantity })}

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Compra no valor de R${route.params.purchaseValue}</Text>
      <InstallmentOptions
        totalValue={purchaseValue}
        installmentQuantity={12}
        pushPasswordScreen={pushPasswordScreen}
        setInstallmentValue={setInstallmentValue}
        setInstallmentsQuantity={setInstallmentsQuantity}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold"
  }
});
