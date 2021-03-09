import { FunctionComponent } from 'react';
import './trackway.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { trackwayProcessSteps } from './data';
import Process from '../../../components/Process';
import BackButton from '../../../components/BackButton';

const TrackwayPage: FunctionComponent = () => {
  const platformArr = [1, 2, 3];
  const mobileArr1 = [1, 2, 3, 4, 5, 6];
  const mobileArr2 = [7, 8, 9, 10, 11, 12];
  return (
    <div className="page trackway-page">
      <BackButton menuItem="ux-ui" />
      <section className="row project-description mb-50">
        <div className="project-info col-xs-24 col-md-10">
          <h3 className="title">Trackway</h3>
          <p>
            Trackway agencia creativa es un emprendimiento propio creado con el fin de mezclar mis
            conocimientos en pro de ayudar a diferentes emprendimientos a transformarse. Apoyamos
            desde la estrategia hasta la imagen visual para que las marcas puedan dar un mensaje
            claro directo y eficiente a la hora de vender sus productos o servicios.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/trackwayagenciacreativa"
          >
            instagram.com/trackwayagenciacreativa
          </a>
          <div className="info">
            <p>
              Año: <span className="number">2020</span>
            </p>
            <p>
              Empresa: <span>trackway agencia creativa</span>
            </p>
            <p>
              Rol: <span>CEO</span>
            </p>
          </div>
        </div>
        <div className="col-12 moodboard">
          <img src={`/static/images/trackway/moodboard.png`} alt={`moodboard`} />
        </div>
      </section>
      <section className="tools"></section>
      <section className="process-container">
        <h4 className="title">Proceso</h4>
        <Process steps={trackwayProcessSteps} />
      </section>
      <section className="web-platform-container">
        <h4 className="title">Plataforma web trazabilidad de la empresa</h4>
        <div className="web-platform">
          {platformArr.map((platformIndex) => (
            <img
              key={platformIndex}
              src={`/static/images/trackway/platform${platformIndex}.png`}
              alt={`platform${platformIndex}`}
            />
          ))}
        </div>
      </section>
      <section className="mobile-platform-container">
        <h4 className="title">Aplicación web para los proveedores de la empresa</h4>
        <div className="mobile-platform">
          {mobileArr1.map((mobileIndex) => (
            <img
              key={mobileIndex}
              src={`/static/images/trackway/mobile${mobileIndex}.png`}
              alt={`platform${mobileIndex}`}
            />
          ))}
        </div>
      </section>
      <section className="mobile-platform-container">
        <h4 className="title">Aplicación para consumidores </h4>
        <div className="mobile-platform">
          {mobileArr2.map((mobileIndex) => (
            <img
              key={mobileIndex}
              src={`/static/images/trackway/mobile${mobileIndex}.png`}
              alt={`platform${mobileIndex}`}
            />
          ))}
        </div>
      </section>
      <div className="right-aligned mt-20">
        <BackButton menuItem="ux-ui" />
      </div>
    </div>
  );
};

export default TrackwayPage;
