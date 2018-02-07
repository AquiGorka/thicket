import React from 'react'
import notFoundSvg from './404.svg'
import { Button } from 'thicket-elements'
import './404.css'

export default ({ history }) => <div className="notFound">
  <img src={notFoundSvg} alt="Not Found Error Code" />
  <h3>Oops, you got lost or something went wrong.</h3>
  <div className="notFound__msg">The page you’re looking for isn’t available. Try checking the original link or go to Thicket Home using the button below.</div>
  <Button onClick={() => history.replace('/communities')}>Thicket Home</Button>
</div>