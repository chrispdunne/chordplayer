import { StyledOption, StyledSelect } from "./styles"

export interface Option {
  value: string
  label: string
}
interface Props {
  value: string
  onChange: (value: string) => void
  options: Option[]
  id?: string
}
export default function Select({ value, onChange, options, id }: Props) {
  return (
    <StyledSelect id={id}>
      {options.map((option) => (
        <StyledOption autoFocus value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  )
}
