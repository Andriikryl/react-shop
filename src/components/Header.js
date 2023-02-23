import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <div className='flex'>
            <a className='logo'>Hpuse Staff</a>
            <nav className='navigation'>
              <ul className='nav__list'>
                <li className='nav__item'>
                  <a className='nav__link'>
                    about us
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link'>
                      info
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link'>
                      top sails
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link'>
                        more info
                  </a>
                </li>
              </ul>
            </nav>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
