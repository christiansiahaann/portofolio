import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Iframe from 'react-iframe';

class Kontak extends Component {
  render() {
    return(
      <div className="content-body">
        <Grid className="content-grid">
        <Cell col={5}>
          <h3>Hubungi Saya</h3>
          <hr/>
          <div className="content-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  0812-2902-6479
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-fax" aria-hidden="true"/>
                  (0274) 640-7620
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  christiansiahaann@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                  <i className="fa fa-globe" aria-hidden="true"/>
                  www.christiansiahaann.com
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
        <Cell col={7}>
            <h3>Alamat Rumah</h3>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             <Iframe url="https://www.google.com/maps/d/embed?mid=1EHx1qKUkgY11eaQMLMrUjaMC0xK_hJHg"
                     width="450px"
                     height="400px"
                     id="myId"
                     className="myClassname"
                     display="initial"
                     position="relative"
                     allowFullScreen/>
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Kontak;
