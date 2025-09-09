import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Amber Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative z-10">
        <Header
          src="/chef-claude-icon.png"
          alt="icon of site"
          imgclass="size-12"
        />
        <Hero />
      </div>
    </div>
  );
}

export default App;
