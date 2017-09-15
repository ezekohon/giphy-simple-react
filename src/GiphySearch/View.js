import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import Image from './Image';


const View = ({ 
  loading, error, data, initialQuery, onLoad,
  RenderSearchInput, RenderImage,
}) => (
  <div>
    <RenderSearchInput initialQuery={initialQuery} onSearch={onLoad} />
    <section>
      
          <RenderImage src={data} />
       
    </section>
  </div>
);




View.propTypes = {
  src: PropTypes.string.isRequired,
  initialQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  renderImage: PropTypes.func,
  renderLoading: PropTypes.func,
  renderError: PropTypes.func,
};

View.defaultProps = {
  RenderSearchInput: SearchInput,
  RenderImage: Image,
  
};

export default View;
