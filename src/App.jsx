import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import ItemList from './Components/ItemList/ItemList'
import Items from './Components/Items/Items'
import Swal from 'sweetalert2'

function App() {

  const [card, setCard] = useState([])
  const [hour, setHour] = useState(0)
  const [prices, setPrices] = useState(0)
  const [remaining, setRemaining] = useState(20)
  const handleClickButton = (data) =>{
    const isItem = card.find(singleCardData => singleCardData.id == data.id)
    let result = data.credit;
    let priceResult = data.price;
    if(isItem){
      Swal.fire(
        'Already You Select This Course'
      )
    } 
    else{
      card.map((card)=>{
        result += card.credit;
        priceResult+=card.price;
      })
      const deu = 20 - result;
      if(deu < 0){
        Swal.fire(
          'Your Remaining Time Finish'
        )
      }
      else{
        setCard([...card, data])
        setHour(result)
        setPrices(priceResult)
        setRemaining(deu);
      }
    }
  }
    return (
      <div className='max-w-screen-2xl mx-auto p-[20px] lg:p-0 sm:p-5 mb-[36px]'>
        <Header></Header>
        <div className='flex gap-6'>
           <Items handleClickButton={handleClickButton}></Items>
          <ItemList remaining={remaining} prices={prices} hour={hour} card={card}></ItemList>
        </div>
      </div>
    )
  }
  
  
  export default App