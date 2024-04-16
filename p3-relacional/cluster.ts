import { Console } from "console"
import { Index } from "typeorm"
import { runInNewContext } from "vm"
const cluster = require("cluster");
const os = require("node:os")

const runPrimaryProcess = () => {
    const processCount = 4
    console.log(`Primary ${process.pid} is running`)
    console.log(`Forking Server With ${processCount} process \n`)

    for(let index = 0; index < processCount; index++) cluster.fork()

}

const runWorkProcess = async () => {
    await import('./src/server');
}
cluster.isPrimary ? runPrimaryProcess() : runWorkProcess()