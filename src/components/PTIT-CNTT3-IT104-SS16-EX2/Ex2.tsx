import React from "react";

interface State {
  isLoggedIn: boolean;
}

class LoginStatus extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false, // mặc định là chưa đăng nhập
    };
  }

  // Hàm toggle đăng nhập/đăng xuất
  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {this.state.isLoggedIn ? (
          <div
            style={{
              backgroundColor: "#e6f7ff",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              margin: "0 auto",
            }}
          >
            <h3>✅ Xin chào, User!</h3>
            <button
              onClick={this.toggleLogin}
              style={{
                padding: "10px 20px",
                backgroundColor: "#1890ff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#e6f7ff",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              margin: "0 auto",
            }}
          >
            <h3>🔒 Vui lòng đăng nhập để tiếp tục.</h3>
            <button
              onClick={this.toggleLogin}
              style={{
                padding: "10px 20px",
                backgroundColor: "#1890ff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Đăng nhập
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default LoginStatus;
