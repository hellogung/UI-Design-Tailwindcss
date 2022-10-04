import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen md:min-h-screen bg-[#EEEBE5] font-sans text-gray-900 ">
      <div className=" max-w-screen-2xl mx-auto px-8">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
