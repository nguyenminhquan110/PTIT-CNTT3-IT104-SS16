import React from "react";

// Kiểu dữ liệu Product
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Kiểu dữ liệu CartItem
interface CartItem extends Product {
  quantity: number;
}

// Component hiển thị 1 sản phẩm
const ProductCard: React.FC<{
  product: Product;
  addToCart: (product: Product) => void;
}> = ({ product, addToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h4>{product.name}</h4>
      <p>{product.price.toLocaleString()} đ</p>
      <button onClick={() => addToCart(product)} style={styles.button}>
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

// Component hiển thị giỏ hàng
const Cart: React.FC<{
  cart: CartItem[];
  updateQuantity: (id: number, amount: number) => void;
}> = ({ cart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={styles.cart}>
      <h3>🛒 Giỏ hàng</h3>
      {cart.length === 0 && <p>Giỏ hàng trống</p>}
      {cart.map((item) => (
        <div key={item.id} style={styles.cartItem}>
          <span>{item.name}</span>
          <span>
            {item.price.toLocaleString()} đ × {item.quantity}
          </span>
          <div>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
        </div>
      ))}
      <h4>Tổng tiền: {total.toLocaleString()} đ</h4>
    </div>
  );
};

// Component chính
const Ex7: React.FC = () => {
  const [products] = React.useState<Product[]>([
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy",
      price: 21000000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/251192/Samsung-Galaxy-S21-Ultra-5G-600x600.jpg",
    },
    {
      id: 2,
      name: "Điện thoại iPhone 14 Promax",
      price: 25000000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-600x600.jpg",
    },
    {
      id: 3,
      name: "Điện thoại Oppo A9",
      price: 12000000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/251192/oppo-a9-600x600.jpg",
    },
  ]);

  const [cart, setCart] = React.useState<CartItem[]>([]);

  // Thêm sản phẩm vào giỏ
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Cập nhật số lượng trong giỏ
  const updateQuantity = (id: number, amount: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div style={styles.container}>
      <h2>📱 Danh sách sản phẩm</h2>
      <div style={styles.productList}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default Ex7;

// CSS inline (có thể thay bằng file .css riêng)
const styles: { [key: string]: React.CSSProperties } = {
  container: { padding: 20, fontFamily: "Arial" },
  productList: { display: "flex", gap: "20px", flexWrap: "wrap" },
  card: {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 15,
    width: 200,
    textAlign: "center",
  },
  image: { width: "100%", borderRadius: 5 },
  button: {
    marginTop: 10,
    padding: "8px 12px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
  cart: {
    marginTop: 30,
    padding: 15,
    border: "1px solid #333",
    borderRadius: 8,
    background: "#f8f9fa",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
  },
};
