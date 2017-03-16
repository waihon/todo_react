import React, {Component} from "react"

const getCurrentPath = () => {
  const path = document.location.pathname
  return path.substring(path.lastIndexOf("/"))
}

export class Router extends Component {
  state = {
    route: getCurrentPath()
  }

  handleLinkClick = (route) => {
    // Shortcut as the value and property have the same name
    this.setState({route})
    // (state, pageTitle, location)
    history.pushState(null, "", route)
  }

  static childContextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
