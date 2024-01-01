import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);
  const [name, setName] = createSignal("");
  return (
    <>
      <div class="">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setName(
              (e.target as unknown as { name: { value: string } }).name.value
            );
          }}
        >
          <input type="text" placeholder="Enter your name" name="name" />
          <input type="button" value={"submit"} />
        </form>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
      <p class="read-the-docs">Hello {name() ? name() : "stranger"}!</p>
    </>
  );
}

export default App;
