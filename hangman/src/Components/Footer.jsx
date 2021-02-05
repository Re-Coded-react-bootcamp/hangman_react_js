import React, { Component } from 'react'
import '../Styles/Footer.css'

export default class Footer extends Component {
render() {
return (
<footer className="text-center text-lg-start">
    <div className="container mt-auto">
        <div className="row justify-content-center">
            <div className="col-2">
                <button className="btn btn-outline-dark">Play again
                </button>
            </div>
            <div className="col-2">
                <button className="btn btn-outline-dark">Hint
                </button>
            </div>
        </div>
    </div>
</footer>
)
}
}