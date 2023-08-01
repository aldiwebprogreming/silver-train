import { useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
function App() {
  const [nama, setNama] = useState("");

  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setNama(result.user.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>{nama}</h3>
      <button onClick={loginGoogle}>Login dengan google</button>
    </div>
  );
}

export default App;
