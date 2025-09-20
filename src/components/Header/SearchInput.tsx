import { useState } from "react";
import { useStoreCards } from "../../store/useStoreCards";
import SearchIcon from "../icons/Search";

export default function SearchInput() {

    const placeholder = "Search for Quiz sets, People, subjects..."
    const { setInputFilter } = useStoreCards();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
        e.target.value = value;
        setInputFilter(value);
    };

    const [isFocused, setIsFocused] = useState(false);

    return (
      <div
        className={`flex md:!max-w-[500px] xl:!max-w-[745px] md:!w-full items-center gap-2 sm:gap-4 border rounded-md p-1 ${
          isFocused ? "border-primary" : "border-secondary"
        }`}
      >
        <SearchIcon />
        <input
          placeholder={placeholder}
          type="text"
          name=""
          id=""
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="outline-none border-none focus:ring-0 w-full"
          onChange={handleInputChange}
        />
      </div>
    );
}