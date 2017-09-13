import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {

  state = {
    searchValue: ''
  }

  componentDidMount() {
    const { history } = this.props;
    if (history.location.search !== '') {
      let params = new URLSearchParams(history.location.search);
      const query = params.get("q");
      this.props.fetchGif(query);
      this.setState({ searchValue: query });
    }
  }

  handleClearInput() {
    this.setState({ searchValue: '' });
  }

  handleSubmit = (e) => {

    e.preventDefault();
    const { searchValue } = this.state;
    this.props.fetchGif(searchValue);
    this.props.history.push(`/?q=${searchValue}`)
  };

  handleInputChange = (evt) => {
    this.setState({ searchValue: evt.target.value });
  };

  render() {
    const { searchValue } = this.state;
    const { history } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="searchIcon">
          <button className="fa fa-search"></button>
        </div>
        <input
          ref={(input) => this.textInput = input}
          name="q"
          type="text"
          value={searchValue}
          onChange={this.handleInputChange}
        />
        {searchValue.length > 0 ?
          <span
            className="button-clear fa fa-times"
            onClick={() => this.handleClearInput()}
          />
          : null}
      </form>
    )
  }
}

export default Form;