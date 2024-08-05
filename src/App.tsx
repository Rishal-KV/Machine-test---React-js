import NavBar from "./Components/Navbar/NavBar";
import TradeSettings from "./Components/TradeSetting/TradeSetting";
import CardContainer from "./Components/Cards/CardContainer";

function App() {
  const cardsData = [
    {
      id: 1,
    
      imgUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
    },
    {
      id: 2,
     
      imgUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
    },
    {
      id: 3,
     
      imgUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
    },
    {
      id: 4,
    
      imgUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
    },
    {
      id: 5,
      
      imgUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
    },
    {
      id: 6,
     
      imgUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
    },
    {
      id: 7,
    
      imgUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
    },
    {
      id: 8,
     
      imgUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
    },
    {
      id: 9,
     
      imgUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
    },
    {
      id: 10,
     
      imgUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="container">
        <CardContainer cardProps={cardsData} />
      </div>
      <TradeSettings />
    </>
  );
}

export default App;
