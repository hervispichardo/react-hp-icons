import React, { Component } from 'react'

import Icon, {Icons} from 'react-hp-icons'


const listIcons = () => {
  let keys = [];
  Object.entries(Icons).forEach(([key, value]) => {
    console.log("key: ", key)
    keys.push(key)
  })

  return keys.map(icon =>
    <div className="cont-icon">
      <span>{icon}</span>
      <div className="icon">
        <Icon
          color={'#444'}
          size={4}
          type={Icons[icon]}
        />
      </div>
    </div>

  )
}
export default class App extends Component {
  render () {
    return (
      <div className="icons">
        { listIcons()}
      </div>
    )
  }
}
