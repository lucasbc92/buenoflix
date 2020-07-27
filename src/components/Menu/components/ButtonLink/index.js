import React from 'react';

const ButtonLink = ({className, href, children}) => {
    return (
        <a className={className} href={href}>
            {children}
        </a>
    );
}

export default ButtonLink;