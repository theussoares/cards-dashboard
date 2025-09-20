import { useStoreCards } from "../../../store/useStoreCards";
import Card from "../Card";

export default function FilteredCards() {
  const cards = useStoreCards((state) => state.cardsFiltered);
  const input = useStoreCards((state) => state.getInputFilter());

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Result: {cards.length}</h2>
      {cards.length > 0 ? (
        <ul className="flex flex-col sm:!flex-row gap-4 max-w-full w-full sm:overflow-x-auto">
          {cards.map((card, index) => (
            <li key={index}>
              <Card {...card} />
            </li>
          ))}
        </ul>
      ) : (
        input && (
          <div className="flex justify-center items-center w-full">
            No cards found.
          </div>
        ) // só mostra se tiver input
      )}
    </div>
  );
}
