import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f ' : '#f9f9f9  ')};
  display: flex;
  flex-direction: column;
`
export const LikeButton = styled.button`
  cursor: pointer;
  background: transparent;
  margin: 5px;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
`
export const DisLikeButton = styled.button`
  cursor: pointer;
  background: transparent;
  margin: 5px;
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
`
