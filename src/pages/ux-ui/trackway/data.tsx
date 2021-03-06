import { ProcessStep } from '../../../components/Process';
import { FunctionComponent } from 'react';

export const trackwayProcessSteps: ProcessStep[] = [
  {
    id: 1,
    content: (
      <>
        <h4>Benchmark</h4>
        Investigación de plataformas que ofrecieran un servicio similar De trazabilidad.
        Descubrimiento: En latam no hay plataformas fuertes Que ofrezcan ese servicio.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <h4>Entrevistas</h4>
        Se entrevistó a diferentes empresarios sobre las necesidades de su negocio y como era la
        conexión entre cada proveedor de la empresa para lograr construir el producto final
        <br />
        Se entrevistó a diferentes usuarios sobre por qué consumían los productos que consumían y
        por qué les daban seguridad esas marcas.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <h4>Blueprint</h4>
        Con los insights encontrados se hizo un Blueprint ideal del producto.
        <h4>Business Model Canvas</h4>
        Creación del modelo de negocio del producto Trackway a través de un Workshop virtual.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <h4>MVP</h4>
        Se sacó el listado de funcionalidades y requerimientos por hacer. a través de la herramienta
        MoSCoW se priorizaron las necesidades y se sacó el MVP del producto.
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        <h4>Flujos de navegación</h4>
        Se diseñaron los flujos de navegación del MVP con la idea de organizar y entender la
        navegación de lo que a futuro sería el producto mínimo viable.
      </>
    ),
  },
  {
    id: 6,
    content: (
      <>
        <h4>Guía de estilo</h4>
        Con la construcción del modelo de negocio y el MVP se pasó a construir una guía de estilos
        para crear una estandarización de los componentes del producto digital y toda la parte
        gráfica de Marketing.
      </>
    ),
  },
  {
    id: 7,
    content: (
      <>
        <h4>Wireframes</h4>
        Se hizo un diseño de baja fidelidad para empezar a mapear como iría organizado el producto
        según las Pantallas, los flujos de navegación, Botones, etc.
      </>
    ),
  },
  {
    id: 8,
    content: (
      <>
        <h4>Teseo de wireframes</h4>
        Se hizo un testeo de usabilidad con los wireframes para comprobar que el flujo de navegación
        fuera correcto e intuitivo para el usuario (Se sesteó con tres usuarios)
      </>
    ),
  },
  {
    id: 9,
    content: (
      <>
        <h4>Mockups</h4>
        Diseño de pantallas de alta fidelidad para ser prototipadas y desarrolladas.
      </>
    ),
  },
  {
    id: 10,
    content: (
      <>
        <h4>Prototipo</h4>
        Se hizo el prototipo de la plataforma con la idea de conectar las pantallas y ver cómo iba a
        funcionar el producto.
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
