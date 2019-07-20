import React, { Component } from 'react'

import UploadImages from 'yagoubi-upload-images'

export default class App extends Component {
  render () {
    return (
      <div>
        <UploadImages  id={"Hello_world"} />
      </div>
    )
  }
}
