import { FunctionComponent } from 'react';
import Link from 'next/link';
import './davivienda.scss';
import BackButton from '../../../components/BackButton';

const DaviviendaPage: FunctionComponent = () => {
  return (
    <div className="page davivienda-page">
      <BackButton menuItem="ux-ui" />
      <section className="row project-description mb-50">
        <div className="project-info col-xs-24 col-md-10">
          <h3 className="title">Davivienda</h3>
          <p>
            Con este banco el reto inicial fue replantear la experiencia de usuario actual de la
            biblioteca virtual interna de Davivienda proponiendo una nueva plataforma didáctica y
            sencilla que pudiera ser utilizada por cualquier empleado. Luego de empezar a hacer todo
            el proceso de UX, identificamos un dolor mayor que era la transformación de la
            información. Este consistía en entender, analizar y transformar los archivos para
            hacerlos mucho más atractivos y usables conforme a las necesidades de los usuarios de la
            plataforma.
          </p>
          <div className="info">
            <p>
              Año: <span className="number">2020</span>
            </p>
            <p>
              Empresa: <span>Casacrea</span>
            </p>
            <p>
              Rol: <span>Diseñadora de experiencia</span>
            </p>
          </div>
        </div>
        <div className="col-12 moodboard">
          <img src={`/static/images/davivienda/moodboard.png`} alt={`moodboard`} />
        </div>
      </section>
      <section className="tools"></section>
      <section className="phase phase1">
        <h3>FASE UNO: UX design de la plataforma VI de Davivienda</h3>
        <div className="session session1">
          <h5 className="title">PRIMERA SESIÓN: CARD SORTING </h5>
          <div className="session-container">
            <div className="images">
              <div className="first">
                <img src="/static/images/davivienda/phase1session1-1.png" alt="phase1session1-1" />
                <img src="/static/images/davivienda/phase1session1-2.png" alt="phase1session1-2" />
              </div>
              <div className="second">
                <img src="/static/images/davivienda/phase1session1-3.png" alt="phase1session1-3" />
                <img src="/static/images/davivienda/phase1session1-4.png" alt="phase1session1-4" />
              </div>
            </div>
            <div className="description">
              <div className="description-item">
                <h3>Objetivo:</h3>
                El objetivo de este workshop era lograr identificar y definir unas categorías y unas
                funcionalidades determinantes para entender la información base qué estaría en la
                plataforma.
              </div>
              <div className="description-item">
                <h3>Aporte:</h3>
                Logramos aterrizar las ideas que tenía el equipo de Davivienda y al mismo tiempo
                logramos organizar las funcionalidades principales de lo que sería el producto
                ideal.
              </div>
            </div>
          </div>
        </div>
        <div className="session session2">
          <h5 className="title">SEGUNDA SESIÓN: MoSCoW </h5>
          <div className="session-container">
            <div className="images">
              <img src="/static/images/davivienda/phase1session2-1.png" alt="phase1session1-1" />
            </div>
            <div className="description">
              <div className="description-item">
                <h3>Objetivo:</h3>
                El objetivo de este workshop era priorizar las categorías definidas en el taller
                anterior y empezar a construir un MVP a través de organizar las funcionalidades por
                importancia y esfuerzo.
              </div>
              <div className="description-item">
                <h3>Aporte:</h3>
                Logramos construir un MVP priorizando y eliminando categorías y funcionalidades que
                nos llevaran a tener un producto conciso y listo para empezar a construirse.
              </div>
            </div>
          </div>
        </div>
        <div className="session session3">
          <h5 className="title">TERCERA SESIÓN: ESTRUCTURA DE INFO </h5>
          <div className="session-container">
            <div className="images">
              <div className="first">
                <img src="/static/images/davivienda/phase1session3-1.png" alt="phase1session1-1" />
                <img src="/static/images/davivienda/phase1session3-2.png" alt="phase1session1-2" />
              </div>
              <div className="second">
                <img src="/static/images/davivienda/phase1session3-3.png" alt="phase1session1-3" />
              </div>
            </div>
            <div className="description">
              <div className="description-item">
                <h3>Objetivo:</h3>
                Estructurar la información que se tenía actualmente en la plataforma VI y así poder,
                de forma visual, lograr crear una arquitectura de la información que generara una
                mejor relación entre el producto y el usuario.
              </div>
              <div className="description-item">
                <h3>Aporte:</h3>
                En esta sesión pudimos estructurar la información de manera más coherente y pudimos
                identificar otro dolor. Los empleados de Davivienda no estaban listos para un cambio
                de pensamiento lo que nos condujo a retrasar el proceso y enfocarnos en crear un
                taller de innovación que les cambiara el mindset para así retomar el proceso.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="phase phase2">
        <h3>FASE DOS: Replantear en minaste del equipo</h3>
        <div className="session session1">
          <h5 className="title">ÚNICA SESIÓN: INNOVACIÓN </h5>
          <div className="session-container">
            <div className="images">
              <div className="first">
                <img src="/static/images/davivienda/phase2session1-1.png" alt="phase1session1-1" />
                <img src="/static/images/davivienda/phase2session1-2.png" alt="phase1session1-2" />
              </div>
              <div className="second">
                <img src="/static/images/davivienda/phase2session1-3.png" alt="phase1session1-3" />
              </div>
            </div>
            <div className="description">
              <div className="description-item">
                <h3>Objetivo:</h3>
                El objetivo de este workshop de innovación era transformar La mentalidad del equipo
                de Davivienda.
              </div>
              <div className="description-item">
                <h3>Aporte:</h3>
                Davivienda reconoció la importancia de llevar este tipo de workshops a sus
                empleados. Logramos cambiar el pensamiento de varios participantes para que al
                momento de encontrar un dolor pudieran reinventarse y solucionarlo de formas
                distintas e innovadoras.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="phase phase3">
        <h3>FASE TRES: De documentado de información a generadores de contenido</h3>
        <div className="row session justify-space-between mb-30">
          <div className="col-xs-24 col-md-9 description">
            <h3>PRIMERA SESIÓN: TÉRMINOS</h3>
            <div className="description-item">
              <h4>Objetivo:</h4>
              Identificar los términos usados en cada documento y transformar el lenguaje para que
              fuera más empático Con el usuario.
            </div>
            <div className="description-item">
              <h4>Aporte:</h4>
              Transformamos una información pesada y poco amigable en un contenido sencillo, fácil
              de entender y de rápida lectura.
            </div>
          </div>
          <div className="col-xs-24 col-md-9 description">
            <h3>SEGUNDA SESIÓN: IDEACIÓN</h3>
            <div className="description-item">
              <h4>Objetivo:</h4>
              Generar un contenido digerible y de fácil acceso cambiando el lenguaje y la forma de
              presentar los documentos del banco.
            </div>
            <div className="description-item">
              <h4>Aporte:</h4>
              Logramos crear todo un proceso de transformación de los documento pasando de pdf a
              infografías interactivas, gamification y video entre otros.
            </div>
          </div>
        </div>
        <div className="session">
          <div className="description">
            <h3>TRANSFORMACIÓN DE LA INFORMACIÓN </h3>
            <div className="info-transformation row">
              <div className="col-xs-24 col-md-12">
                <img
                  src="/static/images/davivienda/infoTransformation1.png"
                  alt="infoTransformation1"
                />
                <img
                  src="/static/images/davivienda/infoTransformation2.png"
                  alt="infoTransformation2"
                />
              </div>
              <div className="col-xs-24 col-md-12 p-50">
                Se hicieron varios talleres de transformación de la Información dónde se le
                explicaba a los empleados de Davivienda como debían transformar los contenidos según
                cada uno de los procedimientos internos que Tenían en pdf. La idea de estos
                workshops era que Lograran ser autosuficientes como compañía y que a través de las
                enseñanzas dadas por nuestro equipo ellos pudieran replicar esto siempre que se
                necesitara.
                <br />
                <br />
                Los entregables finales fueron diferentes instructivos con referentes de
                transformación de la información y además se hicieron unos wireframes explicando
                como Debía verse el contenido en pantalla.
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="right-aligned mt-20">
        <BackButton menuItem="ux-ui" />
      </div>
    </div>
  );
};

export default DaviviendaPage;
