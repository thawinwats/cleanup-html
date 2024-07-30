import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Switch } from "../ui/switch"

export function CleanedHTML({ html }: { html: string }) {
  const [previewMode, setPreviewMode] = useState(false)
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1.5">
          <CardTitle>Cleaned HTML</CardTitle>
          <CardDescription>Removed Style & Class Attribute</CardDescription>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="preview-mode" onCheckedChange={setPreviewMode} />
          <Label htmlFor="preview-mode" className="cursor-pointer">
            Preview Mode
          </Label>
        </div>
      </CardHeader>
      <CardContent>
        {previewMode ? (
          <Card className="h-[418px] resize px-3 py-2 text-sm rounded-md border border-input bg-background shadow-none overflow-scroll">
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </Card>
        ) : (
          <Textarea
            disabled
            className="disabled:opacity-100 disabled:cursor-auto"
            rows={20}
            value={html}
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <CopyToClipboard text={html}>
          <Button>Copy to clipboard</Button>
        </CopyToClipboard>
      </CardFooter>
    </Card>
  )
}
