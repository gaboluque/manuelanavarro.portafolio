import { FunctionComponent } from 'react';
import './paloquemao.scss';
import Process from '../../../components/Process';
import { paloquemaoProcessSteps } from './data';
import BackButton from '../../../components/BackButton';

const PaloquemaoPage: FunctionComponent = () => {
  const fanzineArr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="page paloquemao-page">
      <BackButton menuItem="spaces" />

      <section className="row project-description">
        <div className="project-info col-xs-24 col-md-14">
          <h3 className="title">A LA ORDEN</h3>
          <p>
            A la orden, qué se le ofrece... es un proyecto hecho para poner en el mapa a quienes en
            Colombia hacen una labor increíble vendiendo y cultivando diferentes productos para
            poder poner en la mesa de los hogares colombianos la comida del día a día. A través de
            diferentes estrategias logramos construir toda una experiencia que reconociera las
            labores de los trabajadores de Paloquemao y también a través de sus productos
            construimos un desfile hecho en el antiguo Bronx bogotano, un lugar que paso de ser un
            espacio donde Los habitantes de calle se reunían a vender, comprar y consumir drogas a
            ser un espacio artístico en el cual todos los ciudadanos pueden recorrer y experimentar
            arte. Todo este proyecto fue posible gracias a ser la ganadora de la beca creativa Bronx
            distrito Creativo, la cual me dio los recursos económicos para construir esta
            experiencia que a mí me cambió la vida y la visión de Bogotá.
          </p>
          <div className="info">
            <p>
              Año: <span className="number">2018</span>
            </p>
            <p>
              Beca: <span>El desfiladero, Bronx distrito creativo</span>
            </p>
            <p>
              Rol: <span>Creadora de proyecto</span>
            </p>
          </div>
        </div>
        <div className="description ml-50">
          <img src="/static/images/paloquemao/moodboard.png" alt="moodboard" />
        </div>
      </section>
      <section className="process-container mt-50">
        <h4 className="title">Proceso</h4>
        <Process steps={paloquemaoProcessSteps} />
      </section>
      <section className="fanzines-container">
        <h4 className="title">Ilustraciones del fanzine</h4>
        <div className="images">
          {fanzineArr.map((fanzineIndex) => (
            <img
              key={fanzineIndex}
              src={`/static/images/paloquemao/fanzine${fanzineIndex}.png`}
              alt={`fanzine${fanzineIndex}`}
            />
          ))}
        </div>
      </section>
      <section className="performance-container">
        <h4 className="title">Ilustraciones del fanzine</h4>
        <div className="images">
          {fanzineArr.map((fanzineIndex) => (
            <img
              key={fanzineIndex}
              src={`/static/images/paloquemao/performance${fanzineIndex}.png`}
              alt={`fanzine${fanzineIndex}`}
            />
          ))}
        </div>
      </section>
      <div className="right-aligned mt-20">
        <BackButton menuItem="spaces" />
      </div>
    </div>
  );
};

export default PaloquemaoPage;
