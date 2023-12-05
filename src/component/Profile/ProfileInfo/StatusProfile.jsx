import React from "react";
import s from "./ProfileInfo.module.css";

export class StatusProfile extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  UnActivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatusThunkCreactor(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }  

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input
              className={s.input}
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.UnActivateEditMode}
              type="text"
              value={this.state.status}
            />
          </div>
        )}
      </>
    );
  }
}
