'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface DockItemProps {
  icon: React.ReactNode
  label: string
  className?: string
  index: number
  mouseX: number | null
}

const DockItem = ({ icon, label, className, index, mouseX }: DockItemProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const getScale = () => {
    if (mouseX === null || !ref.current) return 1
    
    const rect = ref.current.getBoundingClientRect()
    const center = rect.left + rect.width / 2
    const distance = Math.abs(mouseX - center)
    const maxDistance = 100
    
    // Create a smooth scale based on distance
    if (distance > maxDistance) return 1
    return 1 + 0.5 * (1 - distance / maxDistance)
  }

  return (
    <motion.div 
      ref={ref}
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <motion.div
            style={{ scale: getScale() }}
            className={cn(
              'group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-white/95 shadow-lg ring-1 ring-gray-100/20 transition-all duration-300 ease-out dark:bg-gray-800/95 dark:ring-white/10',
              'hover:ring-2 hover:ring-gray-200/50 dark:hover:ring-white/20',
              'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100',
              'after:absolute after:inset-0 after:-z-10 after:rounded-3xl after:bg-gradient-to-b after:from-gray-100/80 after:to-white/80 after:blur-md after:transition-opacity dark:after:from-gray-900/80 dark:after:to-gray-800/80',
              className
            )}
          >
            <div className="scale-[0.65] transition-transform duration-300 group-hover:scale-[0.7]">
              {icon}
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="rounded-lg border-none px-3 py-2 text-sm font-medium text-accent shadow-lg backdrop-blur-sm bg-gradient-to-b from-foreground/95 to-foreground/90 shadow-accent/20"
          sideOffset={8}
        >
          {label}
        </TooltipContent>
      </Tooltip>
    </motion.div>
  )
}

interface DockProps {
  items: Array<{
    icon: React.ReactNode
    label: string
  }>
  className?: string
}

export const Dock = ({ items, className }: DockProps) => {
  const [mouseX, setMouseX] = useState<number | null>(null)
  const dockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMouseX = (e: MouseEvent) => {
      if (dockRef.current) {
        const rect = dockRef.current.getBoundingClientRect()
        setMouseX(e.clientX - rect.left)
      }
    }

    const resetMouseX = () => setMouseX(null)

    if (dockRef.current) {
      dockRef.current.addEventListener('mousemove', updateMouseX)
      dockRef.current.addEventListener('mouseleave', resetMouseX)
    }

    return () => {
      if (dockRef.current) {
        dockRef.current.removeEventListener('mousemove', updateMouseX)
        dockRef.current.removeEventListener('mouseleave', resetMouseX)
      }
    }
  }, [])

  return (
    <TooltipProvider>
      <motion.div
        ref={dockRef}
        className={cn(
          'flex items-end gap-3 rounded-3xl bg-white/10 p-3 backdrop-blur-2xl dark:bg-gray-800/10',
          'ring-1 ring-gray-100/20 dark:ring-white/10',
          'shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            icon={item.icon}
            label={item.label}
            index={index}
            mouseX={mouseX}
          />
        ))}
      </motion.div>
    </TooltipProvider>
  )
} 