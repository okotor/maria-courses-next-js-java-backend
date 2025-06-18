import React from 'react';

const NotFound = () => {
    return (
        <main className='not-found' styles={{ display: 'flex', justifyContent: 'center'}}>
            <h1>Stránka nenalezena.</h1>
            <p>Stránka pravděpodobně neexistuje. Jste si jistí, že jste zadali adresu správně?</p>
        </main>
    );
};

export default NotFound;