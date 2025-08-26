import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
  btn: {
    border: "none",
    padding: "8px 16px",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
  },
  primary: { backgroundColor: "#0d6efd", color: "white" },
  secondary: { backgroundColor: "#6c757d", color: "white" },
  success: { backgroundColor: "#198754", color: "white" },
  warning: { backgroundColor: "#ffc107", color: "black" },
  danger: { backgroundColor: "#dc3545", color: "white" },
  info: { backgroundColor: "#0dcaf0", color: "white" },
  light: { backgroundColor: "#f8f9fa", color: "black", border: "1px solid #ddd" },
  dark: { backgroundColor: "#212529", color: "white" },
  link: {
    background: "none",
    color: "#0d6efd",
    textDecoration: "underline",
  },
};

class ButtonDemo extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button style={{ ...styles.btn, ...styles.primary }}>Primary</button>
        <button style={{ ...styles.btn, ...styles.secondary }}>Secondary</button>
        <button style={{ ...styles.btn, ...styles.success }}>Success</button>
        <button style={{ ...styles.btn, ...styles.warning }}>Warning</button>
        <button style={{ ...styles.btn, ...styles.danger }}>Danger</button>
        <button style={{ ...styles.btn, ...styles.info }}>Info</button>
        <button style={{ ...styles.btn, ...styles.light }}>Light</button>
        <button style={{ ...styles.btn, ...styles.dark }}>Dark</button>
        <button style={{ ...styles.btn, ...styles.link }}>Link</button>
      </div>
    );
  }
}

export default ButtonDemo;
