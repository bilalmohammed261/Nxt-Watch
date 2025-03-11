import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f ' : '#f9f9f9  ')};
  display: flex;
  flex-direction: column;
`
