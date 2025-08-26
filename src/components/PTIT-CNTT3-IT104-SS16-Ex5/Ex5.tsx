import React, { useState } from "react";

const Ex5: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    age: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email: string) => {
    // Regex kiểm tra định dạng email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.age) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Email không hợp lệ");
      return;
    }

    if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      setError("Tuổi không được âm hoặc bằng 0");
      return;
    }

    // Nếu hợp lệ
    setSubmittedData(formData);
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", age: "" });
    setError("");
    setSubmittedData(null);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Nhập thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nhập tên"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Nhập email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="Nhập tuổi"
            value={formData.age}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" style={{ marginRight: "10px", padding: "8px 12px" }}>Xác nhận</button>
        <button type="button" onClick={handleClear} style={{ padding: "8px 12px" }}>Clear</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid green", borderRadius: "5px" }}>
          <h3>Thông tin đã nhập:</h3>
          <p><strong>Tên:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Tuổi:</strong> {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default Ex5;
