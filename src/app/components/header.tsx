import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "../images/logo.svg";

export default function Header() {
  return (
    <Link href="/" passHref className={styles.header}>
      <Image src={Logo} alt="logo" className={styles.logo} />
      <div className={styles.line}></div>
      <div className={styles.name}>Официальный дилер Максимум</div>
    </Link>
  );
}
