import React, { useState, useEffect } from "react";

import api from './services/api';

import "./styles.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => setList(response.data));

  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      url: "http://github.com/Rocketseat/unform",
      title: "Unform",
      techs: [
      "Node",
      "Express",
      "TypeScript"
    ]
    });

    const repo = response.data;
    setList([...list, repo]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">

        {
          list.map(repo => (
            <li key={repo.id}>
              {repo.title}
  
              <button onClick={() => handleRemoveRepository(1)}>
                Remover
              </button>
            </li>
            ))
        }
        
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
