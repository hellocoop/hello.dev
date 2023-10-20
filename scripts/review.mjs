#!/usr/bin/env zx
try {
    // $.verbose = false //do not log output of script run using zx

    //Is not in main branch
    const prBranchName = (await $`git branch --show-current`).stdout.trim()
    if(prBranchName === "main")
        throw new Error("Cannot start a review from main branch.\nPlease switch to your development branch and try again.")

    //Get latest changes from main
    await $`git pull origin main --rebase`

    //Run tests
    await $`npm run test`
    
    //Create PR
    let isExistingPR = false //for slack notification
    try {
        await $`gh pr create --base main --title ${prBranchName} --body ""`
    } catch(p){
        if(!p.stderr.includes("already exists")) { //TBD: this is brittle to check for existing PR
            throw p
        }
        //There is an existing PR. Do not die as author may have inteded to just update the PR.
        isExistingPR = true
    }
    
    //Play success sound to notify (Only works on MacOS)
    await $`afplay /System/Library/Sounds/Glass.aiff`

    //GitHub-Slack app sends a PR created Slack message to #content-updates channel
} catch(p) {
    if(p.stderr) { //Error thrown by zx
        console.log(`Exit code: ${p.exitCode}`)
        console.log(`Error: ${p.stderr}`)
    } else { //Standard JS error obj
        console.log(p)
    }
    //Play error sound to notify (Only works on MacOS)
    await $`afplay /System/Library/Sounds/Funk.aiff`
    process.exit(1)
}