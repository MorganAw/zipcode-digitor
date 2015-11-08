import React from 'react'
import { Link } from 'react-router';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
// var PhotoGallery = React.createClass({
//   render: function(){
//     return (
//       <div id="blueimp-gallery" className="blueimp-gallery">
//       Photo Gallery
//       </div>
//     // <div id="blueimp-gallery" className="blueimp-gallery">
//     //   Photo Gallery
//     //   <div className="slides"></div>
//     //   <h3 className="title"></h3>
//     //   <a className="prev">‹</a>
//     //   <a className="next">›</a>
//     //   <a className="close">×</a>
//     //   <a className="play-pause"></a>
//     //   <ol className="indicator"></ol>
//     // </div>
//     );
//   }
// });

var ImageGallery = require('react-image-gallery');

var images = [
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    // originalClass: 'featured-slide',
    // thumbnailClass: 'featured-thumb',
    // description: 'Optional description...'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/2/',
    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/3/',
    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
  }
];

var PhotoGallery = React.createClass({
  handleSlide: function(index) {
    console.log('Slid to ' + index);
  },
  render: function() {
    return (
      <ImageGallery
        items={images}
        autoPlay={true}
        slideInterval={4000}
        onSlide={this.handleSlide}/>
    );
  }
});

const coords = {
  lat: 37.7833,
  lng: -122.4167
};

const CityMap = React.createClass({
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          onClick={this.onClick} />
      </Gmaps>
    );
  }
});

var Tabs = require('react-simpletabs');

var App = React.createClass({
  render: function(){
    return (
      <Tabs>
        <Tabs.Panel title = 'Photos'>
          <PhotoGallery />
        </Tabs.Panel>
        <Tabs.Panel title = 'Map'>
          <div id="map-container">
          <CityMap />
          </div>
        </Tabs.Panel>
        <Tabs.Panel title = 'Neighborhood'>
          <h2>Community here </h2>
        </Tabs.Panel>
        <Tabs.Panel title = 'Features'>
          <h2>Features here </h2>
        </Tabs.Panel> 
      </Tabs>
    );
  }
});


export class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering home_body ***');
    return (
       <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#">
                Profile Pic
              </a>
            </li>
            <li>
              <a href="#">Inbox</a>
            </li>
            <li>
              <a href="#">Saved List</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Preferences</a>
            </li>
          </ul>
        </div>
        <div id="page-content-wrapper">
          <div className="toggle-button"><a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Toggle Menu</a></div>
          <div className="container-fluid">
            <div className="tab-container">
             <App />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
