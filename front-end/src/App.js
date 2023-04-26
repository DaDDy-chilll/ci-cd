import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const response = await axios.get("http://localhost:4000/names");

    setUsername(response.data.name);
  }

  return <h1>{username}</h1>;
}

export default App;
