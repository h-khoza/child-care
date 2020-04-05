import React from 'react'

export default function Button({ text, url }) {
  return (
    <a href={url}>{text}</a>
  )
}
