import React from 'react';
import './projects.sass';

const projects = [
  {
    id: 0,
    name: 'login',
    link: 'https://lunavazquez.github.io/login-form-example/',
    repositorio: 'https://github.com/lunavazquez/login-form-example/',
  },
  {
    id: 1,
    name: 'movies',
    link: 'https://lunavazquez.github.io/cdmx-api-movies/src/login.html',
    repositorio: 'https://github.com/lunavazquez/cdmx-api-movies',
  },
  {
    id: 2,
    name: 'pokedex',
    link: 'https://lunavazquez.github.io/pokemon/',
    repositorio: 'https://github.com/lunavazquez/pokemon/',
  },
];

export default () => {
  return (
    <div className="section projects">
      <h1 className="section-title">Proyectos</h1>
      <div className="project-container">
        {projects.map(({ id, link, name, repositorio }) => {
          console.log(name + ' project');
          return (
            <div className="project123">
              <div className="content-project">
                <a key={id} href={link} className={name + ' project'}>
                  {name}
                </a>
              </div>
              <a key={repositorio} className="git-repo" href={repositorio}>
                @github/{name}
              </a>
            </div>
          );
        })}
        {/* {projects.map(({ repositorio, name }) => (
          <a key={repositorio} className="git-repo" href={repositorio}>
            @github/{name}
          </a>
        ))} */}
      </div>
    </div>
  );
};
