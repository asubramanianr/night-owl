import type { Component } from "solid-js";
import { Link } from "solid-app-router";

import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header: Component = () => {
  return (
    <div class={styles.header}>
      <img src={logo} class={styles.logo} alt="logo" />
      <h1 class={styles.title}>
        <Link class={styles.anchor} href="/">
          Night Owl
        </Link>
      </h1>
    </div>
  );
};

export default Header;
