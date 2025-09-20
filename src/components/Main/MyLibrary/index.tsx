import { useStoreCards } from "../../../store/useStoreCards";
import { useScreensStore } from "../../../store/useStoreScreen";
import Chevron from "../../icons/Chevron";
import Card from "../Card";

export default function MyLibrary() {
  const { getMyCards } = useStoreCards();
  const cards = getMyCards();
  const currentScreen = useScreensStore((state) => state.currentScreen);

  const isLibraryScreenEmpty = cards.length === 0 && currentScreen === "mylibrary";

  return (
    <>
      {cards.length > 0 ? (
        <div>
          <div className="w-full flex gap-1 items-end font-bold mb-4">
            <h2 className="text-xl">My Library</h2>
            {currentScreen !== "mylibrary" && (
              <div className="pb-[3px]">
                <Chevron />
              </div>
            )}
          </div>
          <ul
            className={`flex w gap-4 max-w-full w-full sm:overflow-x-auto
            ${
              currentScreen === "mylibrary"
                ? "grid col-span-1 md:grid-cols-2 lg:grid-cols-3"
                : "flex-col sm:!flex-row"
            }
            `}
          >
            {cards.map((card, index) => (
              <li className="w-fit flex justify-center" key={index}>
                <Card {...card} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        isLibraryScreenEmpty && (
          <>
            <h2 className="text-xl font-bold mb-4">My Library</h2>
            <div className="flex justify-center items-center">
              <p className="text-text-secondary">
                You have no cards in your library.
              </p>
            </div>
          </>
        )
      )}
    </>
  );
}
