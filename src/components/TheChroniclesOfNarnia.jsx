import React, { useState, useEffect } from "react";

function TheChroniclesOfNarnia() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const Fetch = async () => {
      const r = await fetch(
        "http://www.omdbapi.com/?apikey=97c0c760&s=The+Chronicles+of+Narnia"
      );
      const data = await r.json();
      setData(data.Search);
    };
    Fetch();
  }, []);
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center px-1">
        {data ? (
          data.slice(0, 6).map((TheChroniclesOfNarnia) => (
            <div key={TheChroniclesOfNarnia.imdbID} className="col mb-2 px-2">
              <img
                className="img-fluid"
                src={TheChroniclesOfNarnia.Poster}
                alt={TheChroniclesOfNarnia.Title}
                style={{ width: "235px", height: "300px" }}
              />
            </div>
          ))
        ) : (
          <div
            className="spinner-border text-white mx-auto"
            role="status"
          ></div>
        )}
      </div>
    </>
  );
}

export default TheChroniclesOfNarnia;
