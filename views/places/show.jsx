const React = require('react')
const Def = require('../default')

function show (data) {
    let message = ' '
        if (data.message) {
            message = (
                <h4 className="alert-danger">{data.message}</h4>
            )
        }
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                {message}
                <div>
                <img src={data.place.pic} alt={data.place.name} />
                    <h2>Desctiption</h2>
                    <p>Located in { data.place.city }, { data.place.state }</p>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <p>Serving { data.place.cuisines }</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>no comments yet</p>
                </div>
                <div>
                    <h2>Rating</h2>
                    <p>No Rating Yet</p>
                </div>

                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit</a> 
                
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form> 
    


            </main>
        </Def>
    )
  }

  module.exports = show