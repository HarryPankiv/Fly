import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
    	<div>
    		<nav>
    			<ul>
			      <li><Link className="" to="/home">Home</Link></li>
			      {/*<li><Link className="" to="/" activeClassName="active"></Link></li>*/}
		       </ul>
	      </nav>
    	</div>
  	 )
  }
}