import { useEffect, useRef, useState } from "react";
import "./App.css";
import Logro from "./Components/Logro/Logro";

function App() {
    const audioRef = useRef(null);

    const logrosMadera = [
        "monster-hunter",
        "diana",
        "francocazadores",
        "dulces-sueños",
        "ligero-cual-conejo",
        "menudo-oferton",
        "tortolitos",
        "brillante-idea",
        "un-asunto-escamoso",
        "mejores-amigos-para-siempre",
        "crecen-tan-rapido",
    ];

    const logrosPiedra = [
        "la-edad-de-piedra",
        "banbzzzai",
        "mejorando-herramientas",
        "en-el-blanco",
        "exilio-voluntario",
        "abelante-esta-es-tu-casa",
        "cancion-de-cumpleaños",
        "la-cabra-tira-al-oceano",
        "hay-un-amigo-en-mi",
    ];

    const logrosCobre = [
        "desarmadillo",
        "es-un-pajaro",
        "desafio-aceptado",
        "a-tomar-viento",
        "bajo-llave",
        "brillo-a-la-vista",
        "quien-necesita-cohetes",
        "supresor-de-tension",
        "huele-interesante",
        "pequeños-olfateos",
        "sembrando-el-pasado",
    ];

    const logrosHierro = [
        "la-edad-de-hierro",
        "no-es-hierronico",
        "vistete",
        "hoy-no-gracias",
        "la-cosa-esta-que-arde",
        "cuevas-y-acantilados",
        "forjando-una-nueva-imagen",
        "magnetita-llevame-a-casita",
        "fabricadores-fabricando-fabricadores",
        "se-propaga",
        "post-mortem",
        "esto-deberia-estar-en-un-museo",
        "restauracion-meticulosa",
        "la-vieja-betsy",
        "heroe-de-la-aldea",
        "el-saqueador-saqueado",
        "sicario",
        "como-nuevo",
        "discrecion100",
        "pesca-tactica",
        "el-depredador-mas-adorable",
        "el-poder-curativo-de-la-amistad",
        "chas",
        "renacuajo-al-cubo",
        "jugada-maestra",
        "sobremazazo",
        "la-caja-de-pandora",
        "dar-cera",
        "pulir-cera",
    ];

    const logrosOro = [
        "plus-ultra",
        "zombiologo",
        "es-un-globo",
        "mantente-hidratado",
        "los-tres-mosqueteros",
        "nuestros-poderes-combinados",
        "devolver-al-remitente",
        "que-tiempos-aquellos",
        "cerdos-a-la-guerra",
        "mi-tesoro",
        "esta-barca-tiene-patas",
        "calidos-destinos-turisticos",
        "como-en-casa",
        "una-terrible-fortaleza",
        "jugando-con-fuego",
        "destileria-local",
        "el-conocimiento-es-poder",
    ];

    const logrosDiamante = [
        "diamantes",
        "cubreme-de-diamantes",
        "mente-fria",
        "el-dulce-cantar",
        "vendedor-estelar",
        "falsa-alianza",
        "quien-esta-cortando-cebollas",
        "no-siete-vidas-exactamente",
        "por-una-cabeza",
        "dr-witherstein",
        "hagase-la-luz",
        "faroneitor",
        "agujero-negro",
    ];

    const logrosNetherita = [
        "aprendiz-de-mago",
        "muy-muy-aterrador",
        "es-un-avion",
        "malos-habitos",
        "escondido-en-las-profundidades",
        "cubreme-de-netherita",
        "libera-el-end",
        "el-end-de-nuevo",
        "la-nueva-generacion",
        "trasplantador-de-corazones",
        "huida-conseguida",
        "la-ciudad-al-final-del-juego",
        "buenas-vistas-desde-lo-alto",
        "hasta-el-infinito-y-mas-alla",
        "que-mal-aliento",
        "ojo-espia",
        "dos-pajaros-de-un-tiro",
        "forjando-con-estilo",
    ];

    const logrosGenerales = [
        "sin-piedad",
        "hora-de-aventuras",
        "de-dos-en-dos",
        "lider-de-la-manada",
        "un-gatologo-completo",
        "una-dieta-equilibrada",
        "as-de-ases",
        "mezcla-explosiva",
        "como-llegamos-hasta-aqui",
    ];

    const [totalLogrosActivos, setTotalLogrosActivos] = useState(() => {
        const guardados = localStorage.getItem("logrosActivos");
        return guardados ? JSON.parse(guardados) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "logrosActivos",
            JSON.stringify(totalLogrosActivos)
        );
    }, [totalLogrosActivos]);

    const totalLogros =
        logrosMadera.length +
        logrosPiedra.length +
        logrosCobre.length +
        logrosHierro.length +
        logrosOro.length +
        logrosDiamante.length +
        logrosNetherita.length +
        logrosGenerales.length;

    const porcentajeLogros = (
        (totalLogrosActivos.length / totalLogros) *
        100
    ).toFixed(1);

    const toggleLogro = (nombre) => {
        setTotalLogrosActivos((prev) =>
            prev.includes(nombre)
                ? prev.filter((l) => l !== nombre)
                : [...prev, nombre]
        );
    };

    const [totalLogrosDeshabilitado, setTotalLogrosDeshabilitado] =
        useState(false);

    return (
        <>
            <header>
                <h1>Minecraft Eras</h1>
            </header>

            <main>
                {totalLogrosDeshabilitado ? (
                    <section
                        className="totalLogros totalLogrosDeshabilitado"
                        onClick={() =>
                            setTotalLogrosDeshabilitado(
                                totalLogrosDeshabilitado ? false : true
                            )
                        }
                    ></section>
                ) : (
                    <section
                        className="totalLogros "
                        onClick={() =>
                            setTotalLogrosDeshabilitado(
                                totalLogrosDeshabilitado ? false : true
                            )
                        }
                    >
                        <p>Total logros Minecraft</p>
                        <div>
                            <p>{porcentajeLogros}%</p>
                            <div
                                id="percentageBar"
                                style={{ width: `${porcentajeLogros}%` }}
                            ></div>
                        </div>
                    </section>
                )}

                <section id="erasContainer">
                    <section id="eras">
                        {/* <h2>Edades de Minecraft</h2> */}
                        <section className="eraContainer">
                            <h3>Edad de la Madera</h3>
                            <section>
                                <section className="logrosContainer">
                                    {logrosMadera.map((logro) => (
                                        <Logro
                                            key={logro}
                                            logro={logro}
                                            activo={totalLogrosActivos.includes(
                                                logro
                                            )}
                                            onToggle={() => toggleLogro(logro)}
                                            audioRef={audioRef}
                                        />
                                    ))}
                                </section>
                                <section className="retosContainer">
                                    <article>
                                        <h4>reto 1</h4>
                                    </article>
                                </section>
                            </section>
                        </section>

                        <section className="eraContainer">
                            <h3>Edad de la Piedra</h3>
                            <section>
                                <section className="logrosContainer">
                                    {logrosPiedra.map((logro) => (
                                        <Logro
                                            audioRef={audioRef}
                                            key={logro}
                                            logro={logro}
                                            activo={totalLogrosActivos.includes(
                                                logro
                                            )}
                                            onToggle={() => toggleLogro(logro)}
                                        />
                                    ))}
                                </section>
                                <section className="retosContainer">
                                    <p>reto 1</p>
                                </section>
                            </section>
                        </section>

                        <section className="eraContainer">
                            <h3>Edad del Cobre</h3>
                            <section>
                                <section className="logrosContainer">
                                    {logrosCobre.map((logro) => (
                                        <Logro
                                            audioRef={audioRef}
                                            key={logro}
                                            logro={logro}
                                            activo={totalLogrosActivos.includes(
                                                logro
                                            )}
                                            onToggle={() => toggleLogro(logro)}
                                        />
                                    ))}
                                </section>
                                <section className="retosContainer">
                                    <p>reto 1</p>
                                </section>
                            </section>
                        </section>

                        <section className="eraContainer">
                            <h3>Edad del Hierro</h3>
                            <section>
                                <section className="logrosContainer">
                                    {logrosHierro.map((logro) => (
                                        <Logro
                                            audioRef={audioRef}
                                            key={logro}
                                            logro={logro}
                                            activo={totalLogrosActivos.includes(
                                                logro
                                            )}
                                            onToggle={() => toggleLogro(logro)}
                                        />
                                    ))}
                                </section>
                                <section className="retosContainer">
                                    <p>reto 1</p>
                                </section>
                            </section>
                        </section>

                        <section className="eraContainer">
                            <h3>Edad del Oro</h3>
                            <section>
                                <section className="logrosContainer">
                                    {logrosOro.map((logro) => (
                                        <Logro
                                            audioRef={audioRef}
                                            key={logro}
                                            logro={logro}
                                            activo={totalLogrosActivos.includes(
                                                logro
                                            )}
                                            onToggle={() => toggleLogro(logro)}
                                        />
                                    ))}
                                </section>
                                <section className="retosContainer">
                                    <p>reto 1</p>
                                </section>
                            </section>
                        </section>

                        <section className="eraContainer">
                            <h3>Edad del Diamante</h3>
                            <section>
                                <section className="logrosContainer">
                                    {logrosDiamante.map((logro) => (
                                        <Logro
                                            audioRef={audioRef}
                                            key={logro}
                                            logro={logro}
                                            activo={totalLogrosActivos.includes(
                                                logro
                                            )}
                                            onToggle={() => toggleLogro(logro)}
                                        />
                                    ))}
                                </section>
                                <section className="retosContainer">
                                    <p>reto 1</p>
                                </section>
                            </section>
                        </section>

                        <section className="eraContainer">
                            <h3>Edad de la Netherita</h3>
                            <section>
                                <section className="logrosContainer">
                                    {logrosNetherita.map((logro) => (
                                        <Logro
                                            audioRef={audioRef}
                                            key={logro}
                                            logro={logro}
                                            activo={totalLogrosActivos.includes(
                                                logro
                                            )}
                                            onToggle={() => toggleLogro(logro)}
                                        />
                                    ))}
                                </section>
                                <section className="retosContainer">
                                    <p>reto 1</p>
                                </section>
                            </section>
                        </section>
                    </section>

                    <section id="misionesGenerales">
                        <h2>Misiones generales</h2>
                        {logrosGenerales.map((logro) => (
                            <Logro
                                audioRef={audioRef}
                                key={logro}
                                logro={logro}
                                activo={totalLogrosActivos.includes(logro)}
                                onToggle={() => toggleLogro(logro)}
                            />
                        ))}
                    </section>
                </section>
            </main>

            <footer>
                <p>
                    © 2025 Minecraft Eras. All rights reserved. A web developed
                    by <a href="https://www.smanzano.dev/">smanzanodev</a>.
                </p>
            </footer>
        </>
    );
}

export default App;
