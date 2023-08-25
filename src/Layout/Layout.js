import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";
class Layout extends React.Component {
  componentDidMount = () => {
    const options = { duration: 2000 };
    Aos.init(options);
  };
  render() {
    return (
      <React.Fragment>
        <div className="page">
          <div className="flex flex-row overflow-hidden">
            {this.props.children}
          </div>
          <div className="cursor"></div>
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;
