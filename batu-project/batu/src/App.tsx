import { useEffect, useState } from "react";
import { instance } from "./api";
import Cookies from "universal-cookie";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();



  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button
        onClick={() => {
          instance
            .post("/auth/login", {
              name,
              password,
            })
            .then(({ data }) => {
              const token = data.token;
              cookies.set("token", token);
            });
        }}
      >
        tıkla
      </button>
    </div>
  );
}

export default App;
