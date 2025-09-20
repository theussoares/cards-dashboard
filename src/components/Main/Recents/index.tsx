import { useStoreCards } from "../../../store/useStoreCards";
import { useScreensStore } from "../../../store/useStoreScreen";
import Chevron from "../../icons/Chevron";
import Card from "../Card";

export default function Recents() {
  const { getRecentCards } = useStoreCards();
  const cards = getRecentCards();
  const currentScreen = useScreensStore((state) => state.currentScreen);

  const goToRecents = useScreensStore((state) => state.setCurrentScreen);

  const handleTitleClick = () => {
    if (currentScreen === "recents") return;
    goToRecents("recents");
  };

  return (
    <>
      {cards.length > 0 && (
        <div>
          <div
            className={`w-full flex gap-1 items-end font-bold mb-4 
          ${
            currentScreen !== "recents"
              ? "cursor-pointer hover:underline"
              : "cursor-default"
          }
          `}
            onClick={handleTitleClick}
          >
            <h2 className="text-xl">Recent</h2>
            {currentScreen !== "recents" && (
              <div className="pb-[3px]">
                <Chevron />
              </div>
            )}
          </div>
          <ul
            className={`flex gap-4 max-w-full w-full sm:overflow-x-auto
            ${
              currentScreen === "recents"
                ? "flex flex-wrap"
                : "flex-col sm:!flex-row sm:overflow-x-auto"
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
      )}
    </>
  );
}
