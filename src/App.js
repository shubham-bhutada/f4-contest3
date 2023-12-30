import React, {useState, useEffect} from 'react'
import MoreBooks from './Components/MoreBooks'
import FirstThreeBooks from './Components/FirstThreeBooks'
import Navbar from './Components/Navbar'
import axios from 'axios'

const App = () => {
  const [books, setBooks] = useState([])
  const [searchBook, setSearchBook] = useState('')

  useEffect(() => {
    getBooks(searchBook || "Harry Potter")
    getBooks(searchBook || "Sherlock Holmes")
  },[])

  function getBooks(query) {
    axios.get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        q : query
      }
    })
    .then(response => {
      console.log(response.data)
      
      if(query === "Harry Potter" || query === "Sherlock Holmes") {
        setBooks(...books, response.data.items)
      } else {
        setBooks(response.data.items)
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <Navbar setSearchBook={setSearchBook} searchBook={searchBook} getBooks={getBooks}/>

      <FirstThreeBooks books={books}/>
      
      <MoreBooks books={books}/>
    </div>
  )
}

export default App