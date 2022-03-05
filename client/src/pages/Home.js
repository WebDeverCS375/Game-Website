import HomeTitleBox from "./homeComponents/HomeTitleBox";
import HomeItemTable from "./homeComponents/HomeItemTable";
import { useState, useEffect } from 'react'
import axios from "axios";

function Home() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get('http://localhost:3001/merchdisplay', {
      params: {
        lowRange : page,
        highRange : page * 10
      }
    }).then((response) => {
      setItems(response.data);
    });
  },[]);

  return (
    <div>
      <HomeTitleBox />
      <HomeItemTable items={items}/>
    </div>
  );
}

export default Home;
