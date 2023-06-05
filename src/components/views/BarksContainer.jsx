import { useState, useEffect } from 'react';
import Bark from './Bark/Bark';

const BarksContainer = () => {
  const [barks, setBarks] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const resp = await fetch(`http://localhost:3004/barks/`);
      const data = await resp.json();
      console.log(data);
      setBarks(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="twitter-panel">
        <section>
          {barks.map((bark, index) => (
            <Bark key={index} bark={bark} />
          ))}
        </section>
      </main>
    </>
  );
};

export default BarksContainer;
