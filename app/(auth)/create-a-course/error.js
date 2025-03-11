'use client';

import React from 'react';

const Error = ({ statusCode }) => {
    return (
        <p>
            {statusCode
                ? `Na serveru se stala chyba č. ${statusCode}. Zkuste to samé znovu.`
                : 'Je třeba vyplnit všechna pole validním obsahem.'}
        </p>
    );
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;