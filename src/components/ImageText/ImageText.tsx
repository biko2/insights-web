import React from "react";

import { Link } from "../Link";
import styles from "./ImageText.module.scss";

export const ImageText: React.FC = () => {
  return (
    <>
      <article className={styles.imageText}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="/images/automatizando-las-tareas/art-uju-1.webp"
            alt="Foto con con frase ¿como saber si un algoritmo es de confianza? y un montón de muñecos cabizbajos"
          ></img>
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Riscanvi</h3>
          <div>
            <p>Muestra de ello es la siguiente story:</p>
            <Link href="https://riscanvi.bikolabs.io/">
              https://riscanvi.bikolabs.io/
            </Link>
          </div>
          <p>
            Esta pequeña narrativa visual muestra lo complejo de afirmar que un
            algoritmo es justo. La story utiliza el caso del algoritmo RisCanvi
            para explicar de forma sencilla algunas de las medidas más
            habituales a la hora de cuantificar el acierto de un algoritmo: la
            medida de sensibilidad, la de especificidad, la de exactitud o
            accuracy, y la del valor predictivo. Todas ellas son cruciales,
            puesto que, si solo nos centramos en alguna de ellas, nuestra
            lectura sobre la capacidad y poder predictivo de un sistema
            automatizado probablemente sea errónea.
          </p>
          <p>
            Porque si nos dicen, por ejemplo, que el algoritmo RisCanvi cuenta
            con una sensibilidad de un 77%, en realidad, ¿qué significa ese
            dato? ¿Implica que el algoritmo funciona? ¿Aunque su valor
            predictivo positivo sea del 18%?
          </p>
        </div>
      </article>
      <article className={styles.imageText}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="/images/automatizando-las-tareas/art-uju-2.webp"
            alt="Fotograma de la pelicula Pretty Woman"
          ></img>
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>ChatGPT</h3>
          <p>
            A veces una pequeña anécdota es la semilla de una historia mucho más
            relevante y más profunda... aunque pueda ser más divertido, al menos
            temporalmente, enfocarse solo en la anécdota Así nació un nuevo
            formato narrativo en Bikolabs, la microstory, en este caso para
            explicar cómo las personas estábamos haciendo un uso inadecuado de
            ChatGPT.
          </p>
          <p>
            Con el lanzamiento de ChatGPT, esta herramienta generativa comenzó a
            usarse en ocasiones como si fuera un buscador, esto es, esperando
            que, para dar una respuesta, el algoritmo recorriera los contenidos
            sobre los que fue entrenado y así descubriera la respuesta correcta.
            Sin embargo, ChatGPT es un generador, no un buscador, lo que puede
            derivar en errores e incumplimiento de expectativas.
          </p>
          <div>
            <p>Esta fue la base de la microstory de Pretty Woman:</p>
            <Link href="https://www.bikolabs.io/microstory/pretty-woman">
              https://www.bikolabs.io/microstory/pretty-woman
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
