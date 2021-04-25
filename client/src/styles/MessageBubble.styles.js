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
  color: ${({ theme }) => theme.text1};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.bigBorderRadius};
  border-bottom-right-radius: ${props =>
    props.isFromOwnUser ? 0 : props.theme.bigBorderRadius};
  border-bottom-left-radius: ${props =>
    props.isFromOwnUser ? props.theme.bigBorderRadius : 0};
  background-color: ${props =>
    props.isFromOwnUser ? props.theme.text5 : props.theme.text2};

  &:hover {
    .timestamp {
      display: block;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  display: inline-flex;
  max-width: 95%;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.mainBorderRadius};
    z-index: 11;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover  {
    &:before {
      opacity: 1;
    }

    svg {
      opacity: 1;
    }
  }

  img {
    max-width: 100%;
    width: 30rem;
    border-radius: ${({ theme }) => theme.mainBorderRadius};
  }

  svg {
    width: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`

const TimeStamp = styled.span`
  color: ${({ theme }) => theme.text1};
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
  ImageWrapper,
  TimeStamp
}
