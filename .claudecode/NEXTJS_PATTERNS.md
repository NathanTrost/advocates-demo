# Next.js App Router Quick Reference

## Client Component (for hooks/state)

\`\`\`typescript
'use client'
import { useState, useEffect } from 'react'

export default function AdvocatesTable() {
  const [search, setSearch] = useState('')
  // hooks work here
}
\`\`\`

## API Route

\`\`\`typescript
// app/api/advocates/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || '1'
  
  // Work with mock data
  return Response.json({
    data: paginated,
    pagination: { page, total }
  })
}
\`\`\`

## Common Patterns

- Server Components are default (no 'use client')
- Client Components need 'use client' for interactivity
- API routes in app/api/*/route.ts
- Metadata export for SEO
