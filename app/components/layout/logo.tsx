import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <div className="flex max-h-max max-w-max items-center gap-2">
      <Link href={"/"}>
        <Image src={"/karavoice-logo.svg"} alt="logo" width={48} height={48} />
      </Link>
      <span className="self-center text-lg font-black tracking-tight md:text-xl lg:text-2xl">
        KaraVoice
      </span>
    </div>
  );
};

export default Logo;
