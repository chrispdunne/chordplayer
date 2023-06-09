import { useAppSelector } from "../../app/hooks"
import { selectView } from "../../store/appSlice"

export default function EditApp() {
  const isVisible = useAppSelector(selectView) === "editApp"
  return isVisible ? <>edit app</> : null
}
