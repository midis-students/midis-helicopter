import { Job } from "./Job";
import { Liver, Worker } from "./People";
import fs from 'fs';

const db = JSON.parse(fs.readFileSync("data.json", "utf-8"));

interface IOptions {
    Livers: Array<Liver>;
    Workers: Array<Worker>;
    AdditionalSpends: number;
}

type DBLiver = {
    name: string;
    entrance: number;
    floor: number;
    apartment: number;
}

type DBWorker = {
    name: string;
    job: number;
}

type DBJob = {
    name: string;
    payment: number;
}

const Jobs = db.jobs.map((job: DBJob)=>{
    const {name, payment} = job;
    return new Job(name, payment);
})

const cantPayLivers: number = Math.floor(Math.random() * 100 + 100);

const Options: IOptions = {
    Livers: db.livers.map((liver: DBLiver, index: number)=>{
        const { name, entrance, floor, apartment } = liver;
        return new Liver(name, index < cantPayLivers, entrance, floor, apartment)
    }),
    Workers: db.workers.map((worker: DBWorker)=>{
        const {name, job} = worker;
        return new Worker(name, Jobs[job])
    }),
    AdditionalSpends: 10000
}

function init(options: IOptions) {
    const workerPayment = options.Workers.reduce((acc, worker) => acc + worker.job.payment, 0);
    const allPayment = options.AdditionalSpends + workerPayment;
    const payLivers = options.Livers.length - cantPayLivers;
    const payAmount = allPayment / payLivers;
    const payAmountCeli = Math.ceil(payAmount);
    const payRemainder = payLivers * payAmountCeli - allPayment;
    
    console.log(`Платящих: ${payLivers}\nНе платящих: ${cantPayLivers}\nРабочих: ${options.Workers.length}\n\nТребуемая з/п: ${workerPayment}р.\nДоп. траты: ${options.AdditionalSpends}р.\nВ сумме: ${allPayment}р.\n\nСодрать с каждого по: ${payAmountCeli}р.\n\nИ ${payRemainder}р. останется на пиво`)
}



init(Options)