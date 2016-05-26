import React from 'react';
import jQuery from 'jquery';
import OhmSection from './ohm-section';

export default class OhmBox extends React.Component {

  constructor() {
    super();

    this.state = {
      showComments: false,
    };
  }


  render() {
  const colorSet1 =["None","Brown","Red","Orange","Yellow", "Green","Blue","Violet","Gray","White"];
  const colorSet2 =["None","Black","Brown","Red","Orange","Yellow", "Green","Blue","Violet","Gray","White"];
  const colorSet3 =["None","Black","Brown","Red","Orange","Yellow", "Green","Blue","Gold","Silver"];
  const colorSet4 =["None","Brown","Red","Gold","Silver"];
    
    return(
        <div>
        <div className="medium-12 columns">
         <h2>OHM CALCULATOR</h2>
        </div>
        
        <div className="row">
         <OhmSection ref="band1" section="BAND 1" colors={colorSet1}/>
         <OhmSection ref="band2" section="BAND 2" colors={colorSet2}/>
         <OhmSection ref="band3" section="BAND 3" colors={colorSet3}/>
         <OhmSection ref="band4" section="BAND 4" colors={colorSet4}/>
        </div>
        
        <div className="row">
            <div id="submitarea" className="small-12 medium-12 columns">
                <button className="button" onClick={this._getCalculation.bind(this)}>CALCULATE</button>
    <div className="results"></div>
            </div>
        </div>
    </div>
    );
  }

_getCalculation(e){
    e.preventDefault;
    let band1 = this._convertValue1(this.refs.band1.state.color);
    let band2 = this._convertValue1(this.refs.band2.state.color);
    let band3 = this.refs.band3.state.color;
    let band4 = this._tolerance(this.refs.band4.state.color);
    
    switch(band3){
        case 'Black': jQuery(".results").html(band1 + "" + band2 +" Ohms " + band4);
        break;
        case 'Brown': jQuery(".results").html(band1 + "" + band2 +"0 Ohms " + band4)
        break;
        case 'Red': jQuery(".results").html(band1 + "." + band2 +"k Ohms " + band4)
        break;
        case 'Orange': jQuery(".results").html(band1 + "" + band2 +"k Ohms " + band4)
        break;
        case 'Yellow': jQuery(".results").html(band1 + "" + band2 +"0k Ohms " + band4)
        break;
        case 'Green': jQuery(".results").html(band1 + "." + band2 +"M Ohms " + band4)
        break;
        case 'Blue': jQuery(".results").html(band1 + "" + band2 +"M Ohms " + band4)
        break;
        case 'Gold': jQuery(".results").html(band1 + "." + band2 +" Ohms " + band4)
        break;
        case 'Silver': jQuery(".results").html("0." + band1 + "" + band2 +" Ohms " + band4)
        break;
        
    }
}

_convertValue1(color){
  switch(color){
      case 'Black': return 0;
      break;
      case 'Brown': return 1;
      break;
      case 'Red': return 2;
      break;
      case 'Orange': return 3;
      break;
      case 'Yellow': return 4;
      break;
      case 'Green': return 5;
      break;
      case 'Blue': return 6;
      break;
      case 'Violet': return 7;
      break;
      case 'Gray': return 8;
      break;
      case 'White': return 9;
      break;
      default: "nooone";
  }
    
}


_tolerance(color){
    switch(color){
        case 'Brown': return "1%";
        break;
        case 'Red': return "2%";
        break;
        case 'Gold': return "5%";
        break;
        case 'Silver': return "10%";
        break;
         case 'None': return "";
        break;
    }
}

}


