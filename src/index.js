import React, { Component } from "react";

import styles from "./styles.css";

import CameraAlt from "./icons/cameraAlt.svg";
import Close from "./icons/close.png";
import publishIcon from "./icons/publishIcon.svg";
export default class UploadImages extends Component {
  state = {
    open: false,
    images: [],
    isMobile: false,
    urls: [],
    image: null,
    modal: false
  };
  openPopOver = () => {
    this.setState({ open: !this.state.open });
  };

  componentWillMount() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // if is mobile
      this.setState({ isMobile: true });
    }
  }
  clickOpenFromDevice = id => {
    if (!this.state.isMobile) document.getElementById(id).click();
  };
  onChange = (ref) => {
    let images = [...this.state.images];
    if (this.props.multiple === undefined || this.props.multiple === false) {
      
      images = [];
    }
    let files = ref.files;
   
    Object.keys(files).map(i=>{
      const image  =files[i];
      
    if (images.filter(img => image.name === img.name).length > 0) {
      return;
    }

    if (this.props.maxImageSize !== undefined) {
      if (image.size < this.props.maxImageSize) {
        //Min image Size :
        if (this.props.minImageSize !== undefined) {
          if (image.size > this.props.minImageSize) {
            //Tes Max images
            if (this.props.maxImages !== undefined) {
              if (images.length < this.props.maxImages) {
                images.push(image);
                this.setState({ images });
                
              } else {
                //error maxImages
                this.onError({
                  type: "maxImages",
                  message:
                    "The maximum number of images is : " + this.props.maxImages
                });
              }
            } else {
              //fourth else
              images.push(image);
              this.setState({ images });
              
            }
          } else {
            //error min size
            this.onError({
              type: "minImageSize",
              message:
                "The minimum size of image is : " + this.props.minImageSize
            });
          }
        } else {
          //third else
          //Tes Max images
          if (this.props.maxImages !== undefined) {
            if (images.length < this.props.maxImages) {
              images.push(image);
              this.setState({ images });
              
            } else {
              //error maxImages
              this.onError({
                type: "maxImages",
                message:
                  "The maximum number of images is : " + this.props.maxImages
              });
            }
          } else {
            images.push(image);
            this.setState({ images });
            
          }
        }
      } else {
        //error max size
        this.onError({
          type: "maxImageSize",
          message: "The maximum size of image is : " + this.props.maxImageSize
        });
      }
    } else {
      //second else
      if (this.props.minImageSize !== undefined) {
        if (image.size > this.props.minImageSize) {
          //Tes Max images
          if (this.props.maxImages !== undefined) {
            if (images.length < this.props.maxImages) {
              images.push(image);
              this.setState({ images });
              
            } else {
              //error maxImages
              this.onError({
                type: "maxImages",
                message:
                  "The maximum number of images is : " + this.props.maxImages
              });
            }
          } else {
            //fourth else
            images.push(image);
            this.setState({ images });
            
          }
        } else {
          //error min size
          this.onError({
            type: "minImageSize",
            message: "The minimum size of image is : " + this.props.minImageSize
          });
        }
      } else {
        //Tes Max images
        if (this.props.maxImages !== undefined) {
          if (images.length < this.props.maxImages) {
            images.push(image);
            this.setState({ images });
            
          } else {
            //error maxImages
            this.onError({
              type: "maxImages",
              message:
                "The maximum number of images is : " + this.props.maxImages
            });
          }
        } else {
          images.push(image);
          this.setState({ images });
         
        }
      }
    }
    })
    


    ref.value = "";
    this.setState({ open: false });
    if (this.props.onChange !== undefined) this.props.onChange(images);
  };
  uid = () => {
    const uid = `${Math.random()
      .toString(36)
      .slice(2)}-${Date.now().toString(36)}`;

    return uid;
  };

  reset = () =>{
    this.setState({
       open: false,
    images: [],
    isMobile: false,
    urls: [],
    image: null,
    modal: false
    })
  }

  removeImages = name => {
    const imagesTemp = [...this.state.images];
    

    const images = imagesTemp.filter(image => {
      return image.name !== name;
    });
   

    this.setState({ images },()=>{
      if (this.props.onChange !== undefined) this.props.onChange(images);
    });
  };
  onError = error => {
    if (this.props.onError !== undefined) this.props.onError(error);
  };

  handleCloseModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  addImage = url =>{
    this.setState({image : url.url,modal : true});

  }
  render() {
    const { id, style, placeholder } = this.props;

    const id_upload_from_camera = id
      ? `${id}_upload_from_camera-${this.uid()}`
      : `${this.uid()}_upload_from_camera-${this.uid()}`;

    const id_upload_from_device = id
      ? `${id}_upload_from_device-${this.uid()}`
      : `${this.uid()}_upload_from_device-${this.uid()}`;

    const color = this.props.color ? this.props.color : "#0074D9";

    return (
      <div style={style ? style : null}>
        <div className={styles["container-upload-image"]}>
          <div
            className={styles["btn-upload-upload-image"]}
            onClick={
              this.state.isMobile
                ? this.openPopOver
                : () => this.clickOpenFromDevice(id_upload_from_device)
            }
            style={{ backgroundColor: color }}
          >
            {
              //myIcon
            }
            <img src={CameraAlt} />
            <div
              className={styles["popOver-upload-image"]}
              style={{
                display: this.state.open ? "flex" : "none",
                backgroundColor: color
              }}
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
                onChange={ref => this.onChange(ref.target)}
                multiple={this.props.multiple ? true : false}
              />
              {
                //upload from device input
              }
              <input
                type="file"
                style={{ display: "none" }}
                id={id_upload_from_device}
                accept="image/*"
                onChange={ref => this.onChange(ref.target)}
                multiple={this.props.multiple ? true : false}
              />
            </div>
          </div>

          <div className={styles["images-container-upload-image"]}>
            {this.state.images.length == 0 ? (
              <div className={styles["placeholder-upload-image"]}>
                {placeholder ? placeholder : null}
              </div>
            ) : null}

            {this.state.images.map(image => {
              const url = URL.createObjectURL(image);
              return (
                <div
                  className={styles["image-upload-image-container"]}
                  key={this.uid()}
                  onClick={()=>{this.addImage({url : url})}}
                >
                  <img src={url} className={styles["image-upload-image"]} />
                  <span className={styles["image-name-upload-image"]}>
                    {image.name}
                  </span>
                  <span
                    className={styles["image-close-upload-image"]}
                    onClick={(e) => {e.stopPropagation();this.removeImages(image.name)}}
                  >
                    <img src={Close} />
                  </span>
                </div>
              );
            })}

            {/*
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
  */}
          </div>
        </div>

        <div
          className={styles["modal-upload-image"]}
          onClick={this.handleCloseModal}
          style={{ display: this.state.modal ? "flex" : "none" }}
        >
          <div className={styles["modal-content-upload-image"]} onClick={(e=>{e.stopPropagation();})}>
            <img
              src={
                this.state.image
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
