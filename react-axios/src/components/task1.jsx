import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
  
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://openlibrary.org/search.json?q=random&limit=10'); // Hardcoded query
        
        response.data.docs.forEach((book, index) => {
          console.log(`Book #${index + 1}:`, book); 
        });
      } catch (error) {
        console.error("Error fetching data:", error); 
      } finally {
        setLoading(false); 
      }
    };

    fetchBooks(); 
  }, []); 

  return (
    <div>
      <h1>Hello world!</h1>
      {loading && <p>Loading...</p>} 
    </div>
  );
};

export default BookSearch;
