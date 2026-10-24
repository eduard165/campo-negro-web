import Image from "next/image";
import { Encabezado } from "@/componentes/estructura/encabezado/Encabezado";

const ruta = "/imagenes/nuevo/";

function TextoPrincipal({ titulo, frase, children }: { titulo: string; frase?: string; children: React.ReactNode }) {
  return <div className="texto-principal">
    <h2 className="titulo-condensado">{titulo}</h2>
    {frase && <p className="frase-caligrafica">{frase}</p>}
    <div className="contenido-seccion">{children}</div>
  </div>;
}

export function Inicio() {
  return <section id="inicio" className="inicio seccion">
    <Encabezado />
    <div className="inicio-foto" role="img" aria-label="Detalle de botella de mezcal Campo Negro" />
    <div className="inicio-sombra" />
    <div className="inicio-contenido">
      <h1 className="titulo-condensado">UNA HISTORIA QUE<br />PERMANECE...</h1>
      <p className="frase-caligrafica">Descúbrela junto<br />a nosotros</p>
      <div className="contenido-seccion">
        <h3>CAMPO NEGRO</h3>
        <p>Nacido en el corazón de Oaxaca y llevado por una historia que cruza generaciones, esta bebida ancestral no es solo un mezcal más.</p>
        <p>Este proyecto nace con la intención de acompañarte en la mesa o simplemente estar dentro de una conversación, pero sobre todo, para estar presente en esos momentos que merecen ser recordados.</p>
      </div>
      <a href="#legado" className="boton-descubrir">DESCUBRE LA HISTORIA <span aria-hidden="true">↓</span></a>
    </div>
  </section>;
}

export function Legado() {
  return <section id="legado" className="seccion legado fondo-cal">
    <div className="columna-texto">
      <TextoPrincipal titulo={"DE UNA MEMORIA, NACE\nUN LEGADO..."} frase="Hay historias que no terminan, se transforman">
        <h3>CAMPO NEGRO NACE COMO UN HOMENAJE</h3>
        <p>Al recuerdo de una persona que dejó una huella profunda: Eloy Ponce, tío y figura entrañable de la familia.</p>
        <p>“Compa Negro” era el apodo con el que Eloy llamaba a quien hoy da vida a este proyecto. Mismo que con el paso de los años, se ha transformado en un memorable recuerdo hasta convertirse en Campo Negro.</p>
        <p>Conservando la esencia y el significado que hay detrás del nombre, esa remembranza ha evolucionado, pues es solamente una manera de mantener viva esa parte de nuestra historia y convertirla en algo que pueda compartirse.</p>
      </TextoPrincipal>
    </div>
    <div className="legado-ilustracion"><Image src={ruta+"ilustracion-legado.png"} alt="Ilustraciones de elementos que conforman el legado de Campo Negro" width={760} height={740} /></div>
  </section>;
}

export function Identidad() {
  return <section id="identidad" className="seccion identidad">
    <div className="identidad-foto" role="img" aria-label="Montañas y cultivo de agave en el paisaje de Oaxaca" />
    <div className="identidad-velo" />
    <div className="columna-texto identidad-texto">
      <TextoPrincipal titulo={"DOS TIERRAS,\nUNA HISTORIA..."} frase="Oaxaca es el origen de nuestro mezcal">
        <h3>VERACRUZ ES PARTE DE NUESTRA IDENTIDAD</h3>
        <p>Campo Negro nace en Oaxaca, tierra donde el agave, el tiempo y el oficio se convierten en mezcal. Sin embargo, nuestra historia también tiene raíces Veracruzanas... En Tantoyuca, encontramos una tierra ligada a nuestros antepasados, a su cultura y a sus tradiciones.</p>
        <p>Dos tierras diferentes forman parte de una misma historia. Una historia que comienza con la familia, continúa a través de las generaciones y encuentra en el mezcal, una manera de ser recordado.</p>
      </TextoPrincipal>
    </div>
  </section>;
}

export function Origen() {
  return <section id="origen" className="seccion origen fondo-cal">
    <div className="origen-panel">
      <div className="origen-foto" role="img" aria-label="Primer plano de pencas de agave" />
      <div className="origen-titular"><h2 className="titulo-condensado">EL<br />MEZCAL</h2><p className="frase-caligrafica">Nacido en una<br />tierra mezcalera</p></div>
      <span className="origen-lugar">Ejutla de Crespo, Oaxaca<br />Oax., México</span>
    </div>
    <div className="origen-contenido">
      <span className="ornamento">✧</span>
      <div className="contenido-seccion">
        <h3>TRADICIÓN QUE EVOLUCIONA CON EL TIEMPO</h3>
        <p>El mezcal es una bebida que nace de la tierra, del agave y del conocimiento transmitido de generación en generación.</p>
        <p>Campo Negro honra ese origen a través de un proceso que requiere tiempo, paciencia y oficio. Desde el cocimiento del agave hasta su molienda y destilación, cada etapa forma parte de una tradición que ha permanecido viva durante siglos.</p>
        <p>El resultado es un mezcal de carácter auténtico, con notas herbales equilibradas por una presencia ahumada que invita a descubrirlo lentamente.</p>
      </div>
    </div>
  </section>;
}

