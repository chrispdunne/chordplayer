import { flavours } from "../../const/keys"
import Select from "../Select"

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
