import React from 'react';

// styled-comp
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style';

export default function WithSpinner(WrappedComponent) {
  const Spinner = ({ isLoading, ...routeProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...routeProps} />
    );
  };

  return Spinner;
}

/**
 * if loading then display the spinner
 * if not-loading display the wrapcomponent
 *
 * need to pass route-props (i.e. match) to Wrapped-comp for searching
 */
