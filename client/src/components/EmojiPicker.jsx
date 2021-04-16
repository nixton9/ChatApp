import React from 'react'
import { theme } from '../styles/theme'
import { Picker } from 'emoji-mart'
import styled from 'styled-components'
import 'emoji-mart/css/emoji-mart.css'

const PickerOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

export const EmojiPicker = ({ open, setOpen, addEmoji }) => {
  return open ? (
    <>
      <PickerOverlay onClick={() => setOpen(false)} />
      <Picker
        onSelect={addEmoji}
        color={theme.accent}
        style={{ fontFamily: theme.fontFamily }}
      />
    </>
  ) : null
}
