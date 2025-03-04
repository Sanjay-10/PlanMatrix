function Title({ title, margin }) {
  return (
    <div className="relative">
      <div className={`text-white text-3xl font-poppins font-bold ${margin}`}>
        {title}
      </div>
      <div className="after:content-[''] pt-2 after:w-10 after:h-1 after:bg-dark-pink after:rounded-lg after:block"></div>
    </div>
  );
}

export default Title;
