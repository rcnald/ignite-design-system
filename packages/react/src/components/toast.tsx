import * as ToastComponent from '@radix-ui/react-toast'
import { X } from 'lucide-react'
import {
  ComponentProps,
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from 'react'

import { cn } from '../lib/utils'

export interface toastContextType {
  open: boolean
  setOpen: (state: boolean) => void
  timerRef: React.MutableRefObject<number>
}

const toastContext = createContext({} as toastContextType)

export interface ToastProps extends PropsWithChildren {}

export function Toast({ children }: ToastProps) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  return (
    <ToastComponent.Provider swipeDirection="right">
      <toastContext.Provider value={{ open, setOpen, timerRef }}>
        {children}
        <ToastComponent.Viewport className="fixed bottom-0 right-0 p-8" />
      </toastContext.Provider>
    </ToastComponent.Provider>
  )
}

export interface ToastTriggerProps extends ComponentProps<'button'> {}

export function ToastTrigger({
  onClick,
  children,
  ...props
}: ToastTriggerProps) {
  const { setOpen, timerRef } = useContext(toastContext)

  return (
    <button
      onClick={(event) => {
        if (onClick) {
          onClick(event)
        }

        setOpen(false)

        window.clearTimeout(timerRef.current)

        timerRef.current = window.setTimeout(() => {
          setOpen(true)
        }, 100)
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export interface ToastContentProps
  extends ComponentProps<typeof ToastComponent.Root> {
  title?: string
  description?: string
}

export function ToastContent({
  className,
  title,
  description,
  children,
  ...props
}: ToastContentProps) {
  const { setOpen, open } = useContext(toastContext)

  return (
    <ToastComponent.Root
      className={cn(
        "bg-gray800 min-w-[360px] relative flex-col flex rounded-sm px-5 py-3 font-default border-gray600 border border-solid data-[state='open']:animate-in data-[state='open']:slide-in-from-right data-[state='closed']:animate-out data-[state='closed']:fade-out",
        className,
      )}
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <ToastComponent.Title className="font-bold text-xl text-white">
        {title}
      </ToastComponent.Title>
      <ToastComponent.Description className="text-gray200 text-sm">
        {description}
      </ToastComponent.Description>
      {children}
      <ToastComponent.Close className="absolute right-5 top-3 text-gray200 hover:text-white">
        <X />
      </ToastComponent.Close>
    </ToastComponent.Root>
  )
}
