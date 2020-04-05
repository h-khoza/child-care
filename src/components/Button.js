import React from 'react'

export default function Button({ text, url }) {
  return (
    <a className="btn" href={url}>{text}</a>
  )
}
