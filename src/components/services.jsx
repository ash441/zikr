export const Services = (props) => {
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
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
