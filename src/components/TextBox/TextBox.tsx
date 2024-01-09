import React from "react";

import { classNames } from "../../utilities/classnames";
import styles from "./TextBox.module.scss";

export const TextBox: React.FC = () => {
  return (
    <section className={styles.textBox}>
      <h3 className={styles.textBox_title}>
        La utopía de las bibliotecas públicas
      </h3>
      <p className={styles.textBox_content}>
        Hablando de la biblioteca universal que hemos conseguido con la llegada
        de internet, me hace ilusión destacar un extracto de “El infinito en un
        junco: la invención de los libros del mundo antiguo”, en el que Irene
        Vallejo describe de esta forma tan bonita las bibliotecas públicas:
      </p>
      <p
        className={classNames(
          styles.textBox_content,
          styles.textBox_content__highlighted
        )}
      >
        En sus anaqueles aguardan juntos libros escritos en países enemigos,
        incluso en guerra unos con otros. Manuales de fotografía y de
        interpretación de los sueños. Ensayos que hablan de microbios o de
        galaxias. La autobiografía de un general al lado de las memorias de un
        desertor. La obra optimista de un autor incomprendido y la obra oscura
        de un autor de éxito. Los apuntes de una escritora viajera junto a los
        cinco tomos que necesita un escritor sedentario para contar con pelos y
        señales sus ensoñaciones. El libro impreso ayer y a su lado el que acaba
        de cumplir veinte siglos. Ahí no se conocen las fronteras temporales ni
        geográficas. Y, por fin, estamos todos invitados a entrar: extranjeros y
        locales, gente con gafas, con lentillas o con legañas, hombres que
        llevan moño o mujeres que llevan corbata. Eso se parece a una utopía.
      </p>
      <p
        className={classNames(
          styles.textBox_content,
          styles.textBox_content__highlighted
        )}
      >
        Eso se parece a una utopía.
      </p>
    </section>
  );
};
