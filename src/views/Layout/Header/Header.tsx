import { useEffect, useState } from "react";

import { PlayAudio } from "../../../components/PlayAudio/PlayAudio";
import styles from "./Header.module.scss";
import { MobileMenu } from "./Mobile Menu/MobileMenu";

interface Props {
  audioSrc: string;
}

export const Header: React.FC<Props> = ({ audioSrc }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {openMenu && <MobileMenu isOpen={openMenu} onOpenMenu={handleMenu} />}

      <header className={styles.header}>
        <div className={styles.mainHeader}>
          <a onClick={handleMenu} title="Abrir menú">
            <img
              className={styles.menuButton}
              src="/icons/red-hexagon.svg"
              alt="Logo de Jakala BikoInsights"
            />
          </a>

          <a className={styles.outlineLink} href="/" title="Vuelve al inicio">
            <img
              className={styles.logo}
              src="/logo-bikoinsights-dark.svg"
              alt="Logo de Jakala BikoInsights"
            />
          </a>
          <nav>
            <ul className={styles.navMenu}>
              <li>
                <a href="/#sumario" className={styles.navMenu_Item}>
                  <svg role="img" aria-hidden="true">
                    <use xlinkHref={"/sprite.svg#arrow-left"} />
                  </svg>{" "}
                  Sumario
                </a>
              </li>

              <li>
                <a
                  href="/#ediciones-anteriores"
                  className={styles.navMenu_Item}
                >
                  Ediciones anteriores
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <section className={styles.subHeader}>
          <span className={styles.subHeader_caption}>
            BikoInsights Edición #6
          </span>
          <PlayAudio src={audioSrc} />
        </section>
      </header>
    </>
  );
};
