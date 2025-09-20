export default function Item({
  label,
  icon,
  currentScreen,
  id,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  currentScreen: string;
  id: string;
  onClick: (label: string) => void;
}) {

  return (
    <button
      onClick={() => onClick(id)}
      className={`cursor-pointer transition-colors flex items-center font-bold gap-3 px-4 py-3 w-full text-left hover:bg-gray-100 rounded-lg ${
        currentScreen === id
          ? "!bg-primary/25 text-primary"
          : ""
      }`}
      id={id}
    >
      {icon}
      {label}
    </button>
  );
}
