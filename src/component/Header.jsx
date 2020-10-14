import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return ( 
    <div class="container-fluid"> 
        <div class="row">
                <div class="col-sm-12 d-flex justify-content-center">
                    <h1 class="text-center pt-3 pb-4 text-light">{titulo}</h1>
                </div>
        </div>
    </div>
     );
}
 

Header.propTypes = {
    titulo : PropTypes.string.isRequired,
   
}

export default Header;