const Navbar = ({ title }) => {
  const networkProviders = ["Fido", "Koodo", "Freedom Mobile"];

  return (
    <div className="bg-transparent mx-auto max-w-screen-xl px-4">
      <div className="flex justify-between items-center py-4">
        <a href="/">
          <p className="text-3xl text-white font-bold">
            Mobile{" "}
            <span className="italic font-light text-bright-yellow">Matrix</span>
          </p>
        </a>
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {networkProviders.map((item) => (
                <li key={item}>
                  <a
                    href={`${item.toLowerCase()}`}
                    className={`${
                      title === item ? "text-bright-yellow" : "text-white"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost rounded-btn text-lg text-white"
                >
                  Explore
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-slate-900 rounded-box z-[1] mt-4 w-52 p-2 shadow"
                >
                  <li>
                    <a href="/best plans">Best Plan</a>
                  </li>
                  <li>
                    <a href="/text extractor">Text Extractor</a>
                  </li>
                  <li>
                    <a href="/page ranking">Page Ranking</a>
                  </li>
                  <li>
                    <a href="/frequency count">Frequency Count</a>
                  </li>
                  <li>
                    <a href="/search frequency">Search Frequency</a>
                  </li>
                </ul>
              </div>
              {networkProviders.map((item) => (
                <li key={item} className="text-lg px-1">
                  <a
                    href={`${item.toLowerCase()}`}
                    className={`${
                      title === item
                        ? "font-bold text-xl text-bright-yellow"
                        : "text-white"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
