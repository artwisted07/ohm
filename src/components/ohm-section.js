import React from 'react';

export default class OhmSection extends React.Component {
    constructor(){
        super();
        this.state ={
            color:"none"
        }
    }
    render() {
        const {colors = [] } = this.props;

        return ( < div className = "medium-3 column" >
            < div className = "colorSection" >
            < h3 > {this.props.section} < /h3> < label > CHOOSE A COLOR

            < select ref={c => this._color = c} onChange={this._setValue.bind(this)}> {
                colors.map((color, i) => ( 
            < option key={i} value = {color} > { color} < /option>

                ))
            } < /select> < /label> < /div> < /div>

        )
    }
    
   _setValue(){
    this.setState({
      color: this._color.value
    });
   }

}
