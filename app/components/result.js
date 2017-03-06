// Include React
var React = require("react");

var Result = React.createClass({
  render: function() {
    return (
      <div className="row">
      <div className="col s12">
         <div className="card grey darken-1">
            <div className="card-content white-text">
               <span className="card-title">Article Result</span>
               <div className="row">
                  <div className="input-field col s12">
                     <label htmlFor="topic" data-error="wrong" data-success="right">Topic</label>
                  </div>
               </div>
             
            </div>
            <div className="card-action">
               <a href="#/">Save</a>
                   </div>
         </div>
      </div>
   </div>
    );
  }
});

module.exports = Result;