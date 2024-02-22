import React, { useEffect, useState } from 'react'

const UProfile = () => {

        const [udata, setUData] = useState([]);
        const fetchuser = () => {
            fetch("https://randomuser.me/api/?results=30")
                .then(res => {
                    return res.json()
                }).then(data => {
                    let users = data.results;
                    setUData(users)
                    // console.log(users);
                });
        };
        useEffect(() => {
            fetchuser();
        }, []);


    return (
        <div>
            {udata.map((uitem, index) =>

<section style={{ backgroundColor: '#eee' }}>
<div className="container py-5">
    

    <div className="row">
        <div className="col-lg-4">
            <div className="card mb-4">
                <div className="card-body text-center">
                    <img src={uitem.picture.large} alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                    <h5 className="my-3">{uitem.name.first} {uitem.name.last}</h5>
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                    <div className="d-flex justify-content-center mb-2">
                        <button type="button" className="btn btn-primary">Follow</button>
                        <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                    </div>
                </div>
            </div>
            
        </div>
        {/* Additional columns */}
    </div>
</div>
</section>

)}
            
        </div>
    )
}

export default UProfile






