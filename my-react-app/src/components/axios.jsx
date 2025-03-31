import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'blueimp-md5';

const MarvelAPI = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const publicKey = '569c84f085bcd38606406fb3f3fcfb28'; 
  const privateKey = '0a4b487c3f416a18f9c95a55ec37fcc4569d96c4'; 


  useEffect(() => {
    const fetchMarvelData = async () => {
      const timestamp = Date.now(); 
      const hash = md5(timestamp + privateKey + publicKey);  

      try {
      
        const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
          params: {
            ts: timestamp,  
            apikey: publicKey,  
            hash: hash,  
            limit: 10,  
          }
        });
        
        
        setCharacters(response.data.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Marvel data:', error);
      }
    };

    fetchMarvelData();  
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Marvel Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarvelAPI;



