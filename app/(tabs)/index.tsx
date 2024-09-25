import { StyleSheet, View } from 'react-native'
import { MetalButton } from '@/components/MetalButton'
import { useState } from 'react'

export default function HomeScreen() {
  const [width, setWidth] = useState(0)
  return (
    <View style={styles.container}>
      <View
        style={styles.input}
        onLayout={e => {
          setWidth(e.nativeEvent.layout.width)
        }}
      >
        {width > 0 && <MetalButton width={width} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    width: '100%',
  },
})
