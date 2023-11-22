import Image from "next/image";
import CopyButton from "../CopyButton/CopyButton";

const CardBottomSec = ({ cardId }) => {
  return (
    <div className="flex justify-end gap-2 md:gap-4 p-2">
      <CopyButton cardId={cardId} />
      <div className="tooltip">
        <span className="tooltiptext text-xs">Bookmark</span>
        <Image
          src="/bookmarkWhite.png"
          alt="bookmark"
          height={20}
          width={20}
        />
      </div>
      <div className="tooltip">
        <span className="tooltiptext text-xs">Memorize</span>
        <Image
          src="/memorizeWhite.png"
          alt="memorize"
          height={20}
          width={20}
        />
      </div>
      <div className="tooltip">
        <span className="tooltiptext text-xs">Share</span>
        <Image
          src="/share.png"
          alt="share"
          height={20}
          width={20}
        />
      </div>
      <div className="tooltip">
        <span className="tooltiptext text-xs">Report</span>
        <Image
          src="/report.png"
          alt="report"
          height={20}
          width={20}
        />
      </div>
    </div>
  );
};

export default CardBottomSec;
