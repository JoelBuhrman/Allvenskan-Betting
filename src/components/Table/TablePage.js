import React from 'react';
import TableRow from './TableRow';

class TablePage extends React.Component {
  render() {
    var rows=[];
    var col= "gray";
    var pos="firstPos";
    for(var i=1; i<=6; i++){
      if(i==2){
        pos="";
      }
      if(i==6){
        pos="lastPos";
      }
      if(i%2!=0){
        col="white";
      }
      else{
        col="gray";
      }
      rows.push(<TableRow color={col} position ={i} name="JoelBuhrman" points="4" class={pos}/>);
    }


    return (
      <div className="myMargin container">
        {rows}
      </div>
    );
  }
}

export default TablePage;
