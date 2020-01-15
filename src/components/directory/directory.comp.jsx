import React from 'react';
import { connect } from 'react-redux';
// import { createStructureSelector } from 'reselect';

import './directory-style.scss';

// comp.
import MenuItem from '../menu-item/menu-item.comp';

// reselect
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

//
const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
});

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}
export default connect(mapStateToProps)(Directory);
