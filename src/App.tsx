import { useEffect, useState, useRef } from "react";
import "./App.css";
// components
import ProdItem from "./components/ProdItem";
import Skeleton from "./components/Skeleton";
// utils
import { getMockData } from "./utils/async";
// interface
import { IMockData } from "./types/IData";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [list, setList] = useState<Array<IMockData>>([]);
  const [isEnd, setIsEnd] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const endRef = useRef(null);

  useEffect(() => {
    console.log("first");
    getList(0);
  }, []);

  const getList = async (page: number) => {
    try {
      setIsLoading(true);
      const result: any = await getMockData(page);
      if (result) {
        setIsEnd(result.isEnd);
        // 최신 상태에 기반한 업데이트
        setList((prevList) => [...prevList, ...result.datas]);
        setCurrentPage(page);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const onIntersection = (entries: any) => {
    const firstEntry = entries[0];

    if (firstEntry.isIntersecting && !isEnd) {
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1;
        getList(nextPage); // 최신 페이지 번호로 요청
        return nextPage; // 페이지 상태를 업데이트
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);

    if (endRef.current) {
      observer.observe(endRef.current);
    }

    return () => {
      if (endRef.current) {
        observer.unobserve(endRef.current);
      }
    };
  }, [isEnd]);

  return (
    <div>
      {list.map((el, idx) => (
        <ProdItem key={idx} info={el} />
      ))}
      <div ref={endRef}></div>
      {isLoading && <Skeleton />}
    </div>
  );
}

export default App;
