import React from 'react'
import { Link } from 'react-router-dom'


function Layout() {
  return (
    <div>
       <Link to="/dummy"><button>DummyData Task</button></Link>
       <br />
       <br />
       <Link to="/formdata"><button>FormData Task</button></Link>
    </div>
  )
}

export default Layout
 