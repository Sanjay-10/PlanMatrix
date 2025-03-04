const MapFreedom = () => {
  return (
    <div
      style={{ height: "700px" }}
      className="container mt-5 w-full invert hue-rotate-180 rounded-lg overflow-hidden pb-10"
    >
      <iframe
        data-testid="webpage-iframe"
        src="https://dnyepvvjamjdg.cloudfront.net/couvertureVideotron/coverageFreedom.html"
        scrolling="no"
        name="Iframe > Network Coverage"
        title="Iframe > Network Coverage"
        allow="geolocation"
        class="h-full w-full"
      ></iframe>
    </div>
  );
};

export default MapFreedom;
