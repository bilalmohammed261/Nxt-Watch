import {BsSearch} from 'react-icons/bs'

import './index.css'

const SearchFilter = props => {
  const {enterSearchInput, changeSearchInput} = props
  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onClickSearch = () => {
    enterSearchInput()
  }

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }
  const {searchInput} = props
  return (
    <div className="search-input-container">
      <input
        value={searchInput}
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}
      />
      <button type="button" className="search-button" onClick={onClickSearch}>
        <BsSearch className="search-icon" />
      </button>
    </div>
  )
}

export default SearchFilter
