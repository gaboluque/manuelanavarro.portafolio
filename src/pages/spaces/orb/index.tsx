import { FunctionComponent } from 'react';
import './orb.scss';
import Process from '../../../components/Process';
import { orbProcessSteps } from './data';
import BackButton from '../../../components/BackButton';

const OrbPage: FunctionComponent = () => {
  return (
    <div className="page orb-page">
      <BackButton menuItem="spaces" />

      <section className="row project-description">
        <div className="project-info col-xs-24 col-md-14">
          <h3 className="title">Circo Orb</h3>
          <p>
            Este circo es un proyecto multidisciplinar. Un circo con música en vivo, completamente
            original que nos lleva por el mundo de la muerte y el duelo sanado dolores y
            enseñándonos a despedirnos de nuestros seres queridos. En este proyecto participé
            creando e branding, aterrizando el modelo de negocio, haciendo los maquillajes y la
            dirección de arte del proyecto.
          </p>
          <a href="https://www.instagram.com/circoorb/" target="_blank" rel="noreferrer">
            instagram.com/circoorb
          </a>
          <div className="info">
            <p>
              Año: <span className="number">2019</span>
            </p>
            <p>
              Freelance: <span>Rem agencia creativa</span>
            </p>
            <p>
              Rol: <span>Directora de arte</span>
            </p>
          </div>
        </div>
        <div className="description">
          <img src="/static/images/orb/moodboard.png" alt="moodboard" />
        </div>
      </section>
      <section className="process-container mt-50">
        <h4 className="title">Proceso</h4>
        <Process steps={orbProcessSteps} />
      </section>
      <section className="branding">
        <h4 className="title">Branding del proyecto</h4>
        <img src="/static/images/orb/branding.png" alt="branding" />
      </section>
      <section className="photos">
        <h4 className="title">Fotos del proyecto</h4>
        <div className="photos-container">
          <div className="row justify-space-between">
            <div className="col-xs-24 col-md-10">
              <img src="/static/images/orb/photos1.png" alt="photos1" />
            </div>
            <div className="col-xs-24 col-md-10">
              <img src="/static/images/orb/photos2.png" alt="photos2" />
            </div>
          </div>
          <div className="row justify-center">
            <div className="col-xs-24 col-md-18">
              <img src="/static/images/orb/photos3.png" alt="photos3" />
            </div>
          </div>
          <div className="row justify-space-between">
            <div className="col-xs-24 col-md-10">
              <img src="/static/images/orb/photos4.png" alt="photos4" />
            </div>
            <div className="col-xs-24 col-md-10">
              <img src="/static/images/orb/photos5.png" alt="photos5" />
            </div>
          </div>
        </div>
      </section>
      <div className="right-aligned mt-20">
        <BackButton menuItem="spaces" />
      </div>
    </div>
  );
};

export default OrbPage;
