

// Requiring react npm Package.
var React = require("react");

// Create a new class and assign it in a variable Main.
var Saved = React.createClass({

    // Render things for this component.
     render: function () {
        return (
    <div className="row">
      <div className="col s12">
         <div className="card blue-grey darken-1">
            <div className="card-content white-text">
               <span className="card-title">Saved Articles</span>
               <div className="row">
                  <div className="input-field col s12">
                     <label htmlFor="topic" data-error="wrong" data-success="right">Topic</label>
                  </div>
               </div>
             
            </div>
            <div className="card-action">
               <a href="#/">Remove</a>
                   </div>
         </div>
      </div>
   </div>
        ); }
});

module.exports = Saved;