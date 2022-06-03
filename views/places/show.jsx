const React = require('react')
const Def = require('../default')

function show (data) {
    console.log(data.place.comments)
    let message = ' '
        if (data.message) {
            message = (
                <h4 className="alert-danger">{data.message}</h4>
            )
        }
    let comments = (
        <h3 className="inactive">No Comments Yet!</h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
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
                    <p>{ comments }</p>
                    <form method='POST' action={`/places/${data.place._id}/comment`}>
                    <label htmlFor='author'>Author</label>
                    <input id='author' name='author' type="text"></input>
                    <label htmlFor='content'>Content</label>
                    <textarea id="content" name="content" type="text"></textarea>
                    <label htmlFor='stars'>Star Rating</label>
                    <input id='stars' name='stars' type='range' min='1' max='5'></input>
                    <label htmlFor='rant'>Rant?</label>
                    <input id='rant' name='rant' type='checkbox'></input>
                    <input type='submit'></input>
                </form>
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