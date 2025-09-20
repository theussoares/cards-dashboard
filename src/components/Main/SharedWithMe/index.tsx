import { useStoreCards } from "../../../store/useStoreCards";
import { useScreensStore } from "../../../store/useStoreScreen";
import Card from "../Card";

export default function SharedWithMe() {
  const { getSharedWithMeCards } = useStoreCards();
  const cards = getSharedWithMeCards();
  const currentScreen = useScreensStore((state) => state.currentScreen);

  const isSharedScreenEmpty =
    cards.length === 0 && currentScreen === "shared";

  return (
    <>
      {cards.length > 0 ? (
        <div>
          <div className="w-full flex gap-1 items-end font-bold mb-4">
            <h2 className="text-xl">Shared With Me</h2>
          </div>
          <ul
            className={`flex w gap-4 max-w-full w-full sm:overflow-x-auto
            ${
              currentScreen === "shared"
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
        isSharedScreenEmpty && (
          <>
            <h2 className="text-xl font-bold mb-4">Shared With Me</h2>
            <div className="flex justify-center items-center">
              <p className="text-text-secondary">
                You have no cards shared with you.
              </p>
            </div>
          </>
        )
      )}
    </>
  );
}
