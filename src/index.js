import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

import CameraAlt from "./icons/cameraAlt.svg";
import Close from "./icons/close.png";
export default class UploadImages extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  };
  state = {
    open: false
  };

  render() {
    const { text, style } = this.props;

    return (
      <div style={this.props.style ? this.props.style : null}>
 <div className={styles["container-upload-image"]}>
        <div className={styles["btn-upload-upload-image"]} onClick={this.openPopOver}>
          {
            //myIcon
          }
          <img src={CameraAlt} />
          <div
            className={styles["popOver-upload-image"]}
            style={{ display: this.state.open ? "flex" : "none" }}
          >
            <div
              className={styles["btn-choose-upload-image"]}
              onClick={this.OpenCloseDialog}
            >
              <img src={CameraAlt} />

              {
                //myIcon
              }
            </div>

            <label className={styles["btn-choose-upload-image"]} htmlFor={this.props.id}>
              Upload Image From your coputer
            </label>

            {
              //upload from computer input
            }
            <input type="file" style={{ display: "none" }} id={this.props.id} />

            {
              //camera input
            }
            <input type="file" style={{ display: "none" }} id={this.props.id} />
          </div>
          </div>


          <div className={styles["images-container-upload-image"]} >

          <div className={styles["image-upload-image-container"]}>
            <img src="https://www.online-image-editor.com/help/images/exmpl_start.jpg" className={styles["image-upload-image"]} />
            <span className={styles["image-name-upload-image"]}>
              lorem lorem lorem lorem lorem
            </span>
            <span className={styles["image-close-upload-image"]}>
              <img src={Close} />
            </span>
          </div>


         
        </div>
      </div>
      </div>
     
    );
  }
}
