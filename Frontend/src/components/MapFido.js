const MapFido = () => {
  return (
    <div
      id="sbuzz_content"
      className="container mt-5 h-auto w-full invert hue-rotate-180 rounded-lg overflow-hidden  pb-10"
    >
      <iframe
        title="fido"
        id="sbuzz_hdcv2"
        aria-label="Coverage Checker"
        width="100%"
        height="719.6"
        frameborder="0"
        allowtransparency="true"
        allow="geolocation"
        src="https://rog-ca.spatialbuzz.net/cust/593E2268_56C2EC83/hdcoverage/html/hdcv2.html?initWidth=1536&amp;customer=593E2268&amp;sub_customer=5BD6121E&amp;customer_enc=eFh0LHEcWG0ydycJV3ZbcmsxF18AUA9TAV8&amp;x=4&amp;ms=1721873234370&amp;msc=949454808&amp;cv=0000101100000&amp;co=true&amp;ccss=true&amp;ppf=fido-&amp;stcat=10&amp;gmkey=AIzaSyAm8UTlIq_XesCYuYifAGKsjoyvrWgLvKg#https%3A%2F%2Fwww.fido.ca%2Fmobility%2Fnetwork-coverage-map"
      ></iframe>
    </div>
  );
};

export default MapFido;
