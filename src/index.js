import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

import CameraAlt from "./icons/cameraAlt.svg";
import Close from "./icons/close.png";
import publishIcon from "./icons/publishIcon.svg";
export default class UploadImages extends Component {
 
  state = {
    open: false,
    images : [],
    isMobile : false
  };
  openPopOver = () =>{
    this.setState({open : !this.state.open})
  }




  componentWillMount(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      // if is mobile
      this.setState({isMobile : true})

     }
  }
  clickOpenFromDevice = () =>{
    if(!this.state.isMobile)
     document.getElementById('upload_from_device_label_id').click();
   
  }
  render() {
    const { id, style,placeholder } = this.props;
    const id_upload_from_camera = `${id}_upload_from_camera`;
    const id_upload_from_device = `${id}_upload_from_device`;
    const color  = this.props.color ?  this.props.color : "#0074D9";

    return (
      <div style={style ? style : null}>
        <div className={styles["container-upload-image"]}>
          <div
            className={styles["btn-upload-upload-image"]}
            onClick={this.state.isMobile ? this.openPopOver : this.clickOpenFromDevice }
            style={{backgroundColor : color}}
          >
            {
              //myIcon
            }
            <img src={CameraAlt} />
            <div
              className={styles["popOver-upload-image"]}
              style={{ display: this.state.open ? "flex" : "none",backgroundColor :color }}

            >
              <label
                htmlFor={id_upload_from_camera}
                className={styles["btn-choose-upload-image"]}
               
              >
                {
                  //myIcon
                }

                <img src={CameraAlt} />
              </label>

              <label
                className={styles["btn-choose-upload-image"]}
                htmlFor={id_upload_from_device}
                id="upload_from_device_label_id"
              >
               <img src={publishIcon} />
              </label>

              {
                //camera input
              }
              <input
                type="file"
                style={{ display: "none" }}
                id={id_upload_from_camera}
                capture="camera"
                accept="image/*"
              />
              {
                //upload from device input
              }
              <input
                type="file"
                style={{ display: "none" }}
                id={id_upload_from_device}
                accept="image/*"
              />
            </div>
          </div>

          <div className={styles["images-container-upload-image"]}>

          {this.state.images.length == 0  ? <div className={styles["placeholder-upload-image"]}>
             {placeholder ? placeholder : null}
            </div>: null}
            

           

{
  /*
   <div className={styles["image-upload-image-container"]}>
              <img
                src="https://www.online-image-editor.com/help/images/exmpl_start.jpg"
                className={styles["image-upload-image"]}
              />
              <span className={styles["image-name-upload-image"]}>
                lorem lorem lorem lorem lorem
              </span>
              <span className={styles["image-close-upload-image"]}>
                <img src={Close} />
              </span>
            </div>
  */
}



          </div>
        </div>
      </div>
    );
  }
}
