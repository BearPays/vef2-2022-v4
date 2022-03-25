import ReactLoading from "react-loading";
import s from "./LoadingPage.module.scss";
import React from "react";
import PropTypes from 'prop-types';

LoadingPage.propTypes = {
  text: PropTypes.string,
};

export function LoadingPage() {
  return (
    <div className={s.loading}>
      <ReactLoading type="spin" color="#fff">
      </ReactLoading>
      <p>'Hleður síðu'</p>

    </div>
  );
}
