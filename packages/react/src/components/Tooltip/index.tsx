import { Provider, Root, Trigger, Portal } from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'
import { ReactNode } from 'react'
import { Text } from '../Text'

export interface TooltipProps {
  text: string
  children: ReactNode
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <TooltipContent>
            <Text>{text}</Text>
            <TooltipArrow />
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  )
}
