import React from "react";

interface IProps {
  moviesClicked: boolean;
  setMoviesClicked: (clicked: boolean) => void;
}

const Buttons: React.FC<IProps> = ({ setMoviesClicked, moviesClicked }) => {
  return (
    <>
      <div className='buttons'>
        <button
          className={moviesClicked ? "button active" : "button"}
          onClick={() => setMoviesClicked(true)}
        >
          Movies
        </button>
        <button
          className={moviesClicked ? "button" : "button active"}
          onClick={() => setMoviesClicked(false)}
        >
          TV Shows
        </button>
      </div>
    </>
  );
};

export default Buttons;
