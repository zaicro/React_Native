import React, { useState, Fragment } from 'react';
import Product from '../../sections/components/product';
import Empty from '../../components/Empty';
import Separator from '../../components/vertical-separator';
import Layout from '../../components/ProducListLayout';
import { FlatList } from 'react-native';

const array = [
  { id: 1, title: 'De regreso ...', details: 'Historia N°1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DcRBlecJp3bIuYbwGuv2E6nA33FE2hNNWg&usqp=CAU' },
  { id: 2, title: 'Canasta CAM', details: 'Historia N°2', image: 'https://dichter-neira.com/wp-content/uploads/2021/08/Post-consumo-2-trimestre-2021.png' },
  { id: 3, title: 'StoreTrack', details: 'Historia N°3', image: 'https://dichter-neira.com/wp-content/uploads/2020/09/2020-09-StoreTrack_v1-C.png' },
];

export default function Home(props) {
  const [products, setProducts] = useState(array);
  const itemSeparator = () => <Separator />;
  const keyExtractor = item => item.id.toString();
  const renderEmpty = () => <Empty text="No hay sugerencias" />;
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
          data={products}
          ItemSeparatorComponent={itemSeparator}
          ListEmptyComponent={renderEmpty}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </Layout>
    </Fragment>
  );
};
