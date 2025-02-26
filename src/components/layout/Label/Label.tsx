import  { LabelHTMLAttributes } from 'react'
import { Label as StyledLabel } from './Label.styles'

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <StyledLabel {...props} />
}

export default Label