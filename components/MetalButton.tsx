import {
  Canvas,
  LinearGradient,
  vec,
  Group,
  Circle,
  Shadow,
  Path,
  RoundedRect,
} from '@shopify/react-native-skia'

export function MetalButton({ width }: { width: number }) {
  const height = 40
  const r = 12

  const arrowPath = `
    M ${r} ${r - 6}
    L ${r} ${r + 6}
    M ${r} ${r - 6}
    L ${r - 4.5} ${r - 1.5}
    M ${r} ${r - 6}
    L ${r + 4.5} ${r - 1.5}
  `

  return (
    <Canvas style={{ width: width, height }}>
      <RoundedRect width={width} height={height} x={0} y={0} r={1000} color="#fff" />
      <Group transform={[{ translateY: 8 }, { translateX: width - r * 2 - 9 }]}>
        <Circle cx={r} cy={r} r={r} color="#AEAEAE">
          <LinearGradient
            start={vec(r, 0)}
            end={vec(r, r)}
            colors={['#EEEEEE', '#9B9B9B']}
            positions={[0, 0.7, 1]}
          />
        </Circle>
        <Group style="stroke" strokeWidth={2}>
          <Circle cx={r} cy={r} r={r} />
          <Circle cx={r} cy={r} r={r + 1} color="#000" strokeWidth={0.4}>
            <LinearGradient
              start={vec(r, 0)}
              end={vec(r, r)}
              colors={['#000', '#A0A0A0']}
              positions={[0, 0.7, 1]}
            />
          </Circle>
          <LinearGradient
            start={vec(r, 0)}
            end={vec(r, r)}
            colors={['#FFFFFF', '#4C4C4C']}
            mode="mirror"
          />
        </Group>
        <Shadow dx={0} dy={2} blur={4} color="#00000030" />

        <Group>
          <Path
            path={arrowPath}
            color="white"
            style="stroke"
            strokeWidth={2}
            strokeCap="round"
            strokeJoin="round"
          />
          <Shadow dx={0} dy={1} blur={0} color="#00000090" inner />
        </Group>
      </Group>
    </Canvas>
  )
}
