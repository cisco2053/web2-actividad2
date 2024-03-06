
import Header from "./Header";
import Nav from "./Nav";
import Maiin from "./Maiin";
import Aside from "./Aside";

function App() { 

  return (
    <>
      <Header/>
      <section className="contenido">
        <Nav />
        <Maiin />
        <Aside />
      </section>
    </>
  );
}
export default App;
