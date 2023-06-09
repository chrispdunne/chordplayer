import { keys } from "../../const/keys"
import Select from "../Select"

interface Props {
  value: string
  onChange: (value: string) => void
}
export default function KeySelect({ value, onChange }: Props) {
  return (
    <div>
      <label htmlFor="key_select">Root: </label>
      <Select
        id="key_select"
        options={keys.map((key) => ({ value: key, label: key }))}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
