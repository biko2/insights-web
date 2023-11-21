import React from 'react';

import containerStyles from './container.module.scss';
import styles from './home.module.scss';

export const Home: React.FC = () => {
  return (
    <>
      <section className={styles.introSection}>
        <section className={styles.heroContainer}>
          <div className={containerStyles.container}>
            <div className={styles.heroWrapper}>
              <header className={styles.header}>
                <img
                  className={styles.heroLogo}
                  src="/logo-bikoinsights.svg"
                  alt="Logo de Jakala BikoInsights"
                />

                <nav>
                  <ul className={styles.headerItems}>
                    <li>
                      <a href="#sumario" className={styles.headerItem}>
                        Sumario{" "}
                        <svg
                          style={{ width: 24, height: 24 }}
                          role="img"
                          aria-hidden="true"
                        >
                          <use xlinkHref={"/sprite.svg#arrow-down"} />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#ediciones-anteriores"
                        className={styles.headerItem}
                      >
                        Ediciones anteriores{" "}
                        <svg
                          style={{ width: 24, height: 24 }}
                          role="img"
                          aria-hidden="true"
                        >
                          <use xlinkHref={"/sprite.svg#arrow-down"} />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>

              <div className={styles.heroContent}>
                <h1 className={styles.heroLead}>
                  Entre la <span className={styles.highlight}>esperanza</span> y
                  el <span className={styles.highlight}>aburrimiento</span>{" "}
                  tecnológico
                </h1>
                <div className={styles.flexbox}>
                  <span className={styles.insightNumber}>#06</span>
                  <div className={styles.insight}>
                    <h2 className={styles.highlightHero}>BikoInsights</h2>
                    <p>
                      Tendencias digitales para un mundo en constante cambio.
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.biko2.com/insights/BIKO-INSIGHTS-6-2023.pdf"
                  className={styles.callToAction}
                  target="_blank"
                >
                  Descargar BikoInsights #6
                  <img
                    alt=""
                    aria-hidden="true"
                    src="/icons/cta-download.svg"
                  />
                </a>

                <p className={styles.detail}>
                  <img
                    className={styles.bulletpoint}
                    src="/icons/bullet-red.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  ¿Quieres una edición impresa de BikoInsigts #6?, envíanos un{" "}
                  <a
                    className={styles.link}
                    href="mailto:insightsmag@biko2.com"
                  >
                    email
                  </a>{" "}
                  y háznoslo saber.
                </p>

                <div aria-hidden="true" className={styles.scrollText}>
                  <p>
                    Scroll
                    <br /> page
                  </p>
                  <img
                    alt=""
                    aria-hidden="true"
                    src="/icons/scroll-arrow.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sumario" className={styles.summary}>
          <div className={containerStyles.container}>
            <img
              className={`${styles.hexagon} ${styles.firstHexagon}`}
              src="/icons/white-hexagon.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              className={`${styles.hexagon} ${styles.secondHexagon}`}
              src="/icons/red-hexagon.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              className={`${styles.hexagon} ${styles.thirdHexagon}`}
              src="/icons/red-hexagon.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              className={`${styles.hexagon} ${styles.fourthHexagon}`}
              src="/icons/white-hexagon.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              className={styles.summaryImage}
              src="/images/img-sumario-bikoinsights6.jpg"
              alt=""
              aria-hidden="true"
            />
            <div className={`${styles.summaryWrapper} ${styles.reveal} reveal`}>
              <p className={styles.summaryFirstParagraph}>
                Ya está disponible la{" "}
                <span className={styles.highlight}>sexta edición</span> de{" "}
                <span className={styles.highlight}>BikoInsights</span>, el
                documento que contiene nuestra visión sobre lo que se está
                moviendo (y sobre lo que creemos que se moverá) en el entorno
                digital. En cada entrega tratamos distintos temas relacionados
                con tecnología, software, experimentación digital...
              </p>
            </div>

            <div className={styles.summaryBackgroundWrapper}>
              <h2 className={`${styles.summaryTitle} ${styles.reveal} reveal`}>
                Sumario
              </h2>

              <p
                className={`${styles.summarySecondParagraph} ${styles.reveal} reveal`}
              >
                En esta edición nos movemos entre la esperanza y el aburrimiento
                tecnológico. Es posible que empecemos a cansarnos de las
                promesas incumplidas pero nos negamos a tirar la toalla, nuestro
                nuevo informe aporta algunas claves y respuestas para recuperar
                el entusiasmo por el Internet que vimos nacer.
              </p>
            </div>

            <div className={styles.listWrapper}>
              <ul className={`${styles.list} ${styles.reveal} reveal`}>
                <li className={styles.listBox}>
                  <a className={styles.listLink} href="/editorial">
                    <h3 className={styles.listTitle}>Editorial</h3>
                    <svg
                      style={{ width: 44, height: 44 }}
                      role="img"
                      aria-label="Lee la editorial del 6 Insights'"
                    >
                      <use xlinkHref={"/sprite.svg#jakala-arrow"} />
                    </svg>
                  </a>
                </li>
                <li className={styles.listBox}>
                  <a
                    className={styles.listLink}
                    href="/paren-las-redes-que-yo-me-bajo"
                  >
                    <div>
                      <h3 className={styles.listTitle}>
                        Paren las redes, que yo me bajo
                      </h3>
                      <p className={styles.listDescription}>
                        Devolvamos las redes a su esencia para hacerlas mejores.
                      </p>
                    </div>

                    <svg
                      style={{ width: 44, height: 44 }}
                      role="img"
                      aria-label="Lee el artículo 'Paren las redes, que yo me bajo'"
                    >
                      <use xlinkHref={"/sprite.svg#jakala-arrow"} />
                    </svg>
                  </a>
                </li>
                <li className={styles.listBox}>
                  <a
                    className={styles.listLink}
                    href="/mas-alla-del-ciberespacio"
                  >
                    <div>
                      <h3 className={styles.listTitle}>
                        Más allá del ciberespacio
                      </h3>
                      <p className={styles.listDescription}>
                        Un repaso de la cultura digital para poder ampliar los
                        horizontes o crearlos nuevos.
                      </p>
                    </div>

                    <svg
                      style={{ width: 44, height: 44 }}
                      role="img"
                      aria-label="Lee el artículo 'Paren las redes, que yo me bajo'"
                    >
                      <use xlinkHref={"/sprite.svg#jakala-arrow"} />
                    </svg>
                  </a>
                </li>
                <li className={styles.listBox}>
                  <h3 className={styles.listTitle}>
                    Nostalgia para combatir el aburrimiento
                  </h3>
                </li>
                <li className={styles.listBox}>
                  <h3 className={styles.listTitle}>
                    Complejidad, evolución y el fin del ciclo del internet de
                    los pioneros
                  </h3>
                  <p className={styles.listDescription}>
                    En 2023, internet ya no es ese lugar de 25 años atrás, sino
                    un commodity de una complejidad extrema.
                  </p>
                </li>
                <li className={styles.listBox}>
                  <h3 className={styles.listTitle}>
                    Automatizando las tareas sucias, peligrosas y aburridas
                  </h3>
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

      <section id="ediciones-anteriores">
        <div className={containerStyles.container}>
          <h2 className={styles.collectionTitle}>
            ¿Te perdiste algún <br /> BikoInsights?
          </h2>
          <p className={styles.collectionDescription}>
            No te preocupes, aquí tienes las ediciones anteriores:
          </p>
          <div className={styles.collectionWrapper}>
            <div>
              <img
                className={styles.collectionItemImage}
                src="/images/img-biko-insights-5.webp"
                alt="Captura del sumario del BikoInsights #5"
                width={735}
                height={518}
              />

              <div className={styles.collectionItemTitle}>
                <h3 className={styles.collectionItemTitleContent}>
                  BikoInsights #5{" "}
                  <span className={styles.collectionDate}>2022</span>
                </h3>

                <DownloadLink
                  to="https://www.biko2.com/insights/BIKO-INSIGHTS-5-2022.pdf"
                  edition={5}
                />
              </div>
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
            </div>
            <div>
              <img
                className={styles.collectionItemImage}
                src="/images/img-biko-insights-4.webp"
                alt="Captura del sumario del BikoInsights #4"
                width={735}
                height={518}
              />
              <div className={styles.collectionItemTitle}>
                <h3 className={styles.collectionItemTitleContent}>
                  BikoInsights #4{" "}
                  <span className={styles.collectionDate}>2021</span>
                </h3>

                <DownloadLink
                  to="https://www.biko2.com/insights/BIKO-INSIGHTS-4-2021.pdf"
                  edition={4}
                />
              </div>
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
            </div>
            <div>
              <img
                className={styles.collectionItemImage}
                src="/images/img-biko-insights-3.webp"
                alt="Captura del sumario del BikoInsights #3"
                width={735}
                height={518}
              />
              <div className={styles.collectionItemTitle}>
                <h3 className={styles.collectionItemTitleContent}>
                  BikoInsights #3{" "}
                  <span className={styles.collectionDate}>2020</span>
                </h3>

                <DownloadLink
                  to="https://www.biko2.com/insights/BIKO-INSIGHTS-3-2020.pdf"
                  edition={3}
                />
              </div>
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
            </div>
            <div>
              <img
                className={styles.collectionItemImage}
                src="/images/img-biko-insights-2.webp"
                alt="Captura del sumario del BikoInsights #2"
                width={735}
                height={518}
              />
              <div className={styles.collectionItemTitle}>
                <h3 className={styles.collectionItemTitleContent}>
                  BikoInsights #2{" "}
                  <span className={styles.collectionDate}>2019</span>
                </h3>

                <DownloadLink
                  to="https://www.biko2.com/insights/BIKO-INSIGHTS-2-2019.pdf"
                  edition={2}
                />
              </div>
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
            </div>
            <div>
              <img
                className={styles.collectionItemImage}
                src="/images/img-biko-insights-1.webp"
                alt="Captura del sumario del BikoInsights #1"
                width={735}
                height={518}
              />
              <div className={styles.collectionItemTitle}>
                <h3 className={styles.collectionItemTitleContent}>
                  BikoInsights #1{" "}
                  <span className={styles.collectionDate}>2018</span>
                </h3>

                <DownloadLink
                  to="https://www.biko2.com/insights/BIKO-INSIGHTS-1-2018.pdf"
                  edition={1}
                />
              </div>
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
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={containerStyles.container}>
          <div className={styles.footerWrapper}>
            <img src="/icons/jakala.svg" alt="Logo de Jakala" />
            <p className={styles.footerText}>
              BikoInsights es un documento sobre tendencias digitales elaborado
              por Jakala | Biko con carácter divulgativo.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

const DownloadLink: React.FC<{ to: string; edition: number }> = ({
  to,
  edition,
}) => (
  <a
    title={`Descarga el BikoInsights #${edition} (PDF)`}
    target="_blank"
    href={to}
    className={styles.download}
  >
    <svg
      style={{ width: 44, height: 44 }}
      role="img"
      aria-label={`Descarga el BikoInsights #${edition} (PDF)`}
    >
      <use xlinkHref={"/sprite.svg#download"} />
    </svg>
  </a>
);
