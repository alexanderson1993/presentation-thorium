import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";
import { Deck, Slide } from "spectacle";
import Layout from "./presentation/layout";
import components from "./presentation/components";
import slides, { transitions } from "./presentation/index.mdx";
import theme from "./presentation/theme";

require("normalize.css");

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

const creeperTransition = (transitioning, forward) => {
  const offset = forward ? 2 : 0;
  return {
    transform: `scale(${transitioning ? offset : 1})`,
    opacity: transitioning ? 0 : 1
    // transform: `
    //   translate3d(0,${transitioning ? offset : 0}%, 0)
    // `
  };
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Layout>
      <Deck
        transition={[creeperTransition]}
        transitionDuration={500}
        theme={theme}
        progress={"bar"}
      >
        {slides.map((S, i) => {
          let transition = transitions[i] || null;
          return <S transition={transition} key={`slide-${i}`} />;
        })}
      </Deck>
    </Layout>
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept(() => {
    const newTheme = require("./presentation/theme").default;
    const newSlides = require("./presentation/index.mdx").default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <Deck
          transition={[creeperTransition]}
          transitionDuration={500}
          theme={newTheme}
        >
          {newSlides.map((S, i) => {
            let transition = transitions[i] || null;
            return <S transition={transition} key={`slide-${i}`} />;
          })}
        </Deck>
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
