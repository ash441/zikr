import { useState } from "react";

export const Rabbani = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div id="Rabbani" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>letters of imam rabbani</h2>
        </div>

          {/* first row */}
        <div className="row">

          <div className="col-xs-6 col-md-3">
            <h3>Congregational Prayer</h3>
            <p>
              {isOpen
                ? "It is narrated that once Hazrat Umar (RA) performed the Fajr prayer with the congregation. After having finished the prayer he looked at the congregation and finding that one of his companions was absent, he asked the people where he was. The people told him that "
                : " he was usually awake most of the night, busy in prayer so he must have slept at that time. Hazrat Umar (RA) said that if he would have been asleep all night and offered the Fajr prayer with the congregation, it would have been better."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>

          <div className="col-xs-6 col-md-3">
            <h3> Consideration of the Etiquettes of the Prayer</h3>
            <p>
              {isOpen
                ? "Performing any Mustahab (appreciated) act and avoiding the (Makruh) unappreciated one, be it Makruh-e- Tanzihi, is better by degrees than the remembrance, meditations and consideration. However, if these things are combined with prope"
                : " consideration and abstinence, then it will be a great success otherwise these things will be an unnecessary burden. For instance, the offering of a penny as alms (Zakat) is better than giving a mountain of gold as charity. Similarly, keeping consideration of the etiquettes of charity that is to say giving it to close relatives and the poor is better. Hazrat Imam-e- Azam on the omission of a mustahab during ablution, performed his prayers of forty years again."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>


          <div className="col-xs-6 col-md-3">
            <h3>Knowledge is the name of struggle.</h3>
            <p>
              {isOpen
                ? "Knowledge is in between two struggles. One of them is that which is made before the acquisition for its gain and the second one is that which is made after the acquisition at the time of its practicing. Thus it is required that lessons for the knowledge of"
                : " of jurisprudence should also be arranged along with the lessons for spirituality. Books for jurisprudence are common in Persian, for instance, Majmua Khan, Umdatul Islam and Kanz-e-Farsi. Do not worry if books for spirituality are not mentioned because they are related to acts and are not included in the sayings. However, it is a matter of loss if books for fiqh are not mentioned. What other long statements should be made. Little talk suffices for more."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>


          <div className="col-xs-6 col-md-3">
            <h3> Punctuality in Prayers</h3>
            <p>
              {isOpen
                ? "May Allah enable us to do the deeds that please Him. Just as it is necessary for a person to keep his beliefs right, in the same way pious deeds are also necessary and among all deeds the one that is most comprehensive and closer to bringing one nearer to"
                : " Allah is Salah i.e. the prayer. The Prophet PBUH said: “Prayer is a pillar of religion. Who kept it erect, kept the religion erect and whoever omitted it destroyed the religion.” Whoever is able to offer his prayers regularly is enabled to abstain from immodesty and bad deeds. The verse إِ َّن ال َّص َلا َة َت ْن َھى َع ِن ا ْل َف ْح َشاء َوا ْل ُمن َك ِر is in favor of this and the prayer that does not stop a person from sins is only apparently a prayer and in reality it is nothing. However, one must not abandon the imagination till the gain of reality. The thing that is not gained wholly is not abandoned totally; rather along with the thing that is gained one should strive for more. However, if Allah Almighty accepts the imagination for reality that is to say grants approval to the apparent prayer, it is not impossible for Him.Explanation: In the religion Islam, after faith and in the deeds, prayer is of the highest priority."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
          </div>



          {/* second row */}
          <div className="row">

          <div className="col-xs-6 col-md-3">
            <h3> The Way of Salvation</h3>
            <p>
              {isOpen
                ? "The summary of the letter is that the path of salvation lies in following the people of Sunnat and Al- Jamaat in speech, action, in small as well as big things. It is because "
                : " only this is the group who will be saved, the groups and people other than this are on the verge of decline and destruction. Today, one may not know this but tomorrow on the Day of Judgment, everyone will know and will be no advantage to him. O Allah! Wake us from negligence before death comes to do so. (Ameen)."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>

          <div className="col-xs-6 col-md-3">
            <h3> Following the Sunnah of the Prophet PBUH</h3>
            <p>
              {isOpen
                ? "May Allah adorn our inside and outside with the following of the beautiful traditions of the Prophet PBUH. Hazrat Muhammad PBUH is loved by the Lord of "
                : "the worlds (SWT). The thing that is liked and appreciated is for the beloved, that is to say the beloved likeness is the likeness of the lover. It is because of this reason that Allah Almighty states in Quran: َوإِ َّن َك لَ َعلى ُخلُ ٍق َع ِظي ٍم And most surely you conform (yourself) to sublime morality.(surah al-qalam 3)إَِّنَكلَِمَناْلُمْرَسلِيَن.َعلَى ِصَراٍطُّمْسَتقِيٍم Most surely you are one of the messengers, On a right way(surah yaseen 3,4) surah Al-anaam 153) Allah Almighty termed the Prophet’s PBUH( ا ّن ھذا صراطي مستقيماً فا ّتبعوه ولا ت ّتبعوا السبل path as the straight path and those other than it were included in the misleading paths and he forbade following those paths. The Prophet PBUH while thanking Allah SWT and guiding the creation towards ا ّدبني ربى :righteousness said: The best of guidance is the guidance of Muhammad PBUH. He also said .My Lord taught me gentility and taught me knowledge in a most noble way فاحسن تأديى Lesson: in general, all believers are loved by Allah but the rank at which the prophets AS generally and Hazrat Muhammad PBUH specially is placed cannot be attained by ordinary humans. Still, he was so courteous that he said: الا و انا حبيب 􏰀 ولا فخر remember, I am Allah’s beloved but I do not say this out of pride. In the Holy Quran, Allah Almighty has given a single condition of making people His beloved and that is following His beloved (Muhammad PBUH) and one will be loved by Allah. It is a rule of likeness that the beloved is given the best of thing and everything possessed by the beloved is liked. Allah Almighty gave His beloved PBUH a comprehensive book, Shari’ah nullifying all previous religions and termed his character as the best character. He ordered in the Quran: قُلْ إِن ُكن ُت ْم ُت ِح ُّبو َن ّ􏰀َ َفا َّتبِ ُعونِي (surah Aal-e-imran "}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>

          <div className="col-xs-6 col-md-3">
            <h3> The Loved Characters of the Beloved PBUH</h3>
            <p>
              {isOpen
                ? "It is a proved fact that in whatever thing the characters and habits are found, that thing, being a follower of the beloved, is loved too. In the verse ُ􏰀ّ َفا َّتبِ ُعونِي ُي ْحبِ ْب ُك ُم , this fact has "
                : "been indicated. Thus, trying to follow Prophet PBUH is an act that brings us to the rank of likeness. Therefore, it is incumbent upon every sane and wise person to make one’s inner self and outside completely a follower of the Prophet PBUH.Lesson: Thus, all Muslims should make prominent the character of the Prophet PBUH with their appearance and their deeds, intentions and thoughts obedient to the Shari’ah and sunnah. They should adopt those manners and habits that were ordered by the Prophet PBUH and abstained from those innovations, customs and misdeeds that were forbidden by the Prophet PBUH. "}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>

          <div className="col-xs-6 col-md-3">
            <h3> Value the Leisure</h3>
            <p>
              {isOpen
                ? "All praises are to Allah and peace be upon His virtuous slaves. O son, spare time is a blessing. Do not spend it in useless tasks but spend it in the tasks that are pleasing to Allah SWT. Offer five times prayer with full concentration of"
                : "heart and with the congregation carrying out all its parts completely. Do not ever let go your Tahajjud prayer. Do not show negligence in making Istighfar (invocation for forgiveness and showing repentance) in the morning. Do not take pleasure in sleeping till late. Do not be let yourself be charmed with the readily gained delicacies, remember death and keep in mind the hardships of the hereafter. In short, turn your back to the world and your attention towards the hereafter. However, keep yourself engaged in the worldly chores as required and make alive the rest of time with the deeds that shall help in the hereafter. To conclude, clear your heart and inner self of love for anyone other than Allah and adorn your outside with the orders of Shari’ah. This is the real thing to do and everything else is useless. The circumstances are fine. Wassalam "}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
          </div>

          {/* third row */}

          <div className="col-xs-6 col-md-3">
            <h3>Flavor and Sweetness are not Necessary</h3>
            <p>
              {isOpen
                ? "Maulana Haji Muhammad made it clear that since two months, an interruption has come into dhikr, contemplation and invocations and the old flavor and taste no longer exists. O my friend, if no"
                : " interruption has come into these two things, there is no grief. These two things are the following of the Prophet of mercy, Muhammad PBUH and the second being the love and sincerity for the sheikh. If while having these things, thousands of layers of darkness come down, there is no fear, ultimately they will not let it go. If God forbid a deficiency occurs in any of the two then there is only malfunctioning. Even if concentration and presence of heart is achieved, it is and its result is desolation because without the following of the Prophet PBUH and the love for sheikh, achievement of concentration of heart is no big deal. With humility and solicitation, ask Allah for the two of these things and steadfastness upon them as they are the required objects and salvation is possible only because of them. My salam be conveyed to the brothers of Islam and particularly old friend Maulana Abdul Ghafoor Samarqandi."}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
          <div className="col-xs-6 col-md-3">
            <h3> Love for the Mentor</h3>
            <p>
              {isOpen
                ? "After praises and prayers, it is stated that I received your letter that you had sent via Maulana Mehdi Ali and it was a source of pleasure for me. Praises be to Allah that the love for the saints who make dhikr"
                : "which is a treasure of blessings in this world and the one hereafter is strong and stable and the long time of distance from the company has had no effect on it.The protection of two things is very necessary, one of them is the following of traditions of the Prophet PBUH and the second being sincerity and love for one’s sheikh and mentor. With these things anything that is given (visions, miracles and intuitions) is a blessing and if nothing is given but these two are achieved strongly, there is no need to worry. Ultimately, one shall be given all of them but if God forbid one of them is interrupted even though visions and spiritual tastes are gained, it should be taken as istidraj that is weakness and it should not be perceived as anything other than a flaw. و􏰀 سبحانه الموفق والسلام .This is the way of steadfastness "}
            </p>
            <button onClick={handleClick}>readmore</button>
          </div>
       
      </div>
    </div>
  );
};