export function Ritual() {
  return <section id="ritual" className="seccion ritual fondo-cal">
    <div className="ritual-foto" role="img" aria-label="Mezcal compartido en una mesa entre familiares y amigos" />
    <div className="ritual-contenido">
      <TextoPrincipal titulo={"EL\nRITUAL"} frase="También sucede alrededor de la mesa">
        <h3>MÁS QUE UNA BEBIDA</h3>
        <p>Campo Negro tiene la intención de acompañarte...</p>
        <p>Una comida en familia.<br />Una conversación entre amigos.<br />Un brindis inesperado.<br />Una noche que nadie tenía planeada.</p>
        <p>Porque el mezcal no solamente se bebe.<br />Se comparte, se conversa, se recuerda.</p>
      </TextoPrincipal>
      <div className="ritual-decoracion" aria-hidden="true">✺</div>
    </div>
  </section>;
}

export function Manifiesto() {
  return <section className="seccion manifiesto" aria-label="Manifiesto Campo Negro">
    <div className="manifiesto-interior">
      <p>MEZCAL DE ORIGEN OAXAQUEÑO QUE LLEVA POR INTENCIÓN ACOMPAÑAR LA MESA, LA CONVERSACIÓN Y LOS MOMENTOS QUE MERECEN SER RECORDADOS.</p>
      <p>CON EL TIEMPO, LA MARCA BUSCA INCORPORAR DISTINTAS EXPRESIONES CULTURALES DE VERACRUZ Y, PARTICULARMENTE, DE TANTOYUCA: FUSIONES, MATERIALES, SABORES Y TRADICIONES QUE FORMAN PARTE DE UNA IDENTIDAD FAMILIAR.</p>
      <p>PEQUEÑOS DETALLES QUE PERMITAN CONTAR NUEVAS HISTORIAS SIN PERDER DE VISTA EL ORIGEN. PORQUE HONRAR UNA TRADICIÓN TAMBIÉN SIGNIFICA ENCONTRAR NUEVAS MANERAS DE COMPARTIRLA.</p>
    </div>
  </section>;
}

const etapas = [
  { nombre: "Cocimiento", imagen: "proceso-horno.png", alt: "Ilustración de horno de pozo" },
  { nombre: "Molienda", imagen: "proceso-molienda.png", alt: "Ilustración de tahona tirada por caballo" },
  { nombre: "Destilación", imagen: "proceso-destilacion.png", alt: "Ilustración de alambique de cobre" },
];
export function Proceso() {
  return <section id="proceso" className="seccion proceso fondo-cal">
    <div className="proceso-encabezado"><h2 className="titulo-condensado">EL PROCESO</h2><p className="frase-caligrafica">Tradición en cada etapa</p></div>
    <div className="etapas">{etapas.map(e=><article className="etapa" key={e.nombre}><div className="etapa-imagen"><Image src={ruta+e.imagen} alt={e.alt} width={450} height={380} /></div><h3>{e.nombre}</h3></article>)}</div>
  </section>;
}

const datos = [
  ["TOTALMENTE ARTESANAL", "100% AGAVE (A. Angustifolia)"],
  ["CONT. NETO 750 ML.", "DENOMINACIÓN DE ORIGEN"],
  ["ALC. VOL. 37%", "PRODUCTO MEXICANO"],
];
export function Producto() {
  return <section id="producto" className="seccion producto">
    <div className="producto-foto" role="img" aria-label="Botella de Campo Negro con precinto rojo" />
    <div className="producto-datos">{datos.map((col,i)=><div className="producto-col" key={i}>{col.map(d=><p key={d}>{d}</p>)}</div>)}</div>
  </section>;
}

export function Autor() {
  return <section id="autor" className="seccion autor fondo-cal">
    <div className="autor-texto">
      <p className="autor-subtitulo">MAESTRO<br />MEZCALERO</p>
      <Image className="firma-autor" src={ruta+"firma-ivan.png"} alt="Iván Betancourt" width={470} height={180} />
      <Image className="autor-sello" src={ruta+"sello-oaxaca.png"} alt="Sello Oaxaca México" width={105} height={105} />
      <div className="contenido-seccion">
        <p>Siete años de experiencia llevaron a Iván Betancourt del cultivo del agave al corazón del mezcal.</p>
        <p>Sin una tradición familiar que le heredara el oficio, aprendió gracias a distintos maestros mezcaleros de Oaxaca, llevándolo a reunir conocimientos, técnicas y experiencias que hoy convergen en una forma propia de entender el mezcal: respetar la tradición, forjarla de carácter y mantenerla en constante movimiento.</p>
      </div>
    </div>
    <div className="autor-fotos"><Image src={ruta+"autor-fotos.webp"} alt="Fotografías del maestro mezcalero Iván Betancourt trabajando con agave" width={900} height={1050} /></div>
  </section>;
}

export function Contacto() {
  return <footer id="contacto" className="pie">
    <Image src={ruta+"logo-horizontal.png"} alt="Campo Negro 1430" width={250} height={115} />
    <p>Una historia que permanece. Un mezcal para compartir.</p>
    <nav aria-label="Enlaces de pie de página"><a href="#inicio">Volver al inicio ↑</a><a href="#legado">Nuestro legado</a><a href="#proceso">El proceso</a></nav>
    <small>Campo Negro · Ejutla de Crespo, Oaxaca, México</small>
    {/* Pendiente: agregar contacto y redes oficiales cuando el cliente los comparta. */}
  </footer>;
}
