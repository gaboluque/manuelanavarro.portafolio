import { ProcessStep } from '../../../components/Process';
import { FunctionComponent } from 'react';

export const docRedProcessSteps: ProcessStep[] = [
  {
    id: 1,
    content: (
      <>
        <h4>Benchmark</h4>
        Investigación de plataformas que ofrecieran un servicio similar. Descubrimiento: En latam no
        hay plataformas fuertes Que ofrezcan ese servicio. Todo el contenido importante está Escrito
        en ingles.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <h4>Entrevistas</h4>
        Se entrevistó a diferentes Médicos sobre sus necesidades, Como era su día a día y cuales
        eran Las plataformas que usaban para Consumir contenido médico.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <h4>Journey Map</h4>
        Con los insights encontrados se hizo un Journey ideal de la nueva funcionalidad en este caso
        Comunidades.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <h4>MVP</h4>
        Se sacó el listado de tareas por hacer. A través de la herramienta MoSCoW se priorizaron las
        necesidades y se sacó el MVP de la funcionalidad.
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        <h4>Flujos de navegación</h4>
        Se diseñaron los flujos de navegación del MVP con la idea de organizar y entenderla
        navegación de lo que a futuro sería el producto mínimo viable.
      </>
    ),
  },
  {
    id: 6,
    content: (
      <>
        <h4>Guía de estilo/Valores/Manual</h4>
        Se rediseño una nueva guía de estilo y un manual de marca que lograra Agrupar los valores
        construidos a Través de un Workshop de Canvas de propuesta de valor.
      </>
    ),
  },
  {
    id: 7,
    content: (
      <>
        <h4>Wireframes</h4>
        Se hizo un diseño de baja fidelidad Para empezar a mapear como iría organizado el producto
        según las pantallas, los flujos de navegación, botones, etc.
      </>
    ),
  },
  {
    id: 8,
    content: (
      <>
        <h4>Testeo de wireframes</h4>
        Se hizo un testeo de usabilidad con los wireframes para comprobar que el flujo de navegación
        fuera correcto e intuitivo para el usuario (Se sesteó con cinco médicos)
      </>
    ),
  },
  {
    id: 9,
    content: (
      <>
        <h4>Mockups</h4>
        Estamos en proceso de rediseño de Pantallas con la nueva estética de DocRed
      </>
    ),
  },
  {
    id: 10,
    content: (
      <>
        <h4>Prototipo</h4>
        Se han hecho prototipos de funcionalidades mejoradas pero estos han sido con el diseño
        anterior mientras que en desarrollo se empieza a implementar en el front el cambio grande.
      </>
    ),
  },
  {
    id: 11,
    content: (
      <>
        <h4>Testeo de Mockups</h4>
        Se testaron los mockups con diferentes usuarios para ver su comportamiento frente a
        diferentes flujos de la plataforma y hacer las mejoras necesarias.
      </>
    ),
  },
  {
    id: 12,
    content: (
      <>
        <h4>Zeplin</h4>
        Se subieron todos los diseños de pantallas para el desarrollo del producto.
      </>
    ),
  },
];

const defaultComponent: FunctionComponent = () => <></>;
export default defaultComponent;
