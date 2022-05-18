const React = require('react')
const Def = require('./default')

function home () {
    return (
        <def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/chia-fruit-drink.jpg" alt="chia fruit shake" />
                    <div>
                        Photo by <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Brenda Godinez</a> On <a href="https://unsplash.com/photos/MsTOg6rhRVk">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </def>
    )
}

module.exports = home