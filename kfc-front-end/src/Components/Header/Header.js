import React from 'react'

const Header = () => {
    return (
        <header>
            <nav class="uk-navbar-container uk-margin" uk-navbar>
                <div class="uk-navbar-left">

                    <a class="uk-navbar-item uk-logo" href="#"></a>

                    <ul class="uk-navbar-nav">
                        <li>
                            <a href="#">
                                <span class="uk-icon uk-margin-small-right" uk-icon="icon: home"></span>
                                
                            </a>
                        </li>
                    </ul>

                    <div class="uk-navbar-item">
                    <button class="uk-button uk-button-default uk-button-small">Sign Up</button>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header