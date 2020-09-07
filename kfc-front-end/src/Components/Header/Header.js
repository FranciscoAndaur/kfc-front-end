import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="uk-navbar-container uk-margin" >
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="./App">
                                <span className="uk-icon uk-margin-small-right" uk-icon="icon: home"></span> 
                            </a>
                        </li>
                    </ul>

                    <div className="uk-navbar-item">
                        {/* button used to be here  */}
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header