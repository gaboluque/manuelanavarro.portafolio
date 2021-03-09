import React, { useEffect, useState } from 'react';
import ProjectModal from './ProjectModal';
import './home-dashoard.scss';
import { collectionPaths, ProjectCollectionItem, projectsCollection } from '../../pages/projects';
import { useRouter } from 'next/router';

const HomeDashboard: React.FunctionComponent = () => {
  const [modal, setModal] = useState<ProjectCollectionItem | undefined>(undefined);
  const { query } = useRouter();

  useEffect(() => {
    const path = (query ? query['menu-item'] : null) as string;
    if (query && collectionPaths.includes(path)) {
      setModal(projectsCollection.find(({ path: projPath }) => projPath === path));
    }
  }, [query]);

  const openModal = (modalItem: ProjectCollectionItem): void => {
    setModal(modalItem);
    window.history.replaceState(null, '', `/?menu-item=${modalItem.path}`);
  };

  const handleCloseModal = (): void => {
    setModal(undefined);
    window.history.replaceState(null, '', '/');
  };

  return (
    <section id="projects" className="projects-dashboard">
      <h4 className="title">PROYECTOS</h4>
      <div className="categories-container">
        {projectsCollection.map((modalItem) => (
          <button
            key={modalItem.title}
            onClick={() => openModal(modalItem)}
            className={`category ${modalItem.color}`}
          >
            <span>{modalItem.title}</span>
          </button>
        ))}
      </div>
      {!!modal && (
        <ProjectModal first={query.open !== '1'} close={handleCloseModal} modal={modal} />
      )}
    </section>
  );
};

export default HomeDashboard;
