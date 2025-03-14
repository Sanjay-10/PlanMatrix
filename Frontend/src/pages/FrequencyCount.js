import { useState } from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import useSpellChecker from "../hooks/useSpellChecker";
import useWordCompleter from "../hooks/useWordCompleter";
import useFrequencyCount from "../hooks/useFrequencyCount";
import useAddSearchFrequency from "../hooks/useAddSearchFrequency";

const FrequencyCount = ({ title }) => {
  const [word, setWord] = useState("");
  const [wordSearch, setWordSearch] = useState("");
  const { data: wordCompleter } = useWordCompleter(word);
  const { addSearchFrequency } = useAddSearchFrequency();
  const { data, error, loading, getFrequencyCount } = useFrequencyCount();
  const { data: dataSpellCheckerData, getSpellChekcer } = useSpellChecker();

  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setWord(suggestion);
    setWordSearch(suggestion);
  };

  const handleSearchClick = () => {
    setWordSearch(word);
    getSpellChekcer(word);
    getFrequencyCount(word);
    addSearchFrequency(word);
    setWord("");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <>
      <Navbar title={title} />
      <div
        className={`max-w-screen-xl ${
          data === null || data.length === 0 ? "h-screen" : "h-full"
        } mx-auto px-4 mt-10`}
      >
        <Title title={"Frequency Count"} />
        <div className="mt-10 flex flex-col">
          <p className="italic font-light text-lg text-white">
            The frequency count algorithm calculates the number of occurrences
            of each word in a given text. <br /> It helps identify the most
            common words and their distribution within the text.
          </p>
          <div className="relative flex flex-row mt-5 gap-5">
            <input
              type="text"
              value={word}
              placeholder="Type here"
              onChange={handleInputChange}
              className="input input-bordered w-full text-bright-yellow"
            />
            {wordCompleter && wordCompleter.length > 0 && (
              <ul className="z-10 absolute bg-gray-800 border border-gray-600 mt-14 w-full rounded-lg shadow-lg">
                {wordCompleter.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={handleSearchClick}
              className="btn btn-wide border-none bg-hot-pink text-white hover:bg-bright-yellow hover:text-black"
            >
              <svg
                fill="black"
                viewBox="0 0 16 16"
                className="h-4 w-4 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="mt-5">
            {data && data.length > 0 && (
              <p className="text-bright-yellow text-xl italic mb-3">
                Showing results for "{wordSearch}"
              </p>
            )}

            {data && data.length > 0 ? (
              <table className="table glass-morphism my-10 border rounded-lg">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Page Name</th>
                    <th>Word Count</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    const [pageName, count] = Object.entries(item)[0];
                    return (
                      <tr>
                        <th>
                          <p className="w-min px-3 text-bright-yellow">
                            {index + 1}
                          </p>
                        </th>
                        <td>
                          <p
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-3 text-white"
                          >
                            {pageName}
                          </p>
                        </td>
                        <td>
                          <p className="w-min px-3 text-bright-yellow font-bold">
                            {count}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : data === null ? (
              <></>
            ) : (
              <div>No results found</div>
            )}
            {data !== null &&
            data.length === 0 &&
            dataSpellCheckerData !== null ? (
              <>
                <p className="text-white text-xl italic mb-3">Did you mean?</p>
                <div className="flex flex-row gap-5">
                  {dataSpellCheckerData.map((suggestion) => (
                    <div
                      onClick={() => {
                        setWordSearch(suggestion.word);
                        getFrequencyCount(suggestion.word);
                      }}
                      className="badge bg-bright-yellow text-black"
                    >
                      {suggestion.word}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequencyCount;
