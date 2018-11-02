import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Breadcrumbs = props => {
  const { links } = props;
  return (
    <div className={` main-content`}>
      <div >
        {links &&
          links.map((k, i) => (
            <div key={i} >
              <Link to={k.link}>
                {k.name}
              </Link>
              {i !== links.length - 1 && <div>/</div>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
