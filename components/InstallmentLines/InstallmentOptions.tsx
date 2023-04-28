import React from 'react';
import { Button, FlatList, StyleSheet, Text, View} from 'react-native';

interface IInstallmentOptions {
    totalValue : any,
    installmentQuantity: any
    pushPasswordScreen: any
    setInstallmentValue: any
    setInstallmentsQuantity: any

}

export const InstallmentOptions = (props: IInstallmentOptions) =>  {

    const {
      totalValue,
      installmentQuantity,
      setInstallmentsQuantity,
      setInstallmentValue,
      pushPasswordScreen 
    } = props

    let data = []
    
    const configureInstallment = () => {
        for (let index = 1; index <= installmentQuantity; index++) {
          const value = (totalValue / index).toFixed(2)
          data.push({
              title:  index+'X de ' + value + ' sem Juros',
              value,
              installments: index               
          })
            
        }
        return data
    }

    const Item = ({title, value, installments}) => (
        <View style={styles.item}>
            <Text
              onPress={() => {
                setInstallmentValue(value)
                setInstallmentsQuantity(installments)
                pushPasswordScreen()
              }}
              style={styles.title}
            >
              {title}
            </Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={configureInstallment()}
                renderItem={({item}) => <Item title={item.title} value={item.value} installments={item.installments} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#e6e6e6',
    padding: 13,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 20,
  },
});
