import React from 'react';

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

            <div className={styles.summaryBackgroundWrapper}>
              <img
                className={styles.summaryImage}
                src="../../../public/images/img-sumario-bikoinsights6.jpg"
              />
              <h3 className={styles.summaryTitle}>Sumario</h3>

              <p className={styles.summarySecondParagraph}>
                En esta edición nos movemos entre la esperanza y el aburrimiento
                tecnológico. Es posible que empecemos a cansarnos de las
                promesas incumplidas pero nos negamos a tirar la toalla. Es hora
                de darle la vuelta al aburrimiento en Internet.
              </p>
            </div>

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
          <ul className={styles.collectionWrapper}>
            <li>
              <img
                className={styles.collectionItemImage}
                src="../../../public/images/img-biko-insights-3.jpg"
              />
              <p className={styles.collectionItemTitle}>
                BikoInsights #5{" "}
                <span className={styles.collectionDate}>2022</span>
              </p>
              <ul>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    La automatización paternalista
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Un artículo de Ujué Agudo y Karlos G. Liberal.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Entrevista a Luis Montero
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Una entrevista de Bikolabs Laboratorio de especulación en
                    Biko
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    NFT y criptomonedas. El Blockchain desembarca en el mundo
                    del arte.
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Un artículo de Diego Cenzano.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Una empresa que crea escuela
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Un artículo de Aritz Suescun y Pablo Albizu.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <img
                className={styles.collectionItemImage}
                src="../../../public/images/img-biko-insights-4.jpg"
              />
              <p className={styles.collectionItemTitle}>
                BikoInsights #4{" "}
                <span className={styles.collectionDate}>2021</span>
              </p>
              <ul>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    La gestión de contenidos en la era Jamstack
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    El reto de Biko de integrar un CMS como Drupal en
                    arquitecturas Jamstack.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    ¿Hacia la singularidad o hacia un nuevo invierno en la IA?
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Una entrevista de Radio3.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Claves para hacer frente a la desinformación
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    El mayor peligro somos nosotros mismos.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Sociocracia 3.0
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Un año de recorrido en Biko.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <img
                className={styles.collectionItemImage}
                src="../../../public/images/img-biko-insights-3.jpg"
              />
              <p className={styles.collectionItemTitle}>
                BikoInsights #3{" "}
                <span className={styles.collectionDate}>2020</span>
              </p>
              <ul>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Gestión de contenidos moderna
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Un cambio de paradigma.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Estrategia digital
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Qué podemos aprender de los museos.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>Open Space</h4>
                  <p className={styles.collectionItemListDescription}>
                    La autoorganización como motor del cambio.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Narrativa de la convivencia
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    En las relaciones humano-inteligencia artificial.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <img
                className={styles.collectionItemImage}
                src="../../../public/images/img-biko-insights-2.jpg"
              />
              <p className={styles.collectionItemTitle}>
                BikoInsights #2{" "}
                <span className={styles.collectionDate}>2019</span>
              </p>
              <ul>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Movidos por el sonido
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Cuando las ondas sonoras construyen interfaces de usuario.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Narrativas metafóricas
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    En el extrarradio de la palabra.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Machine learning
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    La responsabilidad de la predicción.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <img
                className={styles.collectionItemImage}
                src="../../../public/images/img-biko-insights-1.jpg"
              />
              <p className={styles.collectionItemTitle}>
                BikoInsights #1{" "}
                <span className={styles.collectionDate}>2018</span>
              </p>
              <ul>
                <li>
                  <h4 className={styles.collectionItemListTitle}>React</h4>
                  <p className={styles.collectionItemListDescription}>
                    El desarrollo por componentes.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Marketing automation
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Saber más para conocer mejor.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Adopta un científico
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    La metodología científica desde la perspectiva de negocio.
                  </p>
                </li>
                <li>
                  <h4 className={styles.collectionItemListTitle}>
                    Immersive Web
                  </h4>
                  <p className={styles.collectionItemListDescription}>
                    Las interfaces mutan.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={container.container}>
          <p className={styles.footerText}>
            BikoInsights es un documento sobre tendencias digitales elaborado
            por Jakala | Biko con carácter divulgativo.
          </p>
        </div>
      </footer>
    </>
  );
};
