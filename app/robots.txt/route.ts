import { NextResponse } from 'next/server'

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow test environment
User-agent: *
Disallow: /admin
Disallow: /booking/confirmation

Sitemap: https://harrislodges.com/sitemap.xml`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}