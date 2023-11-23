import { useState } from "react";

import styles from "./PlayAudio.module.scss";

interface Props {
  src: string;
}

export const PlayAudio: React.FC<Props> = ({ src }) => {
  const [playAudio, setPlayAudio] = useState(false);

  const handlePlayAudio = () => {
    setPlayAudio(true);
  };

  return (
    <>
      {!playAudio ? (
        <>
          <button className={styles.playAudio} onClick={handlePlayAudio}>
            Escuchar artículo
            <svg className="m-l-s" role="img" aria-hidden="true">
              <use xlinkHref={"/sprite.svg#speaker"} />
            </svg>
          </button>

          <button
            className={styles.playAudio__mobile}
            onClick={handlePlayAudio}
          >
            <svg role="img" aria-label="Escucha los articulos de la edición">
              <use xlinkHref={"/sprite.svg#download"} />
            </svg>
          </button>
        </>
      ) : (
        <audio className={styles.audioContainer} id="miAudio" controls>
          <source src={src} type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      )}
    </>
  );
};
