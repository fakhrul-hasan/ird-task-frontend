import Image from "next/image";


const CardBottomSec = () => {
    return (
        <div className="flex justify-end gap-2 md:gap-4 p-2">
            <Image src='/copy.png' alt="copy" height={20} width={20} />
            <Image src='/bookmarkWhite.png' alt="copy" height={20} width={20} />
            <Image src='/memorizeWhite.png' alt="copy" height={20} width={20} />
            <Image src='/share.png' alt="copy" height={20} width={20} />
            <Image src='/report.png' alt="copy" height={20} width={20} />
        </div>
    );
};

export default CardBottomSec;