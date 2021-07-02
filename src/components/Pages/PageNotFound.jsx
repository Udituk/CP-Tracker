import React from 'react'

export default function PageNotFound() {
  return <div style={{textAlign:"center", marginTop:"40vh"}}>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div>
                Sorry, an error has occured, Requested page not found!
            </div>
            <div>
                <a href="./" class="btn btn-primary btn-lg">Take Me Home </a>
            </div>
        </div>;
}

