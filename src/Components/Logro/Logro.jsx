import { useState } from "react";
import "./Logro.css";

function Logro({ logro, activo, onToggle, audioRef }) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        const timer = setTimeout(() => setHovered(true), 700);
        window.hoverTimer = timer;
    };

    const handleMouseLeave = () => {
        clearTimeout(window.hoverTimer);
        setHovered(false);
    };

    const handleClick = () => {
        if (!activo) {
            // Si hay un sonido sonando, lo paramos
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }

            // Creamos y reproducimos el nuevo sonido
            const newAudio = new Audio("/logro.mp3");
            newAudio.volume = 0.7;
            newAudio.play().catch(() => {});
            audioRef.current = newAudio;
        }

        onToggle();
    };

    return (
        <article
            className={`logroComponent ${activo ? "activeLogro" : ""} ${
                hovered ? "hovered" : ""
            }`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={`/logros/${logro}.jpg`}
                alt={`imagen del logro ${logro}`}
            />
        </article>
    );
}

export default Logro;
