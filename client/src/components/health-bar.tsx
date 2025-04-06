import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface HealthBarProps {
  value: number
  max: number
  className?: string
}

export function HealthBar({ value, max, className }: HealthBarProps) {
  const percentage = (value / max) * 100

  // Determine color based on health percentage
  const getHealthColor = () => {
    if (percentage > 70) return "from-green-500 to-green-600"
    if (percentage > 30) return "from-yellow-500 to-green-500"
    return "from-red-700 to-red-800"
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Heart className="h-4 w-4 text-red-500" />
      <div className="w-24 h-2 bg-gray-900/50 rounded-full overflow-hidden">
        <div
          className={cn("h-full transition-all duration-500 ease-out rounded-full bg-gradient-to-r", getHealthColor())}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs font-bold text-blue-400">
        {value}/{max} hp
      </span>
    </div>
  )
}

