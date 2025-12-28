import { useContext } from "react"
import { DropdownContext } from "../component/compound/dropdown/dropdown"

export const useDropdown = () => {
    const context = useContext(DropdownContext)
    if(!context) throw new Error("Drpodown Context can not be used outside the Dropdown Provider")
    return context
}