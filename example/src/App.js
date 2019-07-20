import React, { Component } from "react";

import UploadImages from "yagoubi-upload-images";

export default class App extends Component {
  onError = error => {
    console.log(error.message);
  };
  onChange = images => {
    console.log(images);
  };
  render() {
    return (
      <div>
        <UploadImages
          maxImageSize="1000000"
          onChange={images => this.onChange(images)}
          onError={error => this.onError(error)}
          placeholder="Hello world"
          multiple
          id={"Hello_world"}
          maxImages={2}
        />
      </div>
    );
  }
}
