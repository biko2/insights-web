import React from "react";

import { Link } from "../Link";
import styles from "./EditorialList.module.scss";

export const EditorialList: React.FC = () => {
  return (
    <ul className={styles.itemList__darkMode}>
      <li>
        - Así, reinventamos las redes sociales y nos creamos un metaverso que a
        los más viejos del lugar nos arroja un tufillo a lo _Second Life_ (Diego
        Cenzano escribe sobre ello).
      </li>
      <li>
        - Nos aceleramos y dejamos de imaginar el futuro que queríamos construir
        cuando comenzamos en esto{" "}
        <Link href="/mas-alla-del-ciberespacio">
          (Karlos g. Liberal y Ujué Agudo hablan de ello)
        </Link>
      </li>
      <li>
        - Empezamos a creer que tiempos pasados fueron mejores y eso nos lleva a
        ilusionarnos con el presente a través de nuestro gusto por el ayer y
        nuestra tendencia retromaniaca{" "}
        <Link href="/nostalgia-para-combatir-el-aburrimiento">
          (Carlos Jiménez lo cuenta).
        </Link>
      </li>
      <li>
        - Quizás no nos damos cuenta de que el internet ya no es ese espacio de
        oportunidad para pioneros, sino algo tan complejo que resulta frustrante
        hincarle el diente{" "}
        <Link href="/complejidad-evolucion-y-el-fin-del-ciclo-del-internet-de-los-pioneros">
          (Aritz Suescun lo explica);
        </Link>
      </li>

      <li>
        - O perdemos esa perspectiva que nos impulsó a apostar por un futuro
        cada vez más tecnológico (Ujué Agudo y Karlos g. Liberal).
      </li>
    </ul>
  );
};
