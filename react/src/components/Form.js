import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {

  state = {
    searchValue: ''
  }

  componentDidMount() {

    const { history, query } = this.props;
    if (history.location.search != "") {
      let params = new URLSearchParams(history.location.search);
      const query = params.get("q");
      this.props.fetchGif(query);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== null) {
      this.setState({ searchValue: nextProps.query });
    }
  }

  handleClearInput() {
    this.setState({ searchValue: '' });
  }

  handleSubmit = (e) => {

    e.preventDefault();
    this.props.fetchGif(this.state.searchValue);
    this.props.history.push(`/?q=${this.state.searchValue}`)
  };

  handleInputChange = (evt) => {
    this.setState({ searchValue: evt.target.value });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="searchIcon">
          <button className="fa fa-search"></button>
        </div>
        <input
          ref={(input) => this.textInput = input}
          name="q"
          type="text"
          value={this.state.searchValue}
          onChange={this.handleInputChange}
        />
        {searchValue && searchValue.length > 0 ?
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