import React from 'react';

const Header = () => {

    return ( 
        <div class="row justify-content-center align-items-center m-3">
        <div className="col-4">
          <div className="container">
          <img className="logo" src="img/bgTitle.png"></img>
          </div>
        </div>
          <div className="col-4">
          <h1>Could Be a Wiki?</h1>
        </div>
          <div className="col-4">
          <div className="container">
              <p> Made By Antoni Carol Mateo -- Link</p>
              <p> Created using ReactJS and ... -- Icons</p>
          </div>
        </div>
      </div>
     );
}
 
export default Header;