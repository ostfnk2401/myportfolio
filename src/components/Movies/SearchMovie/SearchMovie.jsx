import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchButton,
  SearchForm,
  SearchFormInput,
  SearchHeader,
  SearchIcon,
  SearchLabel,
} from './SearchMovie.styled';

export class SearchMovie extends Component {
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
            placeholder="Search movies"
            onChange={e => this.setState({ input: e.target.value })}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

SearchMovie.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
