import React from "react";

export default class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  // should use different method here
  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();
      console.log("reader.result", reader.result);

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };
      console.log("file type", nextProps.file.type);
      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>loading...</p>;
    }

    return (
      <div className="img-container">
        <img src={thumb} alt={file.name} className="img-thumbnail" />
      </div>
    );
  }
}
