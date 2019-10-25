import React from "react";

const speakers = [
  {
    images: ["tomocchino.jpg"],
    text: "I wonder if I can make great UI easier to make."
  },
  { images: ["yuzhi.jpg"], text: "I wonder how to improve user experience." },
  { images: ["frank.jpg"], text: "I wonder if I can make scalable CSS." },
  {
    images: ["ashley.jpg"],
    text: "I wonder how to speed up data fetching and rendering."
  },
  {
    images: ["_Tany_.jpg"],
    text: "I wonder how to save the world through sharing food."
  },
  {
    images: ["tejaskumar_.jpg"],
    text: "I wonder if have end-to-end typechecking with REST."
  },
  {
    images: ["sophiebits.jpg"],
    text: "I wonder how to make a custom React renderer."
  },
  { images: ["tesseralis.jpg"], text: "I wonder: Is React Translated Yet?" },
  {
    images: ["majapw.jpg", "taekimjr.jpg"],
    text:
      "I wonder how to balance constraint and flexibility in design systems."
  },
  {
    images: ["brittanyIRL.jpg"],
    text: "I wonder how to help everyone with A11y."
  },
  { images: ["beccaliz.jpg"], text: "I wonder how to manage state in 2019." },
  {
    images: ["leeb.jpg"],
    text: "I wonder how web development will change in 20 years."
  },
  {
    images: ["ebsalita.jpg"],
    text: "I wonder how to make government apps more modern and transparent."
  }
];

const Speakers = () => {
  console.log(speakers);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "60vh"
      }}
    >
      {speakers.map(({ images, text }) => {
        return (
          <div
            key={text}
            style={{ display: "flex", fontSize: "22px", marginBottom: "5px" }}
          >
            <div style={{ marginRight: "10px" }}>
              {images.map(i => (
                <img
                  style={{ borderRadius: "50%", height: "50px" }}
                  key={i}
                  src={require(`../../assets/speakers/${i}`)}
                  alt={i}
                />
              ))}
            </div>
            {text}
          </div>
        );
      })}
    </div>
  );
};

export default Speakers;
