import React from 'react';
import { View, Text } from 'react-native';

type Props = { targetBlock?: { type: string; level: number } };

export default function TargetBanner({ targetBlock }: Props) {
  if (!targetBlock) return null;
  return (
    <View style={{
      position: 'absolute',
      top: 8,
      left: 0,
      right: 0,
      alignItems: 'center',
      zIndex: 999
    }}>
      <View style={{ backgroundColor: 'rgba(0,0,0,0.65)', padding: 8, borderRadius: 12 }}>
        <Text style={{ color: '#fff', fontWeight: '600' }}>Целевой блок: уровень {targetBlock.level}</Text>
      </View>
    </View>
  );
}
