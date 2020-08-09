import React from 'react'

export default ({ className, href, children}) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        // discard usual behaviour 
        event.preventDefault();
        // update url path
        window.history.pushState({}, '', href);
        // to tell components url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    )
}
