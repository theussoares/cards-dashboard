import { useIsMobile } from "../../hooks/useIsMobile";
import { useStoreCards } from "../../store/useStoreCards";
import { useScreensStore } from "../../store/useStoreScreen";
import Aside from "./Aside";
import Bookmarks from "./Bookmarks";
import Explore from "./Explore";
import FilteredCards from "./FilteredCards";
import MyLibrary from "./MyLibrary";
import Recents from "./Recents";
import SharedWithMe from "./SharedWithMe";
import Trash from "./Trash";

export default function Main() {
  
  const isMobile = useIsMobile();
  const cards = useStoreCards((state) => state.cardsFiltered);
  const input = useStoreCards((state) => state.getInputFilter());

  const currentScreen = useScreensStore((state) => state.currentScreen);

  const showComponents = {
    home:
      currentScreen === "home"
        ? [<Recents key="recents" />, <MyLibrary key="mylibrary" />]
        : null,
    recents: currentScreen === "recents" ? <Recents key="recents" /> : null,
    mylibrary:
      currentScreen === "mylibrary" ? <MyLibrary key="mylibrary" /> : null,
    bookmarked:
      currentScreen === "bookmarked" ? <Bookmarks key="bookmarked" /> : null,
    trash: currentScreen === "trash" ? <Trash key="trash" /> : null,
    shared:
      currentScreen === "shared" ? <SharedWithMe key="sharedwithme" /> : null,
  };

  return (
    <div className="flex gap-7.5">
      <Aside />
      {(input.length > 0 && cards.length > 0) || input.length > 0 ? (
        <FilteredCards />
      ) : (
        <div className="flex flex-col gap-5 w-full overflow-hidden pr-4 md:pr-8 lg:pr-14 xl:pr-20 2xl:pr-32">
          {
            showComponents[currentScreen as keyof typeof showComponents]
          }

          {currentScreen === "home" && (
          <Explore />
          )}
        </div>
      )}
    </div>
  );
}
