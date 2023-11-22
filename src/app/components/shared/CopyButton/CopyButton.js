import React from "react";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

const CopyButton = ({ cardId }) => {
  const handleCopyClick = () => {
    // Get the HTML content
    const card = document.getElementById(cardId);
    const cardContent = card ? card.innerHTML : "";
    const container = document.createElement("div");
    container.innerHTML = cardContent;

    const textArea = document.createElement("textarea");
    textArea.value = container.textContent;
    document.body.appendChild(textArea);

    // Select and copy the HTML content
    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);

    // Notify the user that the content has been copied
    alert(<CiCircleCheck /> + "Copied");
  };

  return (
    <div className="tooltip">
        <span className="tooltiptext text-xs">Copy</span>
      <Image
        src="/copy.png"
        onClick={handleCopyClick}
        alt="copy"
        height={20}
        width={20}
      />
    </div>
  );
};

export default CopyButton;
