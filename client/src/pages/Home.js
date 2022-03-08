import HomeTitleBox from "./homeComponents/HomeTitleBox";
import HomeItemTable from "./homeComponents/HomeItemTable";
import { useState, useEffect } from 'react'
import axios from "axios";

function Home() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [lastIndex, setLastIndex] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/merchdisplay', {
      params: {
        lowRange : page,
        highRange : page * 10
      }
    }).then((response) => {
      setItems(response.data);
      setLastIndex(response.data[response.data.length - 1].id);
    });
  },[]);

  return (
    <div>
      <HomeTitleBox setItems={setItems}/>
      <HomeItemTable items={items} page={page} setPage={setPage}/>
    </div>
  );
}

export default Home;
