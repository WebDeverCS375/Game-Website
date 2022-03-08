import HomeTitleBox from "./homeComponents/HomeTitleBox";
import HomeItemTable from "./homeComponents/HomeItemTable";
import { useState, useEffect } from 'react'
import axios from "axios";

function Home() {
  const maxDisplay = 2;
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [lastMes, setLastMes] = useState({
    mes : '',
    start : 1,
    end : 1
  });

  const getItems = (mes, start) => {
    axios.get(mes, {
      params: {
        start : start,
      }
    }).then((response) => {
      if (response.data.length > 0) {
        setItems(response.data);
        setLastMes({
          mes : mes,
          start : lastMes.start,
          end : lastMes.start + response.data.length - 1
        });
      } else {
        setItems([]);
      }
    });
  };

  useEffect(() => {
    const mes = 'http://localhost:3001/merchdisplay';
    getItems(mes, lastMes.start);
    setLastMes({
      mes : mes,
      start : lastMes.start,
      end : lastMes.end
    });
  },[]);

  return (
    <div>
      <HomeTitleBox setItems={setItems}/>
      <HomeItemTable items={items} page={page} setPage={setPage} getItems={getItems} lastMes={lastMes} setLastMes={setLastMes}/>
    </div>
  );
}

export default Home;
