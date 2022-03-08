import React from 'react'
import "./home.css"
import HomeItemCollection from './HomeItemCollection'

const HomeItemTable = ({ items , page , setPage, getItems, lastMes, setLastMes}) => {
  const maxDisplay = 2;
  const previ = () => {
    if (page !== 1) {
      const newStart = lastMes.start - maxDisplay;
      getItems(lastMes.mes, newStart);
      setPage(page - 1);
      setLastMes({
        mes : lastMes.mes,
        start : newStart,
        end : lastMes.end
      });
    }
  };

  const next = () => {
    if (items.length === maxDisplay) {
      const newStart = lastMes.start + maxDisplay;
      getItems(lastMes.mes, newStart);
      setPage(page + 1);
      setLastMes({
        mes : lastMes.mes,
        start : newStart,
        end : lastMes.end
      });
    }
  };

  return (
    <div className='itemOuterBox'>
        <HomeItemCollection items={items}/>
        <button className='pageTurn' onClick={previ}>Previous Page</button>
        {page}
        <button className='pageTurn' onClick={next}>Next Page</button>
    </div>
  )
}

export default HomeItemTable
