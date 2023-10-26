import {
  SearchButton,
  SearchForm,
  SearchFormInput,
  SearchHeader,
  SearchIcon,
  SearchLabel,
} from './SearchMovie.styled';

export const SearchMovie = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.query;
    onSubmit(value);
    event.target.reset();
  };
  return (
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
        <SearchLabel>
          <span>Search</span>
        </SearchLabel>
        <SearchFormInput
          type="text"
          name="query"
          required
          placeholder="Search movies"
        />
      </SearchForm>
    </SearchHeader>
  );
};
