import React from 'react';


class TableRow extends React.Component{
  render(){
    return(
      <div className={this.props.color+ " "+ this.props.class + " tableRow centerParent col-xs-12"}>
        <div className="col-xs-1  centerChildVertically">{this.props.position}</div>
        <div className="col-xs-10  centerChildVertically">{this.props.name}</div>
        <div className="col-xs-1  centerChildVertically">{this.props.points + "p"}</div>
      </div>
    );
  }
}

export default TableRow;
