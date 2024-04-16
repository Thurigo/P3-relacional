import { Console } from "console"
import { Index } from "typeorm"
import { runInNewContext } from "vm"
import cluster  from "cluster"
const os = require("node:os")

const runPrimaryProcess = () => {
    const processCount = 8
    console.table(`Primary ${process.pid} is running`)
    console.table(`Forking Server With ${processCount} process \n`)

    for(let index = 0; index < processCount; index++) cluster.fork()

}

const runWorkProcess = async () => {
    await import('./src/server');
}
cluster.isPrimary ? runPrimaryProcess() : runWorkProcess()