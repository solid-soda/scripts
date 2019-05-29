const find = require('find')
const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)

const projectWithDependency = async (projectPath, dependency) => {
  const files = await new Promise(resolve =>
    find.file(
      new RegExp('^((?!node_modules).)+?(package.json)$'),
      projectPath,
      resolve,
    ),
  )

  const contents = await Promise.all(files.map(name => readFile(name)))

  const haveDependency = contents
    .map(content => JSON.parse(content))
    .map(info => {
      const dependencies = info.dependencies || {}
      const devDependencies = info.devDependencies || {}

      return {
        ...dependencies,
        ...devDependencies,
      }
    })
    .map(dependencies => Object.keys(dependencies))
    .reduce((acc, cur) => [...acc, ...cur], [])
    .includes(dependency)

  return haveDependency
}

module.exports = projectWithDependency