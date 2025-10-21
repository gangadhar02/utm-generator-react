import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Copy, Check, Link2 } from 'lucide-react'

export function UtmGenerator() {
  const [baseUrl, setBaseUrl] = useState('')
  const [source, setSource] = useState('')
  const [medium, setMedium] = useState('')
  const [campaign, setCampaign] = useState('')
  const [term, setTerm] = useState('')
  const [content, setContent] = useState('')
  const [generatedUrl, setGeneratedUrl] = useState('')
  const [copied, setCopied] = useState(false)

  const generateUrl = () => {
    if (!baseUrl) {
      return
    }

    try {
      const url = new URL(baseUrl)
      const params = new URLSearchParams()

      if (source) params.append('utm_source', source)
      if (medium) params.append('utm_medium', medium)
      if (campaign) params.append('utm_campaign', campaign)
      if (term) params.append('utm_term', term)
      if (content) params.append('utm_content', content)

      const paramString = params.toString()
      const finalUrl = paramString ? `${url.origin}${url.pathname}?${paramString}` : baseUrl

      setGeneratedUrl(finalUrl)
    } catch (error) {
      console.error('Invalid URL:', error)
      setGeneratedUrl('Invalid URL. Please enter a valid URL.')
    }
  }

  const copyToClipboard = async () => {
    if (generatedUrl) {
      try {
        await navigator.clipboard.writeText(generatedUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        console.error('Failed to copy:', error)
      }
    }
  }

  const resetForm = () => {
    setBaseUrl('')
    setSource('')
    setMedium('')
    setCampaign('')
    setTerm('')
    setContent('')
    setGeneratedUrl('')
    setCopied(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Link2 className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              UTM Generator
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Create trackable URLs with UTM parameters for your marketing campaigns
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Campaign URL Builder</CardTitle>
            <CardDescription>
              Fill in the fields below to generate your custom UTM tracking URL
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="baseUrl">
                Website URL <span className="text-destructive">*</span>
              </Label>
              <Input
                id="baseUrl"
                type="url"
                placeholder="https://www.example.com"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                The full website URL (e.g., https://www.example.com)
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="source">Campaign Source</Label>
                <Input
                  id="source"
                  placeholder="google, newsletter, facebook"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  The referrer (e.g., google, newsletter)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="medium">Campaign Medium</Label>
                <Input
                  id="medium"
                  placeholder="cpc, email, social"
                  value={medium}
                  onChange={(e) => setMedium(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Marketing medium (e.g., cpc, email)
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="campaign">Campaign Name</Label>
              <Input
                id="campaign"
                placeholder="spring_sale, product_launch"
                value={campaign}
                onChange={(e) => setCampaign(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Product, promo code, or slogan
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="term">Campaign Term (optional)</Label>
                <Input
                  id="term"
                  placeholder="running+shoes"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Identify paid keywords
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Campaign Content (optional)</Label>
                <Input
                  id="content"
                  placeholder="banner_ad, text_link"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Differentiate similar content
                </p>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={generateUrl} className="flex-1">
                Generate URL
              </Button>
              <Button onClick={resetForm} variant="outline">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {generatedUrl && (
          <Card>
            <CardHeader>
              <CardTitle>Generated URL</CardTitle>
              <CardDescription>
                Your campaign URL with UTM parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Textarea
                  value={generatedUrl}
                  readOnly
                  className="font-mono text-sm min-h-[100px]"
                />
              </div>
              <Button
                onClick={copyToClipboard}
                variant="secondary"
                className="w-full"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy to Clipboard
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
