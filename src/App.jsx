import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(135% 135% at 50% 90%, #ffffff 30%, #f59e0b 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative z-10">
        {/* <Header
          src="/chef-claude-icon.png"
          alt="icon of site"
          imgclass="size-12"
        /> */}
        <Hero />
      </div>
    </div>
  );
}

export default App;
