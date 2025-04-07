import { Dock } from '@/components/dock/dock'
import { OndaIcon, CapasIcon, PlaceholderIcon, VisionIcon, VoltioIcon, TerminalIcon } from '@/components/dock/icons'

export default function Home() {
  const dockItems = [
    { icon: <OndaIcon />, label: 'Onda' },
    { icon: <CapasIcon />, label: 'Capas' },
    { icon: <VisionIcon />, label: 'Vision' },
    { icon: <VoltioIcon />, label: 'Voltio' },
    { icon: <TerminalIcon />, label: 'Terminal' },
    { icon: <PlaceholderIcon />, label: 'Your Appme' },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Dock items={dockItems} className="mb-8" />
    </main>
  )
}
