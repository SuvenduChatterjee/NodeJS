import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();
    return <div className="app-header">
                <a onClick={() => history.push('/')} href>
                    Night Owl
                </a>
            </div>
};

export default Header;