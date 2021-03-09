import { FunctionComponent } from 'react';
import './docRed.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { docRedProcessSteps } from './data';
import Process from '../../../components/Process';
import BackButton from '../../../components/BackButton';

const DocRedPage: FunctionComponent = () => {
  return (
    <div className="page docRed-page">
      <BackButton menuItem="ux-ui" />
      <section className="row project-description mb-50">
        <div className="project-info col-xs-24 col-md-10">
          <h3 className="title">DocRed</h3>
          <p>
            DocRed es una plataforma que ofrece contenido médico de calidad completamente en español
            para médicos hispanohablantes que quieran estar siempre actualizados en lo ultimo en su
            especialidad. Por otro lado esta plataforma ofrece espacios de comunicación y
            intercambio de información entre colegas médicos con la seguridad de que todos los
            usuarios registrados están verificados como doctores profesionales.
          </p>
          <div className="info">
            <p>
              Año: <span className="number">2020/hoy</span>
            </p>
            <p>
              Empresa: <span>DocRed</span>
            </p>
            <p>
              Rol: <span>Diseñadora UX/UI</span>
            </p>
          </div>
        </div>
        <div className="col-12 moodboard">
          <img src={`/static/images/docRed/moodboard.png`} alt={`moodboard`} />
        </div>
      </section>
      <section className="tools"></section>
      <section className="process-container">
        <h4 className="title">Proceso</h4>
        <p>
          Al ser una Startup, DocRed tiene un proceso de construcción completamente iterativo que
          cumple un proceso basado en la metodología de Design thinking y Y también la metodología
          SPRINT. Por esta razón el proceso que plasmaré a continuación es un proceso que se repite
          constantemente en cada nueva funcionalidad o mejora de la plataforma. Hoy en día trabajo
          allí solucionando problemas a través del diseño
        </p>
        <Process steps={docRedProcessSteps} />
      </section>
      <section className="feed-proposal">
        <h4 className="title">Propuesta rediseño del feed</h4>
        <img src="/static/images/docRed/feedProposal.png" alt="feedProposal" />

        <div className="right-aligned mt-20">
          <BackButton menuItem="ux-ui" />
        </div>
      </section>
    </div>
  );
};

export default DocRedPage;
