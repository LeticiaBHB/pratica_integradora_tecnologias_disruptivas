import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <footer style={{ padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
        <Typography variant="body2">© 2024 Gerenciamento de Projetos</Typography>
      </footer>
    </div>
  );
}

export default App;
