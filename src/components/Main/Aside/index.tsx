import { useIsMobile } from "../../../hooks/useIsMobile";
import { useScreensStore } from "../../../store/useStoreScreen";
import Bookmark from "../../icons/Bookmark";
import Close from "../../icons/Close";
import Home from "../../icons/Home";
import Library from "../../icons/Library";
import Recent from "../../icons/Recent";
import Shared from "../../icons/Shared";
import Trash from "../../icons/Trash";
import Item from "./Item";

export default function Aside() {
  const menuItens = [
    { id: "home", label: "Home", icon: <Home /> },
    { id: "mylibrary", label: "My Library", icon: <Library /> },
    { id: "shared", label: "Shared With Me", icon: <Shared /> },
    { id: "bookmarked", label: "BookMarked", icon: <Bookmark /> },
    { id: "recents", label: "Recents", icon: <Recent /> },
    { id: "trash", label: "Trash", icon: <Trash /> },
  ];

  const currentScreen = useScreensStore((state) => state.currentScreen);
  const setCurrentScreen = useScreensStore((state) => state.setCurrentScreen);
  const showMenu = useScreensStore((state) => state.showMenu);
  const toggleMenu = useScreensStore((state) => state.toggleMenu);
  const isMobile = useIsMobile();

  const MenuList = (
    <nav>
      <ul>
        {menuItens.map((item) => (
          <li key={item.id}>
            <Item
              label={item.label}
              icon={item.icon}
              id={item.id}
              currentScreen={currentScreen}
              onClick={() => {
                setCurrentScreen(item.id);
                if(isMobile) toggleMenu();
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {!isMobile ? (
        <aside className="min-w-[170px] xl:min-w-[200px]">{MenuList}</aside>
      ) : (
        showMenu && (
          <div className="fixed inset-0 z-10 backdrop-blur-xs backdrop-brightness-50">
            <aside className="relative w-full h-fit bg-tertiary p-6">
                <div className="flex justify-end mb-1 p-1">
                    <Close onClick={() => toggleMenu()}/>
                </div>
              {MenuList}
            </aside>
          </div>
        )
      )}
    </>
  );
}
