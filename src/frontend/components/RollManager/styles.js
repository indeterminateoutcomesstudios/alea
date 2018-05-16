// @flow
import styled from 'styled-components'

export const Dimmer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.modalOverlay};
`
