
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto Luz',
        value: '338,37',
        date: '18/02/2024',
        type: 0 //despesa
    },
    {
        id: 2,
        label: 'Pix Cliente',
        value: '1.600,44',
        date: '16/02/2024',
        type: 1 //receita
    },
    {
        id: 3,
        label: 'Salario minimo',
        value: '7.200,13',
        date: '15/02/2024',
        type: 1 //receita
    },


]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Frederico"/>
      
      <Balance saldo='9.258,88' gastos="-228,71"/>

      <Actions/>

      <Text style={styles.title}> Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator = {false}
        renderItem={({ item }) => <Movements data={item}/>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight:'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
