import React from 'react';

// comp
import Directory from '../../components/directory/directory.comp';

// styled-comp
import { HomePageContainer } from './homepage.style';

// css
// import './homepage.style.scss';

export default function HomePage() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}
