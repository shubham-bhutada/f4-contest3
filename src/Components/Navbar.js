import React from 'react'
import logo from '../Images/booksLogo.svg'
import bookHeart from '../Images/bookHeart.jpg'
import notificationIcon from '../Images/notification-icon.jpg'
import premiumUser from '../Images/premium-user.jpg'
import avatar from '../Images/avatar.jpg'

const Navbar = ({searchBook, setSearchBook, getBooks}) => {

    function handleClick(string) {
        getBooks(string);
    }

  return (
    <div className='navbar'>
        <div className='nav-left'>
            <img src={logo} alt='logo'/>
            <span>
                <span className='logo-keazon'>KeazoN</span>
                <span className='logo-BOOKS'>BOOKS</span>
            </span>
        </div>
        <div className='nav-search'>
            <input 
                type='text' 
                placeholder='Search for the book you want to read it now... Sherlock Holmes, Harry Potter, etc'
                value={searchBook}
                onChange={(e) => setSearchBook(e.target.value)}/>
            <button onClick={() => handleClick(searchBook)}>Search</button>
        </div>
        <div className='nav-right'>
            <ul>
                <li><img src={bookHeart} alt='book heart'/></li>
                <li><img src={notificationIcon} alt='notification bell'/></li>
                <li><img src={premiumUser} alt='premium user'/></li>
                <li><img src={avatar} alt='premium user'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar