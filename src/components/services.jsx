
import { useState } from "react"




export const Services = (props) => {

  const [isOpen, setIsOpen] = useState(true);

  function handleClick () {
    setIsOpen(!isOpen);
  }


  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Why you need a murshid(teacher)</h2>
          <p>
            
O my Dear! The purpose of the life of a human is to reach the highest court of the Lord. However, in the beginning as the traveler is in a state of ugliness and downwardness because of association with so many people while the Lord is of extremely pure and exalted existence. Therefore, the appropriateness required for gaining or giving some benefit between the seeker and the Sought-After is absent. Thus, there is no way other than keeping as a medium a Peer-e-Kamil (Perfect leader, guide or teacher) who is familiar with the way, can see it right and keeps a link with the creation and the Almighty Allah so that along with the seeker he becomes a beneficiary of the Sought-After
          </p>
        </div>
        <div className='row'>
          
                <div className='col-md-4'>
                
                  <div className='service-desc'>
                  <h3>The Signs of a Perfect Murshid</h3>
                <p>{isOpen?
                 "In the part about mysticism and spirituality, the qualities of a perfect Sheikh were discussed generally. Here, the signs of a Murshid-e-Kamil"
                 : "shall be described in detail so that unaware people are not fooled by some fake person with the titles of Murshid or Sheikh bringing them loss instead of any advantage. Speaking on this important subject, a noted sheikh of Tariqa Aalia Naqshbandia, Hazrat Haji Dost Muhammad Qandhari states in one of his letters, The first sign of a perfect Wali is that he is absolutely Sunni (following the Sunnah) in his beliefs. In other words, the sign of a Wali is that he has firm beliefs exactly like those of Ahle Sunnah wal Jamaat. Hazrat Mujaddid Alf Sani (RA) also mentioned in his letter to Khawaja Jamal-ud-Din Hussain the beliefs of Ahle Sunnah at the top of the beloved tasks of Almighty Allah. He wrote Ensure first that your beliefs are exactly as those of Ahle Sunnah wal Jamaat. Secondly, act according to the teachings of the Shariah and the Islamic Jurisprudence. Third, act according to the way of Sufiya-e- Karam. Whoever was able to accomplish all of these tasks earned great success and whoever was deprived remained in great deficit. (Letter 177, Copy 1, Part 3) Haji Dost Muhammad Qandhari in further explanation of the third point states, Following are the ten points given by Sufiya-e-Karam: Repentance i.e. returning to Allah for forgiveness; Piety i.e. no inclination towards the world; Piousness; Patience and Gratitude; Trust on Allah; Acceptance and Pleasure gained generally or in detail; also his company should have so much an impact that whoever associates with him loses love for the world and its residents, and all the negligence from the hearts of the associates is driven away; this person considers himself inferior than everyone; never praises himself and is adorned with the qualities like hospitality, knowledge, tolerance and understanding, benevolence and generosity, cheerfulness, unctuousness, verity, humility and meekness; stays away from hurting others as far as possible; abstains from illegal, doubtful and abominable thing;, in short, he is adorned with all the good deeds and his character is similar to that of the Prophet (peace be upon him). The company of such a person is a great blessing and a great treasure. (Letter 19)"
                }</p>
                <button className="service-btn" onClick={handleClick}>readmore</button>

                  </div>
                </div>
            
         
        </div>
      </div>
    </div>
  )
}
