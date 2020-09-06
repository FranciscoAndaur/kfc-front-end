import React from 'react'

const Header = () => {
    return (
        <header>
            <nav class="uk-navbar-container uk-margin" uk-navbar>
                <div class="uk-navbar-left">

                    <a class="uk-navbar-item uk-logo" href="#">Logo</a>

                    <ul class="uk-navbar-nav">
                        <li>
                            <a href="#">
                                <span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                                Features
                            </a>
                        </li>
                    </ul>

                    <div class="uk-navbar-item">
                        <div>Some <a href="#">Link</a></div>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header