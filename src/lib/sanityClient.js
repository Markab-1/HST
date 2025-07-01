
import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'acg6q2jd',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-02-06',
})

