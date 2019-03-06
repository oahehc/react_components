import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Modal extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className="modal__wrapper">
        <div className="modal__body">Modal</div>
      </div>
    );
  }
}
