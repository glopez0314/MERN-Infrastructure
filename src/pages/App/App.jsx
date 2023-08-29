import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import ShopPage from "../ShopPage/ShopPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import AddInventoryPage from "../AddInventoryPage/AddInventoryPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Container>
            <Row>
              <Routes>
                <Route path="/" element={<HomePage user={user} />} />
                <Route path="/shop" element={<ShopPage user={user} />} />
                <Route path="/orders" element={<OrderHistoryPage />} />
                <Route path="/add" element={<AddInventoryPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </Routes>
            </Row>
          </Container>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
