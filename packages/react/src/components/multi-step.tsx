import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

import { cn } from '../lib/utils'

export interface MultiStepProps extends ComponentProps<'div'> {
  currentStep: number
  totalSteps: number
}

export function MultiStep({
  className,
  currentStep = 1,
  totalSteps = 4,
  ...props
}: MultiStepProps) {
  const Steps = () => {
    return (
      <>
        {Array.from({ length: totalSteps }).map((_, step) => {
          const isStepFilled = step <= currentStep - 1
          const stepVariant = isStepFilled ? 'filled' : 'empty'

          return <Step key={step} variant={stepVariant} />
        })}
      </>
    )
  }

  return (
    <div className={cn('flex flex-col gap-1 w-full', className)} {...props}>
      <span className="font-default text-xs text-gray200">
        Passo {currentStep} de {totalSteps}
      </span>
      <div
        style={{ '--steps': totalSteps } as React.CSSProperties}
        className="grid grid-rows-1 grid-cols-[repeat(var(--steps),1fr)] gap-x-2 w-full"
      >
        <Steps />
      </div>
    </div>
  )
}

export const stepVariants = tv({
  base: 'h-1 w-full rounded-px',
  variants: {
    variant: {
      filled: 'bg-gray100',
      empty: 'bg-gray600',
    },
  },
  defaultVariants: {
    variant: 'empty',
  },
})

export interface StepProps {
  variant: keyof typeof stepVariants.variants.variant
}

export function Step({ variant }: StepProps) {
  return <span className={stepVariants({ variant })} />
}
