import React, { Component } from 'react'
import { Button } from 'thicket-elements'
import DetectRTC from 'detectrtc'

class CameraAccess extends Component {
  
  state = { accepted: false, rejected: false }

  componentDidMount() {
    DetectRTC.load(() => this.setState({ accepted: DetectRTC.isWebsiteHasWebcamPermissions}))
  }

  render() {
    if (this.state.rejected) {
      return <h2 key="r-title">To begin creating GIFs please grant us access to your camera.</h2>
    }

    if (!this.state.accepted) {
      return [
        <h2 key="title">We’re going to need to access your camera to begin creating GIFs.</h2>,
        <Button onClick={this.requestAccess} key="done">Camera Permissions</Button>,
      ]
    } else {
      return [
        <h2 key="done-title">Looks like we’ve already been granted access to your camera.</h2>,
        <Button onClick={this.props.onGranted} key="done-button">Continue</Button>,
      ]
    }

  }
  
  requestAccess = () =>
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(this.props.onGranted)
      .catch(() => this.setState({ rejected: true }))
}

export default CameraAccess