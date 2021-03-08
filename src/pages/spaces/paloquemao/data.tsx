import React, { FunctionComponent } from 'react';
import { ProcessStep } from '../../../components/Process';

export const paloquemaoProcessSteps: ProcessStep[] = [
  {
    id: 1,
    content: (
      <>
        <h4>Conocer el espacio</h4>
        Investigación del espacio y las personas con las que se quería trabajar. El espacio al que
        se le dio el reconocimiento fue la plaza de Paloquemao, un espacio de tradición al cual
        muchos bogotanos acuden para comprar su comida.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <h4>Interacción con los trabajadores</h4>
        Nos acercamos a diferentes trabajadores para conocer sus historias y las historia de la
        plaza identificando que ese espacio es un trabajo de tradición familiar que pasa de padres a
        hijos.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <h4>Selección de materiales</h4>
        Como la idea de la beca era hacer un desfile, la decisión fue construir un vestido a partir
        de materiales de la plaza y contar la historia de quienes nos vendían los materiales.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <h4>Creación del fanzine</h4>
        Se creó un fanzine con ilustraciones de cada una de las personas que apoyaron aportando los
        materiales del vestido, contando un poco de cada uno de ellos y de su recorrido por la
        plaza.
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        <h4>Creación de vestuario y del show</h4>
        Con los materiales se contrató a una señora que nos ayudara a confeccionar algunas partes
        del vestido.
      </>
    ),
  },
  {
    id: 6,
    content: (
      <>
        <h4>Creación del show</h4>
        Se creó un baile con dos bailarinas que a través de su cuerpo hablaran de la plaza de
        Paloqueamo. Este baile fue acompañado de música en vivo con Una banda llamada la Ronera, que
        tocó la canción Soy colombiano.
      </>
    ),
  },
  {
    id: 7,
    content: (
      <>
        <h4>Performance</h4>
        Acompañada de un fotógrafo, fuimos a Paloquemao con muchas impresiones de los fanzines y las
        invitaciones personales para el desfile. Disfrazados repartimos los fanzines a todas las
        personas de la plaza y les agradecimos por su labor.
      </>
    ),
  },
  {
    id: 8,
    content: (
      <>
        <h4>Desfile</h4>
        El desfile fue una danza, con vestidos llenos de flores, alimentos, especias dignas y
        típicas de la plaza bogotana. Se bailó, hubo cantos, hubo aplausos y por supuesto hubo un
        reconocimiento a todos los trabajadores de ese lugar.
      </>
    ),
  },
];

const defaultComponent: FunctionComponent = () => <></>;
export default defaultComponent;
