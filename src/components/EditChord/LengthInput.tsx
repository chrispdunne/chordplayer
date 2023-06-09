interface Props {
  value: number
  onChange: (value: number) => void
}
export default function LengthInput({ value, onChange }: Props) {
  return (
    <div>
      How many bars:{" "}
      <input
        type="number"
        min={1}
        max={99}
        onChange={(e) => onChange(e.target.valueAsNumber)}
        value={value}
      />
    </div>
  )
}
