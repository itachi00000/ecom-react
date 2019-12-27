import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{'Shop Now'.toUpperCase()}</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
