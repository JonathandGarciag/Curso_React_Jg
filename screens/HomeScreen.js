import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const products = [
  { id: '1', name: 'Product 1', price: 100, image: 'https://static.wikia.nocookie.net/mamarre-estudios-espanol/images/0/0e/El_dios_cachorrao.jpg/revision/latest?cb=20230924025303&path-prefix=es' },
  { id: '2', name: 'Product 2', price: 200, image: 'https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2018%2F11%2F16144851%2FMickey-Mouse-Portada-Ok.jpg?auth=500524ddab1447a67f15ff67084a9fdca385427408de8749b20d28edbed7c38b&smart=true&width=1200&height=630&quality=85' },
  { id: '3', name: 'Product 3', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JZpiIhUFlhRvzmUth7Mq9QAGOFRod_NHsw&s' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 9,
  },
});

export default HomeScreen;