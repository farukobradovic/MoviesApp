import React from "react";

interface IProps {
  text: string;
  setText: (text: string) => void;
}

const Search: React.FC<IProps> = ({ text, setText }) => {
  const handleInputChange = (e: any) => {
    setText(e.target.value);
  };
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search...'
        value={text}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
