import React from "react";

import styles from "./TitleList.module.scss";

export const TitleList: React.FC = () => {
  return (
    <ul className={styles.titleList}>
      <li className={styles.titleList_item}>
        <h3 className={styles.titleList_title}>
          <div className="mb-l">Génesis</div>
          <svg role="img" aria-hidden="true">
            <use xlinkHref={"/sprite.svg#title-arrow-down"} />
          </svg>
        </h3>
        <p className={styles.titleList_content}>
          En esta etapa, una nueva tecnología emerge (sirve igualmente para
          mercados que evolucionan, pero nos centraremos en hablar de
          tecnologías para no hacerlo repetitivo). Suele ser poco conocida y
          tener poca claridad sobre su potencial.
        </p>
      </li>
      <li className={styles.titleList_item}>
        <h3 className={styles.titleList_title}>
          <div className="mb-l">
            Custom Built <br /> (a medida)
          </div>
          <svg role="img" aria-hidden="true">
            <use xlinkHref={"/sprite.svg#title-arrow-down"} />
          </svg>
        </h3>
        <p className={styles.titleList_content}>
          Conforme la tecnología gana tracción, aparece un mercado incipiente de
          soluciones personalizadas, donde el foco está en estudiar cada
          problema particular y darle solución, de forma más o menos artesanal.
        </p>
      </li>
      <li className={styles.titleList_item}>
        <h3 className={styles.titleList_title}>
          <div className="mb-l">
            Producto <br />
            (o servicio)
          </div>
          <svg role="img" aria-hidden="true">
            <use xlinkHref={"/sprite.svg#title-arrow-down"} />
          </svg>
        </h3>
        <p className={styles.titleList_content}>
          A medida que la comprensión y la demanda crecen, surgen productos más
          estandarizados y empaquetados que pueden satisfacer un conjunto más
          amplio de necesidades.
        </p>
      </li>
      <li className={styles.titleList_item}>
        <h3 className={styles.titleList_title}>
          <div className="mb-l">
            Commodity <br /> (o utilidad)
          </div>
          <svg role="img" aria-hidden="true">
            <use xlinkHref={"/sprite.svg#title-arrow-down"} />
          </svg>
        </h3>
        <p className={styles.titleList_content}>
          Con el tiempo, la tecnología se vuelve tremendamente madura, estándar,
          una utilidad básica. Apretamos el interruptor y la luz se enciende;
          abrimos el grifo y sale agua. La tecnología como tal ya no es una
          ventaja competitiva, sino una parte esencial del funcionamiento
        </p>
      </li>
    </ul>
  );
};
