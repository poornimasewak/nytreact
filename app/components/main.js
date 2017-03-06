// Requiring react npm Package.
var React = require("react");
// var Search = require("./search");


// Create a new class and assign it in a variable Main.
var Main = React.createClass({

    getData: function () {

    },
    // Render things for this component.
     render: function () {
        return (
            <div>
                <div className="row">
                 <div className="col s12">
                        <div className="card">
                            <div className="card-image">
                                <img src="./img/img1.jpg" height="200px" />
                            </div>
                            <div className="card-content" style= {{textalign: 'center'}}>
                                <p><span style={{fontsize: '24px', textdecoration: 'underline'}}> New York Times Article Scrubber</span><br />Search for and annotate articles of interest!
                                </p>
                                <p>
                                    <a href='#/search'>Search Articles </a>
                                     | <a href='#/saved'>Saved Articles</a>
                                </p>
                            </div>
                        </div>
                 </div>
                 
            {this.props.children}
            </div>
            </div>
        );
    }
});

module.exports = Main;
