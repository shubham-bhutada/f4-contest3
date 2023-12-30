import React, { useState } from 'react';

const FirstThreeBooks = ({ books }) => {
  const [expandedBook, setExpandedBook] = useState(null);

  function expandBook(book) {
    setExpandedBook(book.id);
  };

//   function handleNowRead(book) {

//   }

//   function handleMoreInfo(book) {

//   }

  

  return (
    <div className='cards'>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <>
          {books.slice(0, 3).map((book) => (
            <div
              key={book.id}
              className={`bookCard ${expandedBook === book.id ? 'expanded' : ''}`}
              onClick={() => expandBook(book)}
            >
              <img src={book.volumeInfo.imageLinks.thumbnail} alt='book pic' />
              <div className='bookInfo'>
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.description}</p>
                <div className='btn'>
                    <a href={book.volumeInfo.previewLink} ><button onClick={()=>{                  
                    }}>Now Read!</button></a>
                    {expandedBook === book.id && (
                        <a href={book.volumeInfo.infoLink} ><button onClick={() => {
                            
                        }}>More Info!</button></a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FirstThreeBooks;
