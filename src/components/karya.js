import React, { Component } from 'react';
import { Grid, Cell, Card } from 'react-mdl';

class Karya extends Component {
  render() {
    return(
      <div className="content-body">
        <Grid className="content-grid">
        <Cell col={12}>
          <h3>Karya</h3>
          <hr /><br />
          <div className="projects-grid">

        {/* Project 1 */}
        <Card shadow={5} style={{width: '256px', height: '380px', 
        background: 'url(https://i.pinimg.com/564x/80/8d/08/808d08f27464b1d7583e385761bdc627.jpg) center / cover', margin: 'auto'}}>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{width: '256px', height: '380px', 
        background: 'url(https://data.whicdn.com/images/338975314/original.jpg) center / cover', margin: 'auto'}}>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{width: '256px', height: '380px', 
        background: 'url(https://pbs.twimg.com/media/EJ9ddq4UwAI2cAJ?format=jpg&name=medium) center / cover', margin: 'auto'}}>
        </Card>

        </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Karya;
