import { useState } from "react"



export const Features = (props) => {

  const [isOpen, setIsOpen] = useState(true);

  function handleClick () {
    setIsOpen(!isOpen);
  }


  
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Auliya Allah</h2>
         
        </div>
        <div className='row'>

          

         
        
         
                <div  className='col-xs-6 col-md-3'>
                <h3>The love of Auliya-Allah for the Lord's Creation</h3>
                <p>{isOpen?
                 "As the hearts of Auliya-Allah contain immense love and reverence for Allah, therefore, they love Allah’s creation as well. The love for Allah’s slaves is because of the love for Allah. They welcome everyone at their hospices because of this special love."
                 : "It is known that the famous scholar Hazrat Abul-Hasan Kharqani had written on the door of his monastery Whoever comes into this hospice, give him food and do not ask him about his belief because whoever has been granted life by Allah is worth coming at Abul-Hasan’s table. Just as these words inscribed on the board at Sheikh’s doorstep give an indication of his love for humanity and kindness to people, they also depict the ideology of the holy saints (Sufiya-e-Karam). A humane doctor and a proficient Hakeem dislikes the disease and not the patient, similarly, these peoplehate sins but not the sinners. They contain within them the feelings of empathy and compassion for the entire world. The motto of Hazrat Sheikh Kharqani is just the same. He says “From Turkey to Syria, even if a thorn pricks someone’s finger it hurts me. Similarly, from Turkey to Syria if a stone hurts someone’s feet, I feel its wound and if there is some sorrow in anyone’s heart, that grieved heart is mine.” (Tazkira Sheikh Abul-Hasan Kharqani, pg. 72) "
                }</p>
                <button onClick={handleClick}>readmore</button>

               </div>
         
                <div  className='col-xs-6 col-md-3'>
                <h3>hello</h3>
                <p>{isOpen?
                 ""
                 : " "
                }</p>
                <button onClick={handleClick}>readmore</button>

               </div>
                <div  className='col-xs-6 col-md-3'>
                <h3>"</h3>
                <p>{isOpen?
                 ""
                 : " "
                }</p>
                <button onClick={handleClick}>readmore</button>

               </div>
                <div  className='col-xs-6 col-md-3'>
                <h3>"</h3>
                <p>{isOpen?
                 ""
                 : " "
                }</p>
                <button onClick={handleClick}>readmore</button>

               </div>
                <div  className='col-xs-6 col-md-3'>
                <h3>"</h3>
                <p>{isOpen?
                 ""
                 : " "
                }</p>
                <button onClick={handleClick}>readmore</button>

               </div>
                <div  className='col-xs-6 col-md-3'>
                <h3>"</h3>
                <p>{isOpen?
                 ""
                 : " "
                }</p>
                <button onClick={handleClick}>readmore</button>

               </div>
                <div  className='col-xs-6 col-md-3'>
                <h3>"</h3>
                <p>{isOpen?
                 ""
                 : " "
                }</p>
                <button onClick={handleClick}>readmore</button>

               </div>
                <div  className='col-xs-6 col-md-3'>
                <h3>"</h3>
                <p>{isOpen?
                 ""
                 : " "
                }</p>
                <button onClick={handleClick}>readmore</button>

               </div>
               
                
               
         
                
               
                 
        </div>
      </div>
    </div>
                
  )
}
