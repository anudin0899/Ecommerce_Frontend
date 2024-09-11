import React from 'react'
import Style from "./index.module.css"
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Breadcrumb = ({ pathSegments }) => {
  return (
    <div className={Style.breadcrumb}>
      <div className={Style.container}>
        <ul className={Style.breadcrumb_wrap}>
          <li className={Style.item} ><Link className={Style.navlink} to='/'>Home</Link> <i><MdKeyboardArrowRight /></i></li>
          {pathSegments.map((segment, index) => (
            <li className={Style.item} key={index}>
              <Link className={Style.navlink} to={'/' + pathSegments.slice(0, index + 1).join('/')}>{segment}</Link>
              {index < pathSegments.length - 1 && <MdKeyboardArrowRight /> }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumb