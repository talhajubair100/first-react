import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [users, setUsers] = useState([]);
    const getUser = async () => {
        const response = await fetch ("https://api.github.com/users")
        setUsers(await response.json());
        
    }
    useEffect(() => {
        getUser();
    }, []);
  return (

    <>
      <section id="UseEffect" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Github UseEffect Api</h2>
        </div>

        <div class="row">

        {
            users.map((curElem) => {
                return (
                <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                
                    <div class="icon-box">
                    <div class="icon"><img className='rounded img-fluid' src={curElem.avatar_url} alt="" /></div>
                    <h4><a href={curElem.html_url}>{curElem.login}</a></h4>
                    
                    </div>
                </div>
                )})
        }
          

        </div>

      </div>
    </section>
    </>
  )
}

export default UseEffect
