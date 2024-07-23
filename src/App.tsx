import { RemoveAttributes } from "@/components/remove-attributes"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-col h-screen gap-6">
          <div className="py-4 px-6 flex justify-between shadow">
            <h1 className="text-2xl font-bold">Cleanup HTML</h1>
            <ThemeToggle />
          </div>

          <div className="p-6 grow">
            <RemoveAttributes />
          </div>
        </div>
      </ThemeProvider>
      <Toaster />
    </>
  )
}

export default App
