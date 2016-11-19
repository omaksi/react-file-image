import React, { Component, PropTypes } from 'react';

export default class FileImage extends Component {

  static propTypes = {
    file: PropTypes.object.isRequired
  }

  componentDidMount(){
    this.img.file = this.props.file;
    const reader = new FileReader();
    reader.onload = ((e) => { this.img.src = e.target.result; });
    reader.readAsDataURL(this.props.file);
  }

  render() {
    // to prevent error about wrong props for key and file,
    // but pass all other props (width, height etc...)
    const { file, key, ...other } = this.props;

    return (
      <img ref={(img) => { this.img = img; }} { ...other }/>
    );
  }
}
