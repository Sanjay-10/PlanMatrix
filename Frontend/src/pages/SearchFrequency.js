import Title from "../components/Title";
import Navbar from "../components/Navbar";
import useGetSearchFrequency from "../hooks/useGetSearchFrequency";

const SearchFrequency = ({ title }) => {
  const { data, error, loading } = useGetSearchFrequency();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <>
      <Navbar title={title} />
      <div className={`max-w-screen-xl min-h-screen mx-auto px-4 mt-10`}>
        <Title title={"Search Frequency"} />
        <div className="mt-10 flex flex-col">
          <p className="italic font-light text-lg text-white">
            The searched frequency count in this context measures how many times
            users have queried a specific word within the website. <br /> It
            reflects user search behavior and helps in identifying popular or
            trending terms based on search activity.
          </p>
          {data && data.length === 0 && (
            <p className="text-bright-yellow text-xl italic mt-3">
              No words searched yet!
            </p>
          )}
          {data && data.length > 0 && (
            <table className="table glass-morphism my-10 border rounded-lg">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Word</th>
                  <th>Search Count</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  const [pageName, count] = Object.entries(item)[0];
                  return (
                    <tr key={index}>
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
          )}
        </div>
      </div>
    </>
  );
};

export default SearchFrequency;
