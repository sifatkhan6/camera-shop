import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function HeaderCustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{color: match ? 'white' : 'black', fontWeight: 700 , marginLeft: 50, textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
}

export default HeaderCustomLink;