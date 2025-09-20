import { useStoreCards } from "../../../store/useStoreCards";
import { useScreensStore } from "../../../store/useStoreScreen";
import Chevron from "../../icons/Chevron";
import Card from "../Card";

export default function Explore() {
  const { getCards } = useStoreCards();
  const cards = getCards();
  const currentScreen = useScreensStore((state) => state.currentScreen);

  return (
    <>
      {cards.length > 0 && (
        <div>
          <div
            className={`w-full flex gap-1 items-end font-bold mb-4 
          `}
          >
            <h3 className="text-xl">Explore</h3>
          </div>
          <ul
            className="!gap-4 max-w-full w-full sm:overflow-x-auto grid col-span-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map((card, index) => (
              <li className="w-full flex justify-center" key={index}>
                <Card {...card} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
