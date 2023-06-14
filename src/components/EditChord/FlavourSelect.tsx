import { getFlavourEnumKeys } from "../../types"
import Select from "../Select"

const flavours = getFlavourEnumKeys()
interface Props {
  value: string
  onChange: (value: string) => void
}

export default function FlavourSelect({ value, onChange }: Props) {
  return (
    <div>
      Which Flavour:{" "}
      <Select
        options={flavours.map((flavour) => ({
          value: flavour,
          label: flavour,
        }))}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
