import React, { useState } from 'react';

interface ISearchBarProps {
  placeholder: string;
  value: string;
}

function SearchBar({placeholder, value}: ISearchBarProps) {
  const [textInput, setTextInput] = useState('');

  return (
    <div>
      <input placeholder={placeholder} value={textInput} onChange ={(e) => setTextInput(e.target.value) }/>
      <button type="button">Tìm kiếm</button>
    </div>
  );
}

export default SearchBar;