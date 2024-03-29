import React from "react";

import { classNames } from "../../utilities/classnames";
import container from "../Layout/Container.module.scss";
import footer from "../Layout/Footer.module.scss";
import collection from "./Collection.module.scss";
import { DownlandLink } from "./DownlandLink/DownlandLink";
import header from "./Header.module.scss";
import home from "./home.module.scss";
import summary from "./Summary.module.scss";
import summaryList from "./SummaryList.module.scss";

const styles = {
  ...home,
  ...summaryList,
  ...summary,
  ...container,
  ...collection,
  ...footer,
  ...header,
};

export const Home: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <img
          className={styles.logo}
          src="/logo-bikoinsights.svg"
          alt="Logo de Jakala BikoInsights"
        />

        <nav>
          <ul className={styles.navMenu}>
            <li>
              <a href="#sumario" className={styles.navMenu_Item}>
                Sumario
                <svg role="img" aria-hidden="true">
                  <use xlinkHref={"/sprite.svg#arrow-down"} />
                </svg>
              </a>
            </li>

            <li>
              <a href="#ediciones-anteriores" className={styles.navMenu_Item}>
                Ediciones anteriores
                <svg role="img" aria-hidden="true">
                  <use xlinkHref={"/sprite.svg#arrow-down"} />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="introduccion" className={styles.introductionSection}>
          <div className={styles.hero}>
            <div className={styles.hero_content}>
              <h1 className={styles.pageTitle}>
                Entre la{" "}
                <span className={styles.highlightedText}>esperanza</span> y el{" "}
                <span className={styles.highlightedText}>aburrimiento</span>{" "}
                tecnológico
              </h1>
              <div className={styles.insight_info}>
                <span className={styles.insight_number}>#06</span>
                <div className={styles.insight_title}>
                  <h2 className={classNames(styles.highlightedText, "mb-l")}>
                    BikoInsights
                  </h2>
                  <p>Tendencias digitales para un mundo en constante cambio.</p>
                </div>
              </div>

              <a
                href="https://www.biko2.com/insights/BIKO-INSIGHTS-6-2023.pdf"
                className={classNames(
                  styles.insight_download,
                  "mb-mobile-xl",
                  "mb-3xl"
                )}
                target="_blank"
              >
                Descargar BikoInsights #6
                <img alt="" aria-hidden="true" src="/icons/cta-download.svg" />
              </a>

              <p className={styles.caption}>
                <img
                  className="mr-s"
                  src="/icons/bullet-red.svg"
                  alt=""
                  aria-hidden="true"
                />
                ¿Quieres una edición impresa de BikoInsigts #6?, envíanos un
                <a
                  className={classNames(styles.link, "mr-xxs", "ml-xxs")}
                  href="mailto:insightsmag@biko2.com"
                >
                  email
                </a>
                y háznoslo saber.
              </p>

              <div aria-hidden="true" className={styles.scrollPage}>
                <p>
                  Scroll
                  <br /> page
                </p>
                <img alt="" aria-hidden="true" src="/icons/scroll-arrow.svg" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>

        <section id="sumario" className={styles.summary}>
          <img
            className={classNames(
              styles.hexagon,
              styles.hexagon__top_left,
              "mb-xl"
            )}
            src="/icons/white-hexagon.svg"
            alt=""
            aria-hidden="true"
          />
          <p className={classNames(styles.summaryIntro, "reveal-content")}>
            Ya está disponible la{" "}
            <span className={styles.highlightedText}>sexta edición</span> de{" "}
            <span className={styles.highlightedText}>BikoInsights</span>, el
            documento que contiene nuestra visión sobre lo que se está moviendo
            (y sobre lo que creemos que se moverá) en el entorno digital. En
            cada entrega tratamos distintos temas relacionados con tecnología,
            software, experimentación digital...
          </p>
          <img
            className={classNames(
              styles.hexagon,
              styles.hexagon__top_right,
              "mb-2xl",
              "mb-desktop-3xl"
            )}
            src="/icons/red-hexagon.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className={styles.summaryImage}
            src="/images/img-sumario-bikoinsights6.jpg"
            alt=""
            aria-hidden="true"
          />
          <h2 className={classNames(styles.summaryTitle, "reveal-content")}>
            Sumario
          </h2>

          <p className={classNames(styles.summaryContent, "reveal-content")}>
            En esta edición nos movemos entre la esperanza y el aburrimiento
            tecnológico. Es posible que empecemos a cansarnos de las promesas
            incumplidas pero nos negamos a tirar la toalla, nuestro nuevo
            informe aporta algunas claves y respuestas para recuperar el
            entusiasmo por el Internet que vimos nacer.
          </p>
          <div className={styles.summaryListWrapper}>
            <img
              className={classNames(
                styles.hexagon,
                styles.hexagon__bottom_left
              )}
              src="/icons/red-hexagon.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              className={classNames(
                styles.hexagon,
                styles.hexagon__bottom_right
              )}
              src="/icons/white-hexagon.svg"
              alt=""
              aria-hidden="true"
            />
            <ul className={`${styles.summaryList} reveal-content`}>
              <li className={styles.summaryList_Box}>
                <a className={styles.summaryList_Link} href="/editorial">
                  <h3 className={styles.summaryList_Title}>Editorial</h3>
                  <svg
                    style={{ width: 44, height: 44 }}
                    role="img"
                    aria-label="Lee la editorial del 6 Insights'"
                  >
                    <use xlinkHref={"/sprite.svg#jakala-arrow"} />
                  </svg>
                </a>
              </li>
              <li className={styles.summaryList_Box}>
                <div>
                  <h3 className={styles.summaryList_Title}>
                    Paren las redes, que yo me bajo
                  </h3>
                  <p className={styles.summaryList_Description}>
                    Devolvamos las redes a su esencia para hacerlas mejores.
                  </p>
                </div>
              </li>
              <li className={styles.summaryList_Box}>
                <a
                  className={styles.summaryList_Link}
                  href="/mas-alla-del-ciberespacio"
                >
                  <div>
                    <h3 className={styles.summaryList_Title}>
                      Más allá del ciberespacio
                    </h3>
                    <p className={styles.summaryList_Description}>
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
              <li className={styles.summaryList_Box}>
                <a
                  className={styles.summaryList_Link}
                  href="/nostalgia-para-combatir-el-aburrimiento"
                >
                  <h3 className={styles.summaryList_Title}>
                    Nostalgia para combatir el aburrimiento
                  </h3>

                  <svg
                    style={{ width: 44, height: 44 }}
                    role="img"
                    aria-label="Lee el artículo 'Nostalgia para combatir el aburrimiento'"
                  >
                    <use xlinkHref={"/sprite.svg#jakala-arrow"} />
                  </svg>
                </a>
              </li>

              <li className={styles.summaryList_Box}>
                <a
                  className={styles.summaryList_Link}
                  href="/complejidad-evolucion-y-el-fin-del-ciclo-del-internet-de-los-pioneros"
                >
                  <div>
                    <h3 className={styles.summaryList_Title}>
                      Complejidad, evolución y el fin del ciclo del internet de
                      los pioneros.
                    </h3>
                    <p className={styles.summaryList_Description}>
                      En 2023, internet ya no es ese lugar de 25 años atrás,
                      sino un commodity de una complejidad extrema.
                    </p>
                  </div>
                  <svg
                    style={{ width: 44, height: 44 }}
                    role="img"
                    aria-label="Lee el artículo 'Nostalgia para combatir el aburrimiento'"
                  >
                    <use xlinkHref={"/sprite.svg#jakala-arrow"} />
                  </svg>
                </a>
              </li>

              <li className={styles.summaryList_Box}>
                <a
                  className={styles.summaryList_Link}
                  href="/automatizando-las-tareas-sucias-peligrosas-y-aburridas"
                >
                  <div>
                    <h3 className={styles.summaryList_Title}>
                      Automatizando las tareas sucias, peligrosas y aburridas
                    </h3>
                    <p className={styles.summaryList_Description}>
                      Cuestiones a considerar para que la automatización aumente
                      nuestra autonomía.
                    </p>
                  </div>
                  <svg
                    style={{ width: 44, height: 44 }}
                    role="img"
                    aria-label="Lee el artículo 'Nostalgia para combatir el aburrimiento'"
                  >
                    <use xlinkHref={"/sprite.svg#jakala-arrow"} />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.actionsWrapper}>
            <a
              href="https://www.biko2.com/insights/BIKO-INSIGHTS-6-2023.pdf"
              className={styles.insight_download}
              target="_blank"
            >
              Descargar BikoInsights #6
              <img alt="" aria-hidden="true" src="/icons/cta-download.svg" />
            </a>
          </div>
        </section>

        <section id="ediciones-anteriores" className={styles.collection}>
          <h2 className={styles.collection_title}>
            ¿Te perdiste algún <br /> BikoInsights?
          </h2>
          <p className={styles.collection_description}>
            No te preocupes, aquí tienes las ediciones anteriores:
          </p>

          <article className={styles.collection_item}>
            <img
              className={styles.item_image}
              src="/images/img-biko-insights-5.webp"
              alt="Captura del sumario del BikoInsights #5"
              width={735}
              height={518}
            />

            <div className={styles.item_title}>
              <h3 className={styles.item_titleContent}>
                BikoInsights #5 <span className={styles.item_date}>2022</span>
              </h3>

              <DownlandLink
                to="https://www.biko2.com/insights/BIKO-INSIGHTS-5-2022.pdf"
                edition={5}
              />
            </div>
            <ul>
              <li>
                <h4 className={styles.item_listTitle}>
                  La automatización paternalista
                </h4>
                <p className={styles.item_listDescription}>
                  Un artículo de Ujué Agudo y Karlos G. Liberal.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>
                  Entrevista a Luis Montero
                </h4>
                <p className={styles.item_listDescription}>
                  Una entrevista de Bikolabs Laboratorio de especulación en Biko
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>
                  NFT y criptomonedas. El Blockchain desembarca en el mundo del
                  arte.
                </h4>
                <p className={styles.item_listDescription}>
                  Un artículo de Diego Cenzano.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>
                  Una empresa que crea escuela
                </h4>
                <p className={styles.item_listDescription}>
                  Un artículo de Aritz Suescun y Pablo Albizu.
                </p>
              </li>
            </ul>
          </article>
          <article className={styles.collection_item}>
            <img
              className={styles.item_image}
              src="/images/img-biko-insights-4.webp"
              alt="Captura del sumario del BikoInsights #4"
              width={735}
              height={518}
            />
            <div className={styles.item_title}>
              <h3 className={styles.item_titleContent}>
                BikoInsights #4 <span className={styles.item_date}>2021</span>
              </h3>

              <DownlandLink
                to="https://www.biko2.com/insights/BIKO-INSIGHTS-4-2021.pdf"
                edition={4}
              />
            </div>
            <ul>
              <li>
                <h4 className={styles.item_listTitle}>
                  La gestión de contenidos en la era Jamstack
                </h4>
                <p className={styles.item_listDescription}>
                  El reto de Biko de integrar un CMS como Drupal en
                  arquitecturas Jamstack.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>
                  ¿Hacia la singularidad o hacia un nuevo invierno en la IA?
                </h4>
                <p className={styles.item_listDescription}>
                  Una entrevista de Radio3.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>
                  Claves para hacer frente a la desinformación
                </h4>
                <p className={styles.item_listDescription}>
                  El mayor peligro somos nosotros mismos.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>Sociocracia 3.0</h4>
                <p className={styles.item_listDescription}>
                  Un año de recorrido en Biko.
                </p>
              </li>
            </ul>
          </article>
          <article className={styles.collection_item}>
            <img
              className={styles.item_image}
              src="/images/img-biko-insights-3.webp"
              alt="Captura del sumario del BikoInsights #3"
              width={735}
              height={518}
            />
            <div className={styles.item_title}>
              <h3 className={styles.item_titleContent}>
                BikoInsights #3 <span className={styles.item_date}>2020</span>
              </h3>

              <DownlandLink
                to="https://www.biko2.com/insights/BIKO-INSIGHTS-3-2020.pdf"
                edition={3}
              />
            </div>
            <ul>
              <li>
                <h4 className={styles.item_listTitle}>
                  Gestión de contenidos moderna
                </h4>
                <p className={styles.item_listDescription}>
                  Un cambio de paradigma.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>Estrategia digital</h4>
                <p className={styles.item_listDescription}>
                  Qué podemos aprender de los museos.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>Open Space</h4>
                <p className={styles.item_listDescription}>
                  La autoorganización como motor del cambio.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>
                  Narrativa de la convivencia
                </h4>
                <p className={styles.item_listDescription}>
                  En las relaciones humano-inteligencia artificial.
                </p>
              </li>
            </ul>
          </article>
          <article className={styles.collection_item}>
            <img
              className={styles.item_image}
              src="/images/img-biko-insights-2.webp"
              alt="Captura del sumario del BikoInsights #2"
              width={735}
              height={518}
            />
            <div className={styles.item_title}>
              <h3 className={styles.item_titleContent}>
                BikoInsights #2 <span className={styles.item_date}>2019</span>
              </h3>

              <DownlandLink
                to="https://www.biko2.com/insights/BIKO-INSIGHTS-2-2019.pdf"
                edition={2}
              />
            </div>
            <ul>
              <li>
                <h4 className={styles.item_listTitle}>Movidos por el sonido</h4>
                <p className={styles.item_listDescription}>
                  Cuando las ondas sonoras construyen interfaces de usuario.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>
                  Narrativas metafóricas
                </h4>
                <p className={styles.item_listDescription}>
                  En el extrarradio de la palabra.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>Machine learning</h4>
                <p className={styles.item_listDescription}>
                  La responsabilidad de la predicción.
                </p>
              </li>
            </ul>
          </article>
          <article className={styles.collection_item}>
            <img
              className={styles.item_image}
              src="/images/img-biko-insights-1.webp"
              alt="Captura del sumario del BikoInsights #1"
              width={735}
              height={518}
            />
            <div className={styles.item_title}>
              <h3 className={styles.item_titleContent}>
                BikoInsights #1 <span className={styles.item_date}>2018</span>
              </h3>

              <DownlandLink
                to="https://www.biko2.com/insights/BIKO-INSIGHTS-1-2018.pdf"
                edition={1}
              />
            </div>
            <ul>
              <li>
                <h4 className={styles.item_listTitle}>React</h4>
                <p className={styles.item_listDescription}>
                  El desarrollo por componentes.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>Marketing automation</h4>
                <p className={styles.item_listDescription}>
                  Saber más para conocer mejor.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>Adopta un científico</h4>
                <p className={styles.item_listDescription}>
                  La metodología científica desde la perspectiva de negocio.
                </p>
              </li>
              <li>
                <h4 className={styles.item_listTitle}>Immersive Web</h4>
                <p className={styles.item_listDescription}>
                  Las interfaces mutan.
                </p>
              </li>
            </ul>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        <img src="/icons/jakala.svg" alt="Logo de Jakala" />
        <p className={styles.footerText}>
          BikoInsights es un documento sobre tendencias digitales elaborado por
          Jakala | Biko con carácter divulgativo.
        </p>
      </footer>
    </>
  );
};
