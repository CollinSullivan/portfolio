const fs = require('fs')
const path = require('path')
const axios = require('axios')

exports.onPreBootstrap = async () => {
    let currentAccessLevel = 30
    while(currentAccessLevel < 60) {
        try {
            // Make the API call to get the repositories
            const response = await axios.get(process.env.GATSBY_API_URL + 'projects?membership=true&min_access_level=' + currentAccessLevel, {
                headers: {
                    'PRIVATE-TOKEN': process.env.GATSBY_GITLAB_ACCESS_TOKEN
                }
            })

            // Loop through each repository and create an .mdx file
            response.data.forEach(repo => {
                const repoName = repo.name
                const repoDirPath = path.resolve(`./src/pages/projects/${repoName}`)
                const repoFullPath = path.resolve(`./src/pages/projects/${repoName}/index.mdx`)
                const repoSlug = repoName.replace(/\s+/g, '-').toLowerCase()
                let repoAccessLevel
                switch (currentAccessLevel) {
                    case 10:
                    repoAccessLevel = 'Guest access';
                    break;
                    case 20:
                    repoAccessLevel = 'Reporter access';
                    break;
                    case 30:
                    repoAccessLevel = 'Developer access';
                    break;
                    case 40:
                    repoAccessLevel = 'Maintainer access';
                    break;
                    case 50:
                    repoAccessLevel = 'Owner access';
                    break;
                    default:
                    repoAccessLevel = repo.access_level;
                    break;
                }
                // Create the file and write the content
                // Uncomment the check below if you don't want overwrites every time you build the site
                // if (fs.existsSync(repoPath)) {
                //     console.log(`Skipping ${repo.name} file already exists`)
                //     return
                // }

                const content = `---
title: "${repoName}"
date: "${repo.last_activity_at}"
slug: "${repoSlug}"
access: "${repoAccessLevel}"
created: "${repo.created_at}"
---
${repo.description}
`
                fs.mkdirSync(repoDirPath, {recursive: true})
                fs.writeFileSync(repoFullPath, content)
                console.log(`Generated ${repo.name} - ${repoFullPath}`)
            })

            console.log(`Generated .mdx files for ${response.data.length} repositories.`)
        } catch (error) {
            console.error('Error generating .mdx files:', error)
        }
        currentAccessLevel = currentAccessLevel + 10
    }
}
