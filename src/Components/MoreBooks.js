import React from 'react'

const MoreBooks = ({books}) => {

    
  return (
    <div className='morebooks'>
      <h2>More books</h2>
        {books.length === 0 ? "" : (
        <div className='thumbnails'>
          {books.slice(3).map((book) => (
            <div className='bookthumb' key={book.id} >
                {book.volumeInfo.imageLinks.thumbnail} && <img src={book.volumeInfo.imageLinks.thumbnail} alt='book pic' />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MoreBooks