import React, { Component } from 'react';
import Homestay from './homestay';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class tampilan_homestay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homestays: [],
      allHomestays: [],
      selectedHomestay: null,
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          homestays: data,
          allHomestays: data
        });
      })
  }

  selectHomestay = (homestay) => {
    this.setState({
      selectedHomestay: homestay
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      homestays: this.state.allHomestays.filter((homestay) => new RegExp(event.target.value, "i").exec(homestay.nama))
    })

  }

  render() {
    let center = {
      lat: -7.795424,
      lng: 110.371754
    }
    if (this.state.selectedHomestay){
      center = {
        lat: this.state.selectedHomestay.lat,
        lng: this.state.selectedHomestay.lng
      }
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch} />
          </div>
          <div className="homestays">
            {this.state.homestays.map((homestay) => {
              return <Homestay
                key={homestay.id}
                homestay={homestay}
                selectHomestay={this.selectHomestay} />
            })}
          </div>
        </div>
        <div className="peta">
        <GoogleMapReact
          center={center}
          zoom={15}
        >
        {this.state.homestays.map((homestay) => {
          return <Marker
            key={homestay.id}
            lat={homestay.lat}
            lng={homestay.lng}
            text={homestay.harga}
            selected={homestay === this.state.selectedHomestay} />
        })}
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default tampilan_homestay;