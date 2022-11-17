import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen overflow-hidden  text-white flex justify-center items-center  bg-[url('assets/images/bg02.jpg')] bg-cover bg-center bg-no-repeat  ">
      <div className="relative w-[350px] rounded-xl ">
        <div className="w-48 h-48 shape-1 rounded-full absolute -top-24 -left-24 "></div>
        <div className="w-48 h-48 shape-2 rounded-full absolute -bottom-24 -right-24 "></div>
        <div className="w-24 h-24  rounded-full absolute blur-xl top-0 right-0 bg-[#08e2ff]"></div>
        <Card />
      </div>
    </div>
  );
}

export default App;
