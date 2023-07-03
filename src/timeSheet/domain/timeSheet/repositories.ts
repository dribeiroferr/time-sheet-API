import { TimeSheetEntity } from "./entitites";

/**
 * 
 * @namespace TimeSheetRepository
 * @description
 * @interface
 */

export interface TimeSheetRepository {
    findByMonth(mes: string): Promise<TimeSheetEntity[] | undefined>;
    save(timeSheet: TimeSheetEntity): Promise<void>;
}