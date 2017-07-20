import * as React from 'react'

interface Props {
  active: boolean;
  children?: string;
  onClick: Function;
}

const Link = (props: Props) => {
  if (props.active) {
    return <span>{props.children}</span>
  }

  return (
    // eslint-disable-next-line
    <a href="#"
       onClick={e => {
         e.preventDefault()
         props.onClick()
       }}
    >
      {props.children}
    </a>
  )
}

export default Link
