import styled from 'styled-components/macro'
import { fadeIn } from './animations'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.3s ease;
`

const ModalContainer = styled.div`
  position: fixed;
  width: 40rem;
  max-width: 85%;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.lightBackground};
  padding: ${({ theme }) => theme.spacingS};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  box-shadow: ${({ theme }) => theme.bigBoxShadow};
  z-index: 11;
`

const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.title};
  font-size: 3.5rem;
  font-weight: ${({ theme }) => theme.fontBold};
`

const ModalContent = styled.div`
  position: relative;
  min-height: ${props => (props.setMinHeight ? '25rem' : 'unset')};

  .loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .error {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }
`

const ModalForm = styled.form`
  margin-top: ${({ theme }) => theme.spacingS};
`

const InputWrapper = styled.div`
  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.spacingS};
  }
`

const ModalLabel = styled.label`
  color: ${({ theme }) => theme.text1};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontSemiBold};
  display: block;
`

const ModalInput = styled.input`
  width: 100%;
  height: 5rem;
  color: ${({ theme }) => theme.text1};
  background: ${({ theme }) => theme.text5};
  font-weight: ${({ theme }) => theme.fontMedium};
  padding: ${({ theme }) => theme.spacingXS};
  margin-top: ${({ theme }) => theme.spacingXXS};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.text2};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text2};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.text2};
  }
`

const ModalText = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.text1};
  margin-top: ${({ theme }) => theme.spacingS};
`

const ButtonsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacingM};
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 0.5rem;
  }
`

export const Styled = {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalForm,
  InputWrapper,
  ModalLabel,
  ModalInput,
  ModalText,
  ButtonsContainer
}
