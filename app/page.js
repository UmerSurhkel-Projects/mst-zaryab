import Home from "./components/Home/home"
import Layout from './layout'
import "../tailwind.config"

function App() {
  return (
    <Layout
      title="AssetTrack |Home| Revolutionize Your Asset Management with Leading Technology"
      description="Welcome to AssetTrack, where we redefine asset management with advanced,
     user-friendly technology. Discover how our tools can optimize your business operations,
      reduce overhead costs, and boost overall efficiency. Explore our site to learn more about
       our solutions and how they can benefit your organization."
    >
      <div className="wrapper">
        <Home />
      </div>
    </Layout>

  );
}

export default App;
