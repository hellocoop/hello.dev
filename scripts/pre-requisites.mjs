import { execSync } from "child_process"

// TBD: Check zx as well or use npx to run this file
const requiredPackages = ['gh', 'git']

for (const pkg of requiredPackages) {
    try {
        execSync(`which ${pkg}`, { stdio: 'ignore' })
    } catch (error) {
        console.error(`${pkg} is not installed\n`)
        process.exit(1)
    }
}

//TBD: Check version of requiredPackages + node and npm