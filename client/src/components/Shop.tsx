import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert, Platform } from 'react-native';
import * as RNIap from 'react-native-iap';
import axios from 'axios';
import SoundManager from '../lib/SoundManager';

const itemSkus = Platform.select({
  ios: ['com.yourgame.coins_50', 'com.yourgame.coins_120'],
  android: ['com.yourgame.coins_50', 'com.yourgame.coins_120']
});

type Props = { userId: string; serverUrl: string };

export default function Shop({ userId, serverUrl }: Props) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await RNIap.initConnection();
        const prods = await RNIap.getProducts(itemSkus || []);
        setProducts(prods);
      } catch (err) {
        console.warn('IAP init err', err);
      }
    })();
    return () => { RNIap.endConnection(); };
  }, []);

  async function purchaseProduct(productId: string) {
    try {
      setLoading(true);
      SoundManager.play('click');
      const purchase = await RNIap.requestPurchase(productId, false);
      const platform = Platform.OS === 'ios' ? 'ios' : 'android';
      const receiptData = platform === 'ios' ? purchase.transactionReceipt : purchase.purchaseToken || purchase.transactionReceipt;
      await axios.post(`${serverUrl || 'http://localhost:3000'}/api/payments/validate-receipt`, {
        platform,
        userId,
        receiptData,
      }, { timeout: 15000 });
      SoundManager.play('coin');
      Alert.alert('Успех', 'Покупка подтверждена и монеты зачислены.');
    } catch (err: any) {
      console.error('purchase error', err);
      Alert.alert('Ошибка покупки', err?.message || 'Что-то пошло не так');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 8 }}>Магазин</Text>
      {products.length === 0 && <Text>Загрузка товаров...</Text>}
      {products.map(p => (
        <TouchableOpacity key={p.productId} onPress={() => purchaseProduct(p.productId)} style={{ padding: 12, backgroundColor: '#eee', marginBottom: 8, borderRadius: 8 }}>
          <Text style={{ fontSize: 16 }}>{p.title}</Text>
          <Text>{p.localizedPrice}</Text>
        </TouchableOpacity>
      ))}
      {loading && <ActivityIndicator />}
    </View>
  );
}
