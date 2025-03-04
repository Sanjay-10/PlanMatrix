import Title from "../components/Title";
import Navbar from "../components/Navbar";
import FileTextInputForm from "../components/FileTextInputForm";

const TextExtractor = ({ title }) => {
  return (
    <>
      <Navbar title={title} />
      <div className={`max-w-screen-xl mx-auto px-4 mt-10 min-h-screen`}>
        <Title title={"Text Extractor"} />
        <FileTextInputForm />
      </div>
    </>
  );
};

export default TextExtractor;
