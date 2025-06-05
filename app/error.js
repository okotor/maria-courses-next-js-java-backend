'use client';

import React from 'react';

const Error = ({ statusCode }) => {
    return (
        <p style={{textAlign: 'center', }}>
            {statusCode
                ? `Nastala chyba: ${statusCode} na naší straně. Zkuste znovu načíst tuto stránku.`
                : 'Nastala chyba v prohlížeči, zkuste znovu načíst tuto stránku.'}
        </p>
    );
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;