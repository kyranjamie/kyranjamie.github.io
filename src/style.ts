type UnitSize = 'small' | 'medium' | 'large' | 'huge'

const spaceUnits: { [key in UnitSize]: string } = {
  small: '8px',
  medium: '16px',
  large: '24px',
  huge: '32px'
}
