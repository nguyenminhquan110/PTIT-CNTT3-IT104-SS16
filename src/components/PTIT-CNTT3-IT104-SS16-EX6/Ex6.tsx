import React from "react";

interface State {
  isDarkMode: boolean;
}

class ThemeSwitcher extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: false, // mặc định chế độ sáng
    };
  }

  // Hàm toggle theme
  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    const containerStyle: React.CSSProperties = {
      textAlign: "center",
      padding: "40px",
      borderRadius: "10px",
      width: "400px",
      margin: "20px auto",
      backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
      color: isDarkMode ? "white" : "black",
    };

    const buttonStyle: React.CSSProperties = {
      padding: "10px 20px",
      backgroundColor: "#0d6efd",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "20px",
    };

    return (
      <div style={containerStyle}>
        <h2>
          {isDarkMode ? "🌙 Chế độ Tối đang bật" : "☀️ Chế độ Sáng đang bật"}
        </h2>
        <button onClick={this.toggleTheme} style={buttonStyle}>
          Chuyển theme
        </button>
      </div>
    );
  }
}

export default ThemeSwitcher;
