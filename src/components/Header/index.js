import React from 'react';
import FilterBar from "../FilterBar";
import CreateNote from "../CreateNote";

const Header = () => {
    return (
        <header className='header'>
            <CreateNote/>
            <FilterBar/>
        </header>
    );
};

export default Header;