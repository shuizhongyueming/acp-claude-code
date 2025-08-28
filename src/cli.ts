#!/usr/bin/env node

import { main } from './index.js'

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('[Main] Unhandled error:', error)
    process.exit(1)
  })
}