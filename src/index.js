import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

import CameraAlt from "./icons/cameraAlt.svg";
import Close from "./icons/close.png";
export default class UploadImages extends Component {
 
  state = {
    open: true
  };

  render() {
    const { id, style } = this.props;
    const id_upload_from_camera = `${id}_upload_from_camera`;
    const id_upload_from_device = `${id}_upload_from_device`;

    return (
      <div style={style ? style : null}>
        <div className={styles["container-upload-image"]}>
          <div
            className={styles["btn-upload-upload-image"]}
            onClick={this.openPopOver}
          >
            {
              //myIcon
            }
            <img src={CameraAlt} />
            <div
              className={styles["popOver-upload-image"]}
              style={{ display: this.state.open ? "flex" : "none" }}
            >
              <label
                htmlFor={id_upload_from_camera}
                className={styles["btn-choose-upload-image"]}
                onClick={this.OpenCloseDialog}
              >
                {
                  //myIcon
                }

                <img src={CameraAlt} />
              </label>

              <label
                className={styles["btn-choose-upload-image"]}
                htmlFor={id_upload_from_device}
              >
                Upload Image From your coputer
              </label>

              {
                //camera input
              }
              <input
                type="file"
                style={{ display: "none" }}
                id={id_upload_from_camera}
                capture="camera"
              />
              {
                //upload from device input
              }
              <input
                type="file"
                style={{ display: "none" }}
                id={id_upload_from_device}
              />
            </div>
          </div>

          <div className={styles["images-container-upload-image"]}>
            <div className={styles["placeholder-upload-image"]}>
              lorem lorem lorem lorem lorem lorem lorem lor em lort emlor gl
            </div>

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
          </div>
        </div>
      </div>
    );
  }
}
