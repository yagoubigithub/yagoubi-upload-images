
> 

[![NPM](https://img.shields.io/npm/v/yagoubi-upload-images.svg)](https://www.npmjs.com/package/yagoubi-upload-images) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
# yagoubi-upload-images

A flexible and beautiful input for images  for ReactJS with multiselect and creatable support.
 Demo [yagoubi-upload-images demo]() .

## Install and Usage

```bash
npm install --save yagoubi-upload-images
```

## Simple Example

```js
import React, { Component } from 'react'

import UploadImages from 'yagoubi-upload-images'

class Example extends Component {
  onChange = (images) =>{
      console.lg(images)
  }
  render () {
    return (
      <UploadImages onChange={this.onChange} />
    )
  }
}
```

## props

##### All props are not require


| props  |  type  | description  |   
|---|---|---|
|  multiple | boolen     |  multi-images or not |   
|  placeholder |  string  |  the placeholder that should diplay in images container  |   
| maxImages  |    number  |  if multiple you can add the maximum of number of images   |   
|maxImageSize |    number  |  maximum file size  |   
| minImageSize    |   number |  minimum file size |   
|  color |  string    |  the color of the upload button exmple  "#FFDC00" . the default is #0074D9  |   
|  onError |  method    |   executing  when an error happen take one param is error|   
|  onChange |   method   |  executing when image uploaded take one param is the  images |   





## License

MIT © [yagoubi abdelkader](https://github.com/yagoubigithub)
