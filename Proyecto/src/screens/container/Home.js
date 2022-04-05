import React, { useState, useEffect, Fragment } from 'react';
import Product from '../../sections/components/product';
import Empty from '../../components/Empty';
import Separator from '../../components/vertical-separator';
import Layout from '../../components/ProducListLayout';
import { FlatList } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home(props) {
  const [loading, setLoading] = useState();
  const [stories, setStories] = useState([
    {
      "id": 0,
      "nombre": null,
      "descripcion": null,
      "imagen": null,
      "usuario": null,
      "usuario_crea": null,
      "fecha_crea": null
    }]);
  const itemSeparator = () => <Separator />;
  const keyExtractor = item => item.id.toString();
  const renderEmpty = () => <Empty text="No hay sugerencias" />;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      const jwt = await AsyncStorage.getItem('@jwt');
      const [p1] = await Promise.all([
        axios.get(`https://erp.dichter-neira.com/Api/ReactNative/V1/Stories`,
          {
            headers: {
              'Authorization': `Bearer ${jwt}`
            }
          })
      ]);
      setStories(p1.data.result);
      setLoading(false);
    };
    fetchData()
      .catch(console.error);;
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Product
        product={item}
        onPress={() => viewProduct(item)}
        onLongPress={() => viewProduct(item)}
      />
    );
  };

  return (
    <Fragment>
      <Layout>
        <FlatList
          data={stories}
          ItemSeparatorComponent={itemSeparator}
          ListEmptyComponent={renderEmpty}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </Layout>
    </Fragment>
  );
};
