import { useStoreCards } from "../../../store/useStoreCards";
import Bookmark from "../../icons/Bookmark";
import Bookmarked from "../../icons/Bookmarked";
import Ellipsis from "../../icons/Ellipsis";
import Star from "../../icons/Star";

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  author: string;
  rate: number;
  bookmarked?: boolean;
  fromUser?: boolean;
  id: string;
}

export default function Card({
  title,
  description,
  tags,
  author,
  rate,
  bookmarked,
  fromUser,
  id,
}: CardProps) {

  const { bookmarkCard } = useStoreCards();
  const handleBookmarkClick = () => {
    bookmarkCard(id);
  };

  return (
    <article className="flex cursor-pointer flex-col justify-between max-w-[335px] w-full sm:!w-[335px] min-h-[216px] rounded-lg border transition-colors border-secondary hover:border-primary active:border-primary p-2.5">
      <div className="flex justify-between items-center font-semibold">
        <h3>{title}</h3>

        {!fromUser && (
          <div onClick={handleBookmarkClick} className="flex gap-2">
            {bookmarked ? <Bookmarked /> : <Bookmark />}
            <div className="w-5 h-5 cursor-pointer flex justify-center items-center rounded-full bg-transparent hover:bg-secondary active:bg-secondary">
              <Ellipsis />
            </div>
          </div>
        )}
      </div>
      <p className="text-xs font-normal">{description}</p>
      <div className="flex gap-1">
        <span className="text-xs font-normal">Tags:</span>
        <ul className="flex gap-1 text-xs font-normal">
          {tags.map((tag, index) => (
            <li key={index}>
              {tag}
              {index < tags.length - 1 && ","}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-1 items-center">
        <div className="w-10 h-10 rounded-full bg-secondary"></div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{author}</span>
          <span className="flex text-xs font-normal">
            {Array.from({ length: rate }, (_, i) => (
              <Star key={i} />
            ))}
          </span>
        </div>
      </div>
    </article>
  );
}
