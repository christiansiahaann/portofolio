import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Logo from '../images/christian.jpg'

class TentangSaya extends Component {
  render() {
    return(
      <div className="content-body">
        <Grid className="content-grid2">
        <Cell col={3}>
          <div className="content-list">
            <img
              src={Logo}
              alt="avatar" width="300dp" height="300dp"
               />
          <h4>Christian Lamhot Tua</h4>
          <hr style={{borderTop: '3px solid #833fb2'}}/>
          <p>Alamat: Perumahan Citra Gading Serang,Banten</p>
          <p>Phone: 0812-2902-6479</p>
          <p>Email: christiansiahaann@gmail.com</p>
          <p>Web: http://www.christiansiahaann.com</p>
          </div>
        </Cell>

        <Cell className="resume-right-col" col={9}>
            <h3>Pendidikan</h3>
            <Grid>
              <Cell col={4}>
                <p>2007 - 2013</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>SD Mardi Yuana Serang</h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p>2013 - 2016</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>SMP Mardi Yuana Serang</h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p>2016 - 2019</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>SMA Negeri 1 Serang</h5>
              </Cell>
            </Grid>
            <Grid>
            <Cell col={4}>
                <p>2019 - 2023</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>D4 TRPL UGM</h5>
              </Cell>
            </Grid>
        </Cell>
        </Grid>
      </div>
    )
  }
}
export default TentangSaya;
