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
    let rating = (
        <h3 className="inactive">Not Yet Rated</h3>
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
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
          }, 0)
          let averageRating = sumRatings / data.place.comments.length
          rating = (
            <h3>
              {Math.round(averageRating)} stars
            </h3>
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
                    <p>{ comments }</p>
                    <form method='POST' action={`/places/${data.place._id}/comment`}>
                        <div className='form-group'>
                            <label htmlFor='author'>Author</label>
                            <input id='author' name='author' type="text"></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='content'>Content</label>
                            <textarea id="content" name="content" type="text"></textarea>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='stars'>Star Rating</label>
                            <input id='stars' name='stars' type='number' min='0' max='5'></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='rant'>Rant?</label>
                            <input id='rant' name='rant' type='checkbox'></input>
                        </div>
                    <input type='submit'></input>
                </form>
                </div>
                <div>
                    <h2>Rating</h2>
                    {rating}
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
   