import React from 'react';
import Nav from './nav.jsx'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="panel">
                    <div>
                        <a href="/index.html" alt="Home"><img className="logo" src="/images/logo-large.png" alt="STaC Solutions Ltd" /></a>
                    </div>

                    <Nav />
                </div>
            </header>
        )
    }
}

export default Header