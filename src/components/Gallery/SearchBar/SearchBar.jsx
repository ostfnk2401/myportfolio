import { Component } from 'react';

import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchFormInput,
  SearchIcon,
} from './SearchBar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setQuery(this.state.input);
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchIcon />
          </SearchButton>
          <SearchLabel>
            <span>Search</span>
          </SearchLabel>
          <SearchFormInput
            type="text"
            value={this.state.input}
            placeholder="Search images"
            onChange={e => this.setState({ input: e.target.value })}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

Searchbar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
