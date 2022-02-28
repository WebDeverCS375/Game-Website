import HomeTitleBox from "./homeComponents/HomeTitleBox";
import HomeItemTable from "./homeComponents/HomeItemTable";
import { useState, useEffect } from 'react'

function Home() {
  const [items, setItems] = useState([
    "text1",
    "text2",
    "text3",
    "text4",
    "text5",
    "text6",
    "text7",
    "text8",
    "text9",
    "text10",
    "text12"
  ])
  return (
    <div>
      <HomeTitleBox />
      <HomeItemTable items={items}/>
    </div>
  );
}

export default Home;
