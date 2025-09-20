import { useIsMobile } from "../../hooks/useIsMobile";

export default function User() {
  const isMobile = useIsMobile();

  const dimensions = {
    h: isMobile ? 20 : 24,
    w: isMobile ? 20 : 24,
  };

  return (
    <div className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center">
      <svg width={dimensions.w} height={dimensions.h} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M208 192C208 130.1 258.1 80 320 80C381.9 80 432 130.1 432 192C432 253.9 381.9 304 320 304C258.1 304 208 253.9 208 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM112 544C112 455.6 183.6 384 272 384L368 384C456.4 384 528 455.6 528 544L528 568C528 572.4 531.6 576 536 576C540.4 576 544 572.4 544 568L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 568C96 572.4 99.6 576 104 576C108.4 576 112 572.4 112 568L112 544z" />
      </svg>
    </div>
  );
}
