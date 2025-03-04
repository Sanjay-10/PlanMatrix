import React, { useState } from "react";
import useDataExtractor from "../hooks/useDataExtractor";

const FileTextInputForm = () => {
  const [file, setFile] = useState(null);
  const [domain, setDomain] = useState("");
  const [fileError, setFileError] = useState("");
  const { extract, loading, error, data } = useDataExtractor();

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setFileError("Please select a text file.");
      return;
    }
    if (file && domain) {
      extract(file, domain);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="domain"
          >
            Domain
          </label>
          <input
            id="domain"
            type="text"
            value={domain}
            onChange={handleDomainChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
          >
            File Input
          </label>
          <input
            id="file"
            type="file"
            onChange={handleFileChange}
            className="input input-bordered w-full"
            required
          />
          {fileError && <p className="text-red-500 mt-2">{fileError}</p>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Processing..." : "Submit"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      {data && (
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Processed Data:</h3>
          <div className="mb-4">
            <h4 className="font-semibold">Emails Validated</h4>
            <ul>
              {data.emailsValidated.map((item, index) => (
                <li
                  key={index}
                  className={item.isValid ? "text-green-600" : "text-red-600"}
                >
                  {item.email} - {item.isValid ? "Valid" : "Invalid"}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Phone Numbers</h4>
            <ul>
              {data.phoneNumbers.map((item, index) => (
                <li
                  key={index}
                  className={item.isValid ? "text-green-600" : "text-red-600"}
                >
                  {item.number} - {item.isValid ? "Valid" : "Invalid"}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">URLs</h4>
            <ul>
              {data.url.map((url, index) => (
                <li key={index}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Dates</h4>
            <ul>
              {data.date.map((date, index) => (
                <li key={index}>{date}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileTextInputForm;
