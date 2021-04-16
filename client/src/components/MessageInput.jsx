import React, { useState } from 'react'
import { EmojiPicker } from './EmojiPicker'
import { ReactComponent as SendIcon } from '../assets/icons/send.svg'
import { ReactComponent as CameraIcon } from '../assets/icons/camera.svg'
import { ReactComponent as EmojiIcon } from '../assets/icons/emoji.svg'
import { Styled } from '../styles/MessageInput.styles'
import { parseFileName } from '../utils/helpers'

export const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (selectedFile) {
      sendMessage(selectedFile.base64, true)
      setSelectedFile(null)
    } else if (message) {
      sendMessage(message)
      setMessage('')
    }
  }

  const handleTextAreaSubmit = e => {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleImageChange = e => {
    const reader = new FileReader()
    reader.onload = function () {
      const base64 = reader.result.replace(/.*base64,/, '')
      const name = e.target.files ? parseFileName(e.target.files[0].name) : ''
      setSelectedFile({ base64, name })
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const addEmoji = emoji => setMessage(message + ` ${emoji.native}`)

  return (
    <Styled.TextAreaContainer>
      <form onSubmit={handleSubmit}>
        <Styled.IconButton onClick={() => setShowEmojiPicker(true)}>
          <EmojiIcon />
        </Styled.IconButton>
        {selectedFile ? (
          <Styled.ImageContainer>
            <Styled.Image
              src={`data:image/jpg;base64,${selectedFile.base64}`}
            />
            <span
              className="expand-clickable-area"
              onClick={() => setSelectedFile(null)}
            >
              +
            </span>
          </Styled.ImageContainer>
        ) : (
          <Styled.TextArea
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={handleTextAreaSubmit}
            placeholder="Write your message here"
          />
        )}
        {message || selectedFile ? (
          <Styled.Button>
            <SendIcon />
          </Styled.Button>
        ) : (
          <Styled.ImageInputContainer>
            <label>
              <CameraIcon />
              <input type="file" id="image-file" onChange={handleImageChange} />
            </label>
          </Styled.ImageInputContainer>
        )}
      </form>
      <EmojiPicker
        open={showEmojiPicker}
        setOpen={setShowEmojiPicker}
        addEmoji={addEmoji}
      />
    </Styled.TextAreaContainer>
  )
}
