import React, { Component } from 'react';

import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 36.98,
      lng: 9.58
    },
    zoom: 9
  };

  render() {
    return (
        

     
        <Map 
         
 

        


        google={this.props.google}
      zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 36.9887255271239, lng: 9.085931209365622}}
      >
          <Marker key="marker_1"

position={{

    lat: 36.85055133881499,

    lng: 8.770625470534904

}}

/>

</Map>


    
      
    );
    
  }

}


const mapStyles = {
    width: '59.5%',
    height: '50%',
    
    
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA-TxBW2yWMkY3cDMaQ_YE0_ui9yvrAX70'
  })(GoogleMaps);

 