import React, { FunctionComponent } from 'react';
import { ProcessStep } from '../../../components/Process';

export const orbProcessSteps: ProcessStep[] = [
  {
    id: 1,
    content: (
      <>
        <h4>Workshop de Propuesta de Valor</h4>
        Se hizo un taller en el cual a través del Canvas de propuesta de valor, la pirámide de
        valores y ejercicios como los cinco por qué se definieron los valores de la marca, cómo
        quería ser vista por sus clientes y cómo quería sentirse.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <h4>Logo</h4>
        Se diseño la propuesta de logo Ideal que cumpliera con los valores y objetivos de la marca y
        poder así reflejar en la imagen todo lo que se quería decir en la obra.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <h4>Creación de vestuario y maquillaje</h4>A través de referentes y la propuesta de valor se
        construyeron los diferentes personajes con sus vestuarios y su maquillaje, pensando en una
        obra minimal pero muy llamativa.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <h4>Diseño de escenario</h4>
        Con muy pocos recursos se dispuso el espacio de la manera ideal pensando en cada detalle de
        la obra para poder transmitir lo que la obra quería de la mejor manera posible.
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        <h4>Show</h4>
        Se hizo una obra que empezaba desde que el espectador entraba al lugar. Con diálogos Y una
        relación directa con los personajes, maquillaje risas y llanto.
      </>
    ),
  },
];

const defaultComponent: FunctionComponent = () => <></>;
export default defaultComponent;
