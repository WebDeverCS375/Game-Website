import HomeTitleBox from "./homeComponents/HomeTitleBox";
import HomeItemCollection from './homeComponents/HomeItemCollection';
import { useState, useEffect } from 'react'
import axios from "axios";
import { components } from "react-select";

function Home() {
  const maxDisplay = 1;
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [lastMes, setLastMes] = useState({
    mes: 'http://localhost:3001/merchdisplay',
    prevStarts: [],
    start: 1,
    end: 0,
    para: {
      start: 1,
    }
  });

  const getItems = (mes, par) => {
    console.log(lastMes);
    axios.get(mes, {
      params: par
    }).then((response) => {
      if (response.data.length > 0) {
        setItems(response.data);
        setLastMes(
          {
            mes: lastMes.mes,
            prevStarts: lastMes.prevStarts,
            start: lastMes.start,
            end: response.data[response.data.length - 1].id,
            para: lastMes.para,
          }
        );
      } else {
        setItems([]);
      }
    });
  };

  useEffect(() => {
    getItems(lastMes.mes, lastMes.para);
  }, [page]);

  const previ = () => {
    const newStart = lastMes.prevStarts.pop();

    if (page !== 1) {
      let para = { start: newStart };
      if (lastMes.para.hasOwnProperty('name')) {
        para = {
          start: newStart,
          name: lastMes.para.name,
          category: lastMes.para.category
        };
      }

      setLastMes(
        {
          mes: lastMes.mes,
          prevStarts: lastMes.prevStarts,
          start: newStart,
          end: lastMes.end,
          para: para
        }
      );
      setPage(page - 1);
    }
  };

  const next = () => {
    if (items.length === maxDisplay) {
      let para = { start: lastMes.end + 1 };
      if (lastMes.para.hasOwnProperty('name')) {
        para = {
          start: lastMes.end + 1,
          name: lastMes.para.name,
          category: lastMes.para.category
        };
      }
      setLastMes(
        {
          mes: lastMes.mes,
          prevStarts: [...lastMes.prevStarts, lastMes.start],
          start: lastMes.end + 1,
          end: lastMes.end,
          para: para
        }
      );
      setPage(page + 1);
    }
  };

  return (
    <div>
      <HomeTitleBox setItems={setItems} setLastMes={setLastMes} />
      <div className='itemOuterBox'>
        <HomeItemCollection items={items} />
        <button className='pageTurn' onClick={previ}>Previous Page</button>
        {page}
        <button className='pageTurn' onClick={next}>Next Page</button>
      </div>
    </div>
  );
}

export default Home;
