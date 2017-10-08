/* @flow */
import React from 'react'
import styled from 'styled-components'
import Button from 'components/Button'

type Props = {
  logout: Function
}

const Container = styled.div`
  margin-top: 2.4rem;
  display: flex;
`

const Logout = (props: Props) => {
  return (
    <Container>
      <Button red onClick={props.logout}>
        Logout
      </Button>
    </Container>
  )
}

export default Logout