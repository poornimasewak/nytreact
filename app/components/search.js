// Requiring react npm Package.
var React = require("react");
var Result = require("./result");
// var axios = require("axios");

var helper = require("./utils/helpers");
// Create a new class and assign it in a variable Main.
var Search = React.createClass({

    getInitialState: function(){

		return {
			topic: "",
			start_year: "",
			end_year: "",
			results: {}
		}
	},
  onChangeTopic: function(event){
      this.setState({
          topic: event.target.value
      })
  },
  onChangeStartYear: function(event){
      this.setState({
          start_year: event.target.value
      })
  },
  onChangeEndYear: function(event){
      this.setState({
          end_year: event.target.value
      })
  },
   handleSubmit: function (event) {
     helper.runQuery(this.state.topic);
      console.log(event);
    },

    // Render things for this component.
     render: function () {
        return (
          <div>
            <div className="row">
                  <div className="col s12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Search Article</span>
               
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="topic" type="text" className="validate" onChange={this.onChangeTopic} />
                                            <label htmlFor="topic" data-error="wrong" data-success="right">Topic</label>
                                            You typed: <code>{this.state.topic}</code>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="start_year" type="text" className="validate" onChange={this.onChangeStartYear}/>
                                            <label htmlFor="start_year" data-error="wrong" data-success="right">Start Year</label>
                                            You typed: <code>{this.state.start_year}</code>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="end_year" type="text" className="validate" onChange={this.onChangeEndYear} />
                                            <label htmlFor="end_year" data-error="wrong" data-success="right">End Year</label>
                                            You typed: <code>{this.state.end_year}</code>
                                        </div>
                                    </div>
              
                                </div>
                                <div className="card-action">
                                    <button type='submit'>Search</button>
                                </div>
                                {this.props.children}
                            </div>
                        </form>
                        <div id="dispResult">
                        
                    </div>
                    </div>
                    {/*<div id="dispResult">
                        
                    </div>*/}
             </div>
        </div>
        ); 
    }

 });
// React.render(<Input/>, document.querySelector('div'));
 module.exports = Search;
