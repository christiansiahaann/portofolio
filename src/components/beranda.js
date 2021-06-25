import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Logo from '../images/christian.jpg'

class Beranda extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="beranda-grid">
          <Cell col={12}>
          <img src={Logo} alt="profile" className="profile-img"/>
            
            <div className="banner-text">
              <h1>Christian Lamhot Tua</h1>
              <hr/>
              <p>HTML/CSS | PHP | MySQL | Bootstrap | JavaScript | React | React Native | Codeigniter | Laravel</p>
              <div className="social-links">
                <a href="https://www.facebook.com/lokomedia" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a href="https://twitter.com/bukulokomedia" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Beranda;
