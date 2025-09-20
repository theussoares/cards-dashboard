import { useIsMobile } from "../../hooks/useIsMobile";
import Logo from "../icons/Logo";
import Plus from "../icons/Plus";
import User from "../icons/User";
import World from "../icons/World";
import Menu from "./Menu";
import SearchInput from "./SearchInput";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <div className="bg-white flex items-center py-1">
      <div className="sm:min-w-[200px] xl:min-w-[230px]">
        <Logo />
      </div>
      <div className="flex justify-between items-center w-full pr-4 md:pr-8 lg:pr-14 xl:pr-20 2xl:pr-32 gap-4">
      <SearchInput />
      <div className="flex items-center gap-2.5">
        {isMobile ? <Menu /> : (
          <div className="flex items-center gap-2.5">
            <button className="bg-quaternary hover:bg-quaternary/75 cursor-pointer text-tertiary flex items-center gap-2 text-sm px-4 py-3 rounded-lg">
              <World />
              Explore
            </button>

            <button className="bg-primary hover:bg-primary/75 cursor-pointer text-tertiary flex items-center gap-2 text-sm px-4 py-3 rounded-lg">
              <Plus />
              Create
            </button>
            <User />
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
