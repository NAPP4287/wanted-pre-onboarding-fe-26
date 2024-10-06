import { useEffect, useState } from "react";
import "./App.css";
// components
import ProdItem from "./components/ProdItem";
// utils
import { getMockData } from "./utils/async";
// interface
import { IMockData } from "./types/IData";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [list, setList] = useState<Array<IMockData>>([]);
  const [isEnd, setIsEnd] = useState<boolean>(true);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const result: any = await getMockData(currentPage);
      setIsEnd(result.isEnd);
      setList(result.datas);

      if (!result.isEnd) {
        setCurrentPage(currentPage + 1);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {list.map((el, idx) => (
        <ProdItem key={idx} info={el} />
      ))}
    </div>
  );
}

export default App;
