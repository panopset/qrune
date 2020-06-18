import React from 'react';

export default class Config extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { vw: '1000', vh: '1000'};
    this.handleChangeW = this.handleChangeW.bind(this);
    this.handleChangeH = this.handleChangeH.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeW(event) {
    this.setState({ vw: event.target.value });
  }

  handleChangeH(event) {
    this.setState({ vh: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.open("/", "_self");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table><tbody><tr><td>Width:</td><td>
<input type="text" value={this.state.vw} onChange={this.handleChangeW} />
        </td></tr><tr><td>Height:</td><td>
<input type="text" value={this.state.vh} onChange={this.handleChangeH} />
        </td></tr></tbody></table>
      <input type="submit" value="Submit" />
      </form >
    )
  }

}