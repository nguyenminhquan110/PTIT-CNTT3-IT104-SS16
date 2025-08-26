import React from "react";

interface State {
  count: number;
}

class ClickCounter extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state với count = 0
    this.state = {
      count: 0,
    };
  }

  // Hàm xử lý khi click nút
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Số lần click: {this.state.count}</h2>
        <button
          onClick={this.handleClick}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
}

export default ClickCounter;
