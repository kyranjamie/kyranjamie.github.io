// enum SpaceUnits {
//   Small = '8px',
//   Medium = '16px',
//   Large = '24px',
//   Huge = '32px'
// }

type UnitSize = 'small' | 'medium' | 'large' | 'huge'

const spaceUnits: { [key in UnitSize]: string } = {
  small: '8px',
  medium: '16px',
  large: '24px',
  huge: '32px'
}

// type SpaceUnit = keyof typeof SpaceUnits

// export function space (unit: ) {

// }
