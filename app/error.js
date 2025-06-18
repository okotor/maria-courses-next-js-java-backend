'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="error">
            <h1>Něco se pokazilo.</h1>
            <p>Zkuste to prosím znovu nebo se vraťte na domovskou stránku.</p>
        </main>
    );
}

// 'use client';

// import React from 'react';

// const Error = ({ statusCode }) => {
//     return (
//         <p style={{textAlign: 'center', }}>
//             {statusCode
//                 ? `Nastala chyba: ${statusCode} na naší straně. Zkuste znovu načíst tuto stránku.`
//                 : 'Nastala chyba v prohlížeči, zkuste znovu načíst tuto stránku.'}
//         </p>
//     );
// };

// Error.getInitialProps = ({ res, err }) => {
//     const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//     return { statusCode };
// };

// export default Error;