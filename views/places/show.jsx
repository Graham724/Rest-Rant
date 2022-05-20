const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <div>
                <img src={data.place.pic} alt={data.place.name} />
                    <h2>Desctiption</h2>
                    <p>{ data.place.city }, { data.place.state }</p>
                    <p>{ data.place.cuisines }</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>no comments yet</p>
                </div>
                <div>
                    <h2>rating</h2>
                    <p>no rating yet</p>
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