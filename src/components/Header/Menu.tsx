import { useScreensStore } from "../../store/useStoreScreen";
import MenuIcon from "../icons/MenuIcon";

export default function Menu() {

    const { toggleMenu } = useScreensStore();

    const handleClick = () => {
        // Implement menu toggle functionality here
        toggleMenu();
    }

    return (
        <MenuIcon onClick={handleClick} />
    )
}  