import { Header, Main } from "./components"
import  GithubProvider from './providers/githubProvider'
function App() {
  return (
    <GithubProvider>
        <Header />
        <Main />
    </GithubProvider>
  );
}

export default App;
