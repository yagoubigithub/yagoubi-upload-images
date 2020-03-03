import React, { Component } from "react";

import UploadImages from "yagoubi-upload-images";

export default class App extends Component {
  
  constructor (props){
    super(props);
    this.UploadImagesInput = React.createRef()

  }
  onError = error => {
    console.log(error.message);
  };
  onChange = images => {
    console.log(images);
  };
  reset =  () =>{
 
   
   this.UploadImagesInput.current.addImages("C:/Users/Public/Pictures/Sample Pictures/Hydrangeas - Copie.jpg");

   
  }
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
          ref={this.UploadImagesInput}
        />

        <div className="App">
          <UploadImages placeholder="default..."  />

          <h4>multi images</h4>
          <UploadImages
            placeholder="upload multi images..."
            multiple
            color="#FFDC00"
          
          />
        </div>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
