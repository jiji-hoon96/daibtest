import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatList from "./pages/ChatList";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Main />}></Route>
          <Route path="/chatlist" element={<ChatList />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
