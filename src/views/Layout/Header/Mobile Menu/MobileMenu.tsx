import { useState } from "react";

import { classNames } from "../../../../utilities/classnames";
import styles from "./MobileMenu.module.scss";

interface Props {
  onOpenMenu: () => void;
  isOpen: boolean;
}

export const MobileMenu: React.FC<Props> = ({ onOpenMenu, isOpen }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleMenu = () => {
    setIsClosing(true);
    onOpenMenu();

    setTimeout(() => {
      setIsClosing(false);
    }, 500);
  };

  return (
    <>
      <div
        className={classNames(
          styles.mobileMenu,
          isOpen && styles.mobileMenu__open,
          isClosing && styles.mobileMenu__close
        )}
        aria-hidden={!isOpen}
      >
        <header className={styles.mobileMenu_header}>
          <a
            className={styles.outlineLink}
            onClick={handleMenu}
            title="Abrir menú"
          >
            <img
              className={styles.mobileMenu_menuButton}
              src="/icons/close.svg"
              aria-hidden="true"
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
            <li className={styles.mobileMenu_listItem}>
              <a href="/#sumario" onClick={handleMenu} title="Sumario">
                Sumario
              </a>
            </li>
            <li className={styles.mobileMenu_listItem}>
              <a
                href="/#ediciones-anteriores"
                onClick={handleMenu}
                title="Ediciones anteriores"
              >
                Ediciones anteriores
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
