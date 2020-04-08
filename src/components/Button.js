import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Button({ text, url }) {
  return (
    <Link className="btn" to={url}>{text}</Link>
  )
}