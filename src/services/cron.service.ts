import { CronJob } from 'cron';

type CronType = string | Date;
type OnTick = () => void;

export class CronService {
  private static instance: CronService;
  private jobs: Map<string, CronJob> = new Map(); // Store jobs by an ID or name

  private constructor() {} // Private constructor to prevent direct instantiation

  public static getInstance(): CronService {
    if (!CronService.instance) {
      CronService.instance = new CronService();
    }
    return CronService.instance;
  }

  // * Method to start a cron job
  public startJob(id: string, cronTime: CronType, onTick: OnTick): void {
    if (this.jobs.has(id)) {
      console.log(`Job with id "${id}" is already running.`);
      return;
    }

    const job = new CronJob(cronTime, onTick);
    job.start();
    this.jobs.set(id, job);
    console.log(`Job with id "${id}" started.`);
  }

  // * Method to stop and remove a cron job
  public stopJob(id: string): void {
    const job = this.jobs.get(id);
    if (job) {
      job.stop();
      this.jobs.delete(id);
      console.log(`Job with id "${id}" stopped and removed.`);
    } else {
      console.log(`Job with id "${id}" not found.`);
    }
  }
}
