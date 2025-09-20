import { useStoreCards } from "../../../store/useStoreCards";
import { useScreensStore } from "../../../store/useStoreScreen";
import Chevron from "../../icons/Chevron";
import Card from "../Card";

export default function Bookmarks() {
  const { getBookmarkedCards } = useStoreCards();
  const cards = getBookmarkedCards();
  const currentScreen = useScreensStore((state) => state.currentScreen);

  const isBookmarksScreenEmpty =
    cards.length === 0 && currentScreen === "bookmarked";
  return (
    <>
      {cards.length > 0 ? (
        <div>
          <div className="w-full flex gap-1 items-end font-bold mb-4">
            <h2 className="text-xl">Bookmarkeds</h2>
            {currentScreen !== "bookmarked" && (
              <div className="pb-[3px]">
                <Chevron />
              </div>
            )}
          </div>
          <ul
            className={`flex w gap-4 max-w-full w-full 
            ${
              currentScreen === "bookmarked"
                ? "grid col-span-1 md:grid-cols-2 lg:grid-cols-3"
                : "flex-col sm:!flex-row sm:overflow-x-auto"
            }
            `}
          >
            {cards.map((card, index) => (
              <li className="w-full flex justify-center" key={index}>
                <Card {...card} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        isBookmarksScreenEmpty && (
          <>
            <h2 className="text-xl font-bold mb-4">Bookmarks</h2>
            <div className="flex justify-center items-center">
              <p className="text-text-secondary">
                You have no cards in your bookmarks.
              </p>
            </div>
          </>
        )
      )}
    </>
  );
}
