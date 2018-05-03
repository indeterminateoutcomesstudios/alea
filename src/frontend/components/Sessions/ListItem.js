// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import slug from 'slugg'
import { fontSize, fonts } from 'frontend/styles/common'

const SessionName = styled.div`
  font-family: ${fonts.heading};
  font-size: ${fontSize.medium};
`

const Session = styled.div`
  padding: 1rem;
  border-radius: 5px;
  margin: 0 1rem 2rem;
  flex: 1 0 25%;
  max-width: 25%;
  min-height: 100px;
  cursor: pointer;
  background-color: ${props => props.theme.backgroundSecondary};
`

type Props = {
  id: string,
  name: string
}

const Item = (props: Props) => {
  const { id, name } = props
  return (
    <Session>
      <Link to={`/g/${slug(name)}/${id}`}>
        <SessionName>{props.name}</SessionName>
      </Link>
    </Session>
  )
}

export default Item
