import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

export const FormSchema = z.object({
  htmlInput: z.string(),
})

export function PasteHTML({
  setCleanedHtml,
}: { setCleanedHtml: React.Dispatch<React.SetStateAction<string>> }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      htmlInput: `<div class="myClass" style="color: red;">Content</div> 
<p class="myClass" style="font-size: 12px;">More content</p>`,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(data.htmlInput, "text/html")
    const elements = doc.querySelectorAll("*")

    elements.forEach((element) => {
      element.removeAttribute("style")
      element.removeAttribute("class")
    })

    setCleanedHtml(doc.body.innerHTML)

    toast.success("HTML style & class removed successfully!")
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Paste HTML</CardTitle>
        <CardDescription>Remove Style & Class Attribute</CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="w-full space-y-6">
            <FormField
              control={form.control}
              name="htmlInput"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your HTML here"
                      rows={20}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button type="submit">Remove Style & Class</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
