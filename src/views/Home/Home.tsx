import React from 'react';

import logo from '../../../public/logo.svg';
import container from '../components/container.module.scss';
import styles from './home.module.scss';

export const Home: React.FC = () => {
  return (
    <>
      <section className={styles.introSection}>
        <section className={styles.heroContainer}>
          <div className={container.container}>
            <div className={styles.heroWrapper}>
              <header className={styles.header}>
                <ul className={styles.headerItems}>
                  <li>Sumario</li>
                  <li>Ediciones anteriores</li>
                </ul>
              </header>
              <div className={styles.heroContent}>
                <p className={styles.heroLead}>
                  Entre la <span className={styles.highlight}>esperanza</span> y
                  el <span className={styles.highlight}>aburrimiento</span>{" "}
                  tecnológico
                </p>
                <div className={styles.flexbox}>
                  <span className={styles.insightNumber}>#06</span>
                  <div className={styles.insight}>
                    <p className={styles.highlight}>BikoInsights</p>
                    <p>
                      Tendencias digitales para un mundo en constante cambio.
                    </p>
                  </div>
                </div>
                <button className={styles.callToAction}>
                  Descargar BikoInsights #6
                </button>
                <p className={styles.detail}>
                  ¿Quieres una edición impresa de BikoInsigts #6?, envíanos un
                  email y háznoslo saber.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.summary}>
          <div className={container.container}>
            <div className={styles.summaryWrapper}>
              <p className={styles.summaryFirstParagraph}>
                Ya está disponible la{" "}
                <span className={styles.highlight}>sexta edición</span> de
                <span className={styles.highlight}>BikoInsights</span>, el
                documento que contiene nuestra visión sobre lo que se está
                moviendo (y sobre lo que creemos que se moverá) en el entorno
                digital. En cada entrega tratamos distintos temas relacionados
                con tecnología, software, experimentación digital...
              </p>
            </div>

            <h3 className={styles.summaryTitle}>Sumario</h3>

            <p className={styles.summarySecondParagraph}>
              En esta edición nos movemos entre la esperanza y el aburrimiento
              tecnológico. Es posible que empecemos a cansarnos de las promesas
              incumplidas pero nos negamos a tirar la toalla. Es hora de darle
              la vuelta al aburrimiento en Internet.
            </p>

            <div className={styles.listWrapper}>
              <ul className={styles.list}>
                <li className={styles.listBox}>
                  <h4 className={styles.listTitle}>Editorial</h4>
                </li>
                <li className={styles.listBox}>
                  <h4 className={styles.listTitle}>
                    Paren las redes, que yo me bajo
                  </h4>
                  <p className={styles.listDescription}>
                    Devolvamos las redes a su esencia para hacerlas mejores.
                  </p>
                </li>
                <li className={styles.listBox}>
                  <h4 className={styles.listTitle}>
                    Más allá del ciberespacio
                  </h4>
                  <p className={styles.listDescription}>
                    Un repaso de la cultura digital para poder ampliar los
                    horizontes o crearlos nuevos.
                  </p>
                </li>
                <li className={styles.listBox}>
                  <h4 className={styles.listTitle}>
                    Nostalgia para combatir el aburrimiento
                  </h4>
                </li>
                <li className={styles.listBox}>
                  <h4 className={styles.listTitle}>
                    Complejidad, evolución y el fin del ciclo del internet de
                    los pioneros
                  </h4>
                  <p className={styles.listDescription}>
                    En 2023, internet ya no es ese lugar de 25 años atrás, sino
                    un commodity de una complejidad extrema.
                  </p>
                </li>
                <li className={styles.listBox}>
                  <h4 className={styles.listTitle}>
                    Automatizando las tareas sucias, peligrosas y aburridas
                  </h4>
                  <p className={styles.listDescription}>
                    Cuestiones a considerar para que la automatización aumente
                    nuestra autonomía.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className={container.container}>
          <h3 className={styles.collectionTitle}>
            ¿Te perdiste algún BikoInsights?
          </h3>
          <p className={styles.collectionDescription}>
            No te preocupes, aquí tienes las ediciones anteriores:
          </p>
        </div>
      </section>
    </>
  );
};
