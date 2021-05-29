import { useState } from "react"



export const Rabbani = (props) => {

  const [isOpen, setIsOpen] = useState(true);

  function handleClick () {
    setIsOpen(!isOpen);
  }


  
  return (
    <div id='Rabbani' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>letters of imam rabbani</h2>
         
        </div>
        <div className='row'>

          

         
        
         
                <div  className='col-xs-6 col-md-3'>
                <h3>Congregational Prayer</h3>
                <p>{isOpen?
                 "It is narrated that once Hazrat Umar (RA) performed the Fajr prayer with the congregation. After having finished the prayer he looked at the congregation and finding that one of his companions was absent, he asked the people where he was. The people told him that "
                 :
                  " he was usually awake most of the night, busy in prayer so he must have slept at that time. Hazrat Umar (RA) said that if he would have been asleep all night and offered the Fajr prayer with the congregation, it would have been better."
                }</p>
                <button onClick={handleClick}>readmore</button>

               </div>
         
                <div  className='col-xs-6 col-md-3'>
                <h3> Consideration of the Etiquettes of the Prayer</h3>
                <p>{isOpen?
                 "Performing any Mustahab (appreciated) act and avoiding the (Makruh) unappreciated one, be it Makruh-e- Tanzihi, is better by degrees than the remembrance, meditations and consideration. However, if these things are combined with prope"
                 : " consideration and abstinence, then it will be a great success otherwise these things will be an unnecessary burden. For instance, the offering of a penny as alms (Zakat) is better than giving a mountain of gold as charity. Similarly, keeping consideration of the etiquettes of charity that is to say giving it to close relatives and the poor is better. Hazrat Imam-e- Azam on the omission of a mustahab during ablution, performed his prayers of forty years again."
                }</p>
                <button onClick={handleClick}>readmore</button>

               </div>
                <div  className='col-xs-6 col-md-3'>
                <h3>Knowledge is the name of struggle.</h3>
                <p>{isOpen?
                 "Knowledge is in between two struggles. One of them is that which is made before the acquisition for its gain and the second one is that which is made after the acquisition at the time of its practicing. Thus it is required that lessons for the knowledge of"
                 : " of jurisprudence should also be arranged along with the lessons for spirituality. Books for jurisprudence are common in Persian, for instance, Majmua Khan, Umdatul Islam and Kanz-e-Farsi. Do not worry if books for spirituality are not mentioned because they are related to acts and are not included in the sayings. However, it is a matter of loss if books for fiqh are not mentioned. What other long statements should be made. Little talk suffices for more."
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
