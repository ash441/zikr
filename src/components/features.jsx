import { useState } from "react";

export const Features = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Auliya Allah</h2>
        </div>
        {/* first row */}
        <div className="row">
          <div className="col-xs col-md-3">
            <h3>The love of Auliya-Allah for the Lord's Creation</h3>
            <p>
              {isOpen
                ? "As the hearts of Auliya-Allah contain immense love and reverence for Allah, therefore, they love Allah’s creation as well. The love for Allah’s slaves is because of the love for Allah. They welcome everyone at their hospices because of this special love."
                : "It is known that the famous scholar Hazrat Abul-Hasan Kharqani had written on the door of his monastery Whoever comes into this hospice, give him food and do not ask him about his belief because whoever has been granted life by Allah is worth coming at Abul-Hasan’s table. Just as these words inscribed on the board at Sheikh’s doorstep give an indication of his love for humanity and kindness to people, they also depict the ideology of the holy saints (Sufiya-e-Karam). A humane doctor and a proficient Hakeem dislikes the disease and not the patient, similarly, these peoplehate sins but not the sinners. They contain within them the feelings of empathy and compassion for the entire world. The motto of Hazrat Sheikh Kharqani is just the same. He says “From Turkey to Syria, even if a thorn pricks someone’s finger it hurts me. Similarly, from Turkey to Syria if a stone hurts someone’s feet, I feel its wound and if there is some sorrow in anyone’s heart, that grieved heart is mine.” (Tazkira Sheikh Abul-Hasan Kharqani, pg. 72) "}
            </p>
            <button onClick={()=> handleClick}>readmore</button>
          </div>

          <div className="col-xs col-md-3">
            <h3>Gifts for the Relatives</h3>
            <p>
              {isOpen
                ? "Specially giving gifts to the relatives is even more likely to gain great reward. Whenever this writer had to go to Khanwahan, hazrat would insist on taking some gifts along with him for the relatives."
                : " Giving gifts is the tradition (sunnah) of the Prophet PBUH. تھادوا تحابواGive gifts to one another so that you may love each other."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
          <div className="col-xs col-md-3">
            <h3>Helping the Relatives</h3>
            <p>
              {isOpen
                ? "One of the major symptoms of a perfect Muslim explained in the ahadith is to help someone who is in need graciously. He would always observe the sunnah in every aspect. Whenever any relative would come to him in difficult time asking for money or any other thing,"
                : " he used to help them without any argument. I remember it well that once some relative came to him and asked for money he needed in buying some piece of land. Hazrat himself did not have any money at that time but he told him to come after two days. After two days he gave him money after having borrowed it from a friend of his."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
          <div className="col-xs col-md-3">
            <h3>Gave his ancestral home to his relatives</h3>
            <p>
              {isOpen
                ? "Hazrat’s ancestral house, which was built by his father, was in Khanwahan. This house was very dear to him as he had spent great days with his dear and pious mother there. He started preaching of the religion in that house and had invited his teacher"
                : "Peer Mitha (RA) who came and lived there for many days. He would often visit the house which was in a very good condition. One of his relatives requested him to grant him that house. I remember that Hazrat pondered on it for many days and there was discussion about it at home. In the end, merely for gaining Allah’s approval and in follow of the Prophet PBUH, he gave the house to that person at no cost and later on, he never mentioned what he had done. Even though many of his relatives tried to keep him from giving the house as it was very precious. "}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
        </div>
        {/* second row */}
       
          <div className="col-xs col-md-3">
            <h3>Love for Allah’s Creation</h3>
            <p>
              {isOpen
                ? "Hazrat was under treatment in a hospital in Jamshoro, next door there was a patient. All of a sudden, at night moans and cries could be heard from that room. A few minutes later a man came to him and told him that the patient was in severe pain and no doctor"
                : "was on duty requesting him to accompany him there and pray for the patient. Hazrat asked that man to take him there as they did not know since how long the man had been in pain although, hazrat had very recently been operated and he was not allowed to walk. Dr. Abdul Latif who was present at that time tried to tell the man was not in a position to move and the doctors had forbidden him from moving but hazrat with the support of two people, placing hands on their shoulders, went and he was in a state that his feet dragged along the floor and he was shivering. He went near the patient and then came back after having prayed for him. After some time the man, who had come earlier, came to him and informed that the patient was now in a better condition."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
          <div className="col-xs col-md-3">
            <h3>Respect for the Rights of Women</h3>
            <p>
              {isOpen
                ? "In today’s era a few illiterate, ignorant and foolish people give women very low status and behave contemptuously with them, for instance, a woman cannot sit with her husband; avoid eating the leftovers of a woman. It is very sad that "
                : " even the most pious people do that although the Prophet PBUH used to eat with Hazrat Ayesha Siddiqa (RA) and the piece of meat which Hazrat Ayesha (RA) would have eaten, he would eat the same one, just like it is stated in hadith. This same sunnah of the Prophet PBUH which has been abandoned by people was incessantly followed by our honorable Hazrat Sohna Sa’een and he would advise people to do the same. How lovely were those days when advising his students he would explain such ahadith in detail and lay emphasis on fulfillment of the rights of people specially the family members. Once, after the meeting for dhikr, he asked his students and deputies who had had his meal with their wife. No one rose probably. He said our deputies (Khulafa) consider it against their pride that while they are great elders, people respect them, their hands and feet are kissed and they are called with big names like Allama and Maulana etc., if they eat with their wives and help them, it will degrade them. Hazrat deemed it as arrogance and ordered the citizens of Allahabad to eat with their wives and that he would ask them about it after the Morning Prayer. The next day he took their attendance and almost all the deputies had acted upon it. Subhan Allah! How good was his way of teaching that he would act upon such sunnah and would get it done by his acquaintances, about which even big scholars were forgetful."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
          <div className="col-xs col-md-3">
            <h3>Good Behavior towards the Neighbors</h3>
            <p>
              {isOpen
                ? "A hadith of the Prophet (upon whom be blessings and peace) states that whenever you cook food, add more water in it so that its soup is increased and give the broth to"
                : "your neighbors as well. Following this hadith, he would always send a portion of the food to his neighbors especially he would take care of his relatives and when they are in one’s neighborhood, their rights are increased to an even greater extent. He was extremely cautious in this respect fearing it if any of his neighbors was hurt with his behavior."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
          <div className="col-x col-md-3">
            <h3>Kindness and Affection towards Orphans</h3>
            <p>
              {isOpen
                ? "There was a daughter of a late Faqir (saint) in Allahabad Shareef who was married and also had children. She was married to her uncle’s son. Her mother had not married after her husband’s death rather involved herself in her children’s "
                : " upbringing until all of her daughters were married. The widow had no male child. Therefore, with her approval her brothers got her married. At this wedding, her married daughter cried a lot and became very grieved saying that our mother will now forget us while our father has already died. When this news reached Hazrat, he called the girl and through his family conveyed the message that she need not worry and that she should take him as her father and his home as her own. On the very same day he gave her flour, wheat and probably money as well. He would always take care of her and help her. Whenever he would come to know that any kid’s one or both parents have died, he would call him over to his house and pat him on the head kindly. (A hadith states that patting on the head of an orphan kindly will bring Allah’s forgiveness from sins equal to the number of hair on the orphan’s head.) He would give them money, clothes and food. The wife of Qari Ghulam Hussain was very pious, virtuous and God-fearing woman who regularly offered the Tahajjud prayers. She died when Qari’s son (Muhammad Hussain) was very little. He is a scholar and preacher now. Hazrat called Muhammad Hussain over to his house, placed a hand kindly on his head and prayed for him. When our grandfather honorable Syed Naseer-ud-Din Shah passed away, he gave a lot of care and kindness to these girls. Often he would look after the needs of these girls and grandfather’s wives. He loved them as if they were his own family. The heart shakes and cries out when the great character and perfect qualities of Hazrat Sohna Saen are described because we have abandoned following his example which is in fact the example of the exalted character of the Prophet PBUH. O Lord of the worlds! Enable us, our children, scholars and saints to follow him in his footsteps. Ameen"}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
        
      </div>
    </div>
  );
};
