import { Provider } from '@radix-ui/react-toast'
import { colors } from '@ignite-ui/tokens'
import { useState, useEffect } from 'react'
import { X } from 'phosphor-react'
import {
  ToastContainer,
  ToastTitle,
  ToastDescription,
  ToastCloseButton,
  ToastViewport,
} from './styles'

export interface ToastProps {
  title: string
  description: string
  isOpen: boolean
}

export function Toast({ title, description, isOpen }: ToastProps) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <Provider swipeDirection="right">
      <ToastContainer open={open} onOpenChange={setOpen}>
        <ToastCloseButton onClick={() => setOpen(false)}>
          <X size={20} color={colors.gray200} />
        </ToastCloseButton>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </Provider>
  )
}

Toast.displayName = 'Toast'
