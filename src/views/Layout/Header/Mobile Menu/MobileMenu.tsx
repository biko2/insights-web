import { useState } from "react";

import styles from "./MobileMenu.module.scss";

interface Props {
  onOpenMenu: () => void;
  isOpen: boolean;
}

export const MobileMenu: React.FC<Props> = ({ onOpenMenu, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.mobileMenu}>
          <header className={styles.mobileMenu_header}>
            <a
              className={styles.outlineLink}
              onClick={onOpenMenu}
              title="Abrir menú"
            >
              <img
                className={styles.mobileMenu_menuButton}
                src="/icons/red-hexagon.svg"
                alt="Logo de Jakala BikoInsights"
              />
            </a>
            <a className={styles.outlineLink} href="/" title="Vuelve al inicio">
              <img
                className={styles.mobileMenu_logo}
                src="/logo-bikoinsights.svg"
                alt="Logo de Jakala BikoInsights"
              />
            </a>
          </header>
          <nav className={styles.mobileMenu_list}>
            <ul>
              <li className={styles.mobileMenu_listItem}>Sumario</li>
              <li className={styles.mobileMenu_listItem}>
                Ediciones anteriores
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
