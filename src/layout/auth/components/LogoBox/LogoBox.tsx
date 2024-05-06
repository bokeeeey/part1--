import classNames from "classnames/bind";
import Link from "next/link";
import { Ic_Logo } from "@/public";
import { ROUTER } from "@/src/common/constants";

import styles from "./LogoBox.module.scss";

const cn = classNames.bind(styles);

interface LogoBoxProps {
  text: string;
  href: string;
  hrefText: string;
}

export default function LogoBox({ text, href, hrefText }: LogoBoxProps) {
  return (
    <header className={cn("logobox")}>
      <Ic_Logo width="210" height="38" />
      <hgroup className={cn("textBox")}>
        {text}
        <span className={cn("link")}>
          <Link href={href}>{hrefText}</Link>
        </span>
      </hgroup>
    </header>
  );
}
