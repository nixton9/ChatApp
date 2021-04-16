import styled from 'styled-components/macro'

const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: ${props =>
    props.isFromOwnUser ? 'flex-end' : 'flex-start'};
  margin-bottom: ${({ theme }) => theme.spacingS};

  .avatar {
    margin-right: ${({ theme }) => theme.spacingXS};
    flex-shrink: 0;
  }
`

const Message = styled.div`
  position: relative;
  font-size: 1.2rem;
  line-height: 2.2rem;
  font-weight: ${({ theme }) => theme.fontMedium};
  color: ${({ theme }) => theme.grey2};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.bigBorderRadius};
  border-bottom-right-radius: ${props =>
    props.isFromOwnUser ? 0 : props.theme.bigBorderRadius};
  border-bottom-left-radius: ${props =>
    props.isFromOwnUser ? props.theme.bigBorderRadius : 0};
  background-color: ${props =>
    props.isFromOwnUser ? props.theme.grey5 : props.theme.white};

  &:hover {
    .timestamp {
      display: block;
    }
  }

  img {
    max-width: 90%;
    width: 30rem;
    border-radius: ${({ theme }) => theme.mainBorderRadius};
  }
`

const TimeStamp = styled.span`
  color: ${({ theme }) => theme.grey1};
  position: absolute;
  bottom: -2.5rem;
  right: ${props => (props.isFromOwnUser ? 0 : 'unset')};
  left: ${props => (props.isFromOwnUser ? 'unset' : 0)};
  font-size: 1.1rem;
  display: none;
`

export const Styled = {
  MessageContainer,
  Message,
  TimeStamp
}
