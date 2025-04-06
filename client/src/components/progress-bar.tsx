import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  max: number
  className?: string
  barClassName?: string
}

export function ProgressBar({ value, max, className, barClassName }: ProgressBarProps) {
  const percentage = (value / max) * 100

  return (
    <div className={cn("w-full bg-gray-900/50 rounded-full overflow-hidden", className)}>
      <div
        className={cn("h-full transition-all duration-500 ease-out rounded-full", barClassName)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

