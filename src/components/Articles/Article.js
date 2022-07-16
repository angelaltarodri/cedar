import React from 'react'
import './Article.css'
import foto from '../../images/photos/sherlyn.png'
import adjunto from '../../images/photos/chimboteaccidente.png'
export default function Article() {
  return (
    <div className="Article">
        <div className="Article_titulo">
            El concebido de Schrödinger
        </div>
        <div className="Article_description">
            ▉ ¿Debe indemnizarse a un concebido si muere en un accidente de tránsito o solo debe indemnizarse a la madre? Yo creo que a ambos. Sin embargo, según nuestra legislación, solo si nace vivo, el concebido o embrión humano tendría este derecho. Pero, <b> esta condición jurídica minimiza totalmente su calidad de sujeto de derecho</b>, advierte Fernández Sessarego.
            <hr />
        </div>
        <div id="Article_img">
            <img src={adjunto} alt="" />
            <div>
                <i> Chimbote: Fallece joven madre embarazada quien luchaba por su vida, tras un accidente en la Panamericana Norte. <b> Fuente: Áncash Noticias</b></i>
            </div>
        </div>
        <div className="Article_firma">
            <div>
            <img src={foto} alt="" /> Por Sherlyn Gonzales.
            </div>
            <div>
            Julio 15, 2022. Actualizado 4:15 pm 
            </div>
        </div>
        <div className="Article_description">
            El SOAT se creó para proteger a toda ‘persona’ afectada en un accidente de tránsito y la indeminzación surge solo demostrando el accidente y sus consecuencias. Una simple interpretación indica que el SOAT no diferencia las etapas biológicas del ser humano. Considera simplemente que se perjudique a una ‘persona’.
        </div>
        <div className="Article_description">
            Pero, el concebido en nuestro ordenamiento jurídico no es ‘persona’ en sentido estricto y, en principio, este no recibiría indemnización alguna. 
        </div>
        <div className="Article_description">
            Contrariamente, Borda, un autor argentino, dice que ‘persona’ hace referencia al hombre y se utiliza para designar a <i> todo ente capaz de adquirir derechos y contraer obligaciones</i>. Por lo que tanto el concebido como la persona ya nacida serían, en sentido lato, el mismo ente centro de imputaciones jurídicas íntegramente. Más aún cuando se dice que el concebido es sujeto de derecho en todo cuanto lo favorece, “a condición de que nazca vivo”. 
        </div>
        <div className="Article_description">
            Razón no le falta porque también el Código de los Niños y Adolescentes considera como persona al concebido, ya que expresa que ‘niño’ es todo ser humano desde su concepción hasta cumplir los 12 años.
        </div>
        <div className="Article_description">
            Entonces, <b>si el concebido es un niño, analógicamente, es ‘persona’</b>. Por tanto, gozaría de la indemnización que le otorga la legislación a los menores. Pero de ahí surge nuevamente otra duda: ¿a quién le corresponde recibir en nombre del concebido dicho “pago”?
        </div>
        <div className="Article_description">
            La ley peruana en ese aspecto no es satisfactoria y genera incertidumbre. Si es claro que por un accidente de tránsito un concebido deja de existir, pero pese a ello no se le brinda indemnización, entonces, ¿el concebido realmente estuvo vivo? ¿O siempre estuvo mitad vivo y mitad muerto? Vivo si por el accidente pereció y, a la vez, muerto porque nunca en sí “nació”. 
        </div>
        <div className="Article_description">
            <b>La diferencia que nuestro ordenamiento establece entre persona y sujeto de derecho no es consistente y desampararía al ser humano en su estado más vulnerable y frágil basándose en una referencia gramatical o lingüística</b>. Terminaría desprotegiendo al concebido y omitiría que la naturaleza jurídica del concebido y la de persona poseen una referencia ontológica en común —la vida humana— merecedora de protección, más aún en un estado de desarrollo biológico inicial.  
        </div>
        <div className="Article_description">
            Si debemos esperar a que nazca vivo para otorgarles derechos patrimoniales, quiere decir que nunca fue sujeto de derecho en todo el sentido de la expresión. Las cosas son o no son.   
        </div>
        <div className="Article_description">
            La condición suspensiva de los derechos patrimoniales lo reduce a una nada. Lleva a creer que el concebido en realidad no es tan sujeto de derecho como el artículo 1 del Código Civil pretendería. Paradoja que dejaría un vacío legal que la doctrina debe llenar.    
        </div>
        <div className="Article_description">
            Una especie de limbo donde sabremos si llega a ser persona solo si abrimos “la caja” como si esta fuera la de Schrödinger. Un ejercicio mental.
        </div>
    </div>
  )
}
