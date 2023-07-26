import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  '0%': {
    transform: 'translateX(calc(100% + var(--viewport-padding))',
  },
  '100%': {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  '100%': { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
})

export const ToastContainer = styled(Toast.Root, {
  borderRadius: '$sm',
  backgroundColor: '$gray800',
  padding: '$5 $3',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-state="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-state="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-state="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  fontFamily: '$default',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
  marginTop: '$2',
})

export const ToastCloseButton = styled('button', {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  '--viewport-padding': '25px',
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--viewport-padding)',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
