import React from "react";

import { classNames } from "../../utilities/classnames";
import styles from "./Table.module.scss";

export const Table: React.FC = () => {
  return (
    <section className={classNames(styles.tableContainer, "reveal-content")}>
      <ul className={styles.table}>
        <li className={styles.table_header}>
          <div
            className={classNames(styles.table_headerContent, styles.row_small)}
          >
            Dominio
          </div>
          <div
            className={classNames(styles.table_headerContent, styles.row_big)}
          >
            Qué lo caracteriza
          </div>
          <div
            className={classNames(styles.table_headerContent, styles.row_big)}
          >
            Cómo actuar
          </div>
          <div
            className={classNames(
              styles.table_headerContent,
              styles.row_medium
            )}
          >
            Qué debe guiar nuestras acciones
          </div>
        </li>
        <li className={styles.table_item}>
          <div
            className={classNames(
              styles.table_content,
              styles.table_content__highlighted,
              styles.row_small
            )}
          >
            Simple
          </div>
          <div className={classNames(styles.table_content, styles.row_big)}>
            La relación entre causa y efecto es clara, evidente.
          </div>
          <div className={classNames(styles.table_content, styles.row_big)}>
            <ol>
              <li>1. Observar</li>
              <li className={styles.table_content__highlighted}>
                2. Categorizar
              </li>
              <li>3. Responder</li>
            </ol>
          </div>
          <div className={classNames(styles.table_content, styles.row_medium)}>
            Mejores prácticas
          </div>
        </li>
        <li className={styles.table_item}>
          <div
            className={classNames(
              styles.table_content,
              styles.table_content__highlighted,
              styles.row_small
            )}
          >
            Complicado
          </div>
          <div className={classNames(styles.table_content, styles.row_big)}>
            Existe relación entre causa y efecto, pero requiere un análisis.
          </div>
          <div className={classNames(styles.table_content, styles.row_big)}>
            <ol>
              <li>1. Observar</li>
              <li className={styles.table_content__highlighted}>2. Analizar</li>
              <li>3. Responder</li>
            </ol>
          </div>
          <div className={classNames(styles.table_content, styles.row_medium)}>
            Buenas prácticas
          </div>
        </li>
        <li className={styles.table_item}>
          <div
            className={classNames(
              styles.table_content,
              styles.table_content__highlighted,
              styles.row_small
            )}
          >
            Complejo
          </div>
          <div className={classNames(styles.table_content, styles.row_big)}>
            Causa y efecto sólo se pueden trazar a posteriori. No hay respuestas
            correctas a priori.
          </div>
          <div className={classNames(styles.table_content, styles.row_big)}>
            {" "}
            <ol>
              <li>1. Sondear</li>
              <li className={styles.table_content__highlighted}>2. Observar</li>
              <li>3. Responder</li>
            </ol>
          </div>
          <div className={classNames(styles.table_content, styles.row_medium)}>
            Prácticas emergentes
          </div>
        </li>
        <li className={styles.table_item}>
          <div
            className={classNames(
              styles.table_content,
              styles.table_content__highlighted,
              styles.row_small
            )}
          >
            Caótico
          </div>
          <div className={classNames(styles.table_content, styles.row_big)}>
            Demasiado confuso como para esperar a una respuesta basada en el
            conocimiento.
          </div>
          <div className={classNames(styles.table_content, styles.row_big)}>
            <ol>
              <li>1. Actuar</li>
              <li className={styles.table_content__highlighted}>2. Observar</li>
              <li>3. Responder</li>
            </ol>
          </div>
          <div className={classNames(styles.table_content, styles.row_medium)}>
            Nuevas prácticas
          </div>
        </li>
      </ul>
    </section>
  );
};
