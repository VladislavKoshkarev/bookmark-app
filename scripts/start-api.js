import { spawn } from 'child_process'
import { arch, platform } from 'process'

let binary

console.log(`Starting backend: ${binary}`)

switch (process.platform) {
  case 'darwin':
    binary = arch === 'arm64' ? 'bookmark-api-darwin-arm64' : 'bookmark-api-darwin-amd64'
    break
  case 'win32':
    binary = arch === 'ia32' ? 'bookmark-api-windows-386.exe' : 'bookmark-api-windows-amd64.exe'
    break
  case 'linux':
    binary = arch === 'ia32' ? 'bookmark-api-linux-386' : 'bookmark-api-linux-amd64'
    break
  default:
    throw new Error('Ваша операционная система не поддерживается')
}

import path from 'node:path'

const binaryPath = path.resolve('backend/bin', binary)

const child = spawn(binaryPath, [], {
  stdio: 'inherit',
})

child.on('error', (err) => {
  console.error('Failed to start backend')
  console.error(err.message)
})

process.on('SIGINT', () => {
  child.kill()
  process.exit()
  console.log(`Backend stopped (exit code: ${code})`)
})
