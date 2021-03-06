export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Zikr
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                auliya allah
              </a>
            </li>
            <li>
              <a href='#audio' className='page-scroll'>
                Audio
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Need of murshid(teacher)
              </a>
            </li>
            <li>
              <a href='#Rabbani' className='page-scroll'>
                imam Rabbani
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
              sheikh abdul hasan kharqani
              </a>
            </li>
            {/* <li>
              <a href='#team' className='page-scroll'>
                team
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
