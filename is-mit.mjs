import { cd, io, read } from 'fsxx'

console.log(await read`README.md`)

const { name } = await read.json`package.json`

cd('packages')
const { data, save } = await io.json`./core/package.json`
data.version = '0.1.1'
await save()

const isMIT = read.sync`LICENSE`.includes('MIT')