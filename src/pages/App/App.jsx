import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
            <Container>
              <Row>
                <Routes>
                {/* Route components in here */}
                 <Route path="/orders/new" element={<NewOrderPage />} />
                 <Route path="/orders" element={<OrderHistoryPage />} />
                </Routes>
              </Row>
            </Container>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
