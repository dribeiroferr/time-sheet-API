import { TimeSheetEntity } from "../../../../timeSheet/domain/timeSheet/entitites";
import { TimeSheetRepository } from "../../../../timeSheet/domain/timeSheet/repositories";
import { TimeSheetError } from "../../../../timeSheet/domain/timeSheet/errors";

export class InMemoryTimeSheetRepository implements TimeSheetRepository {
    private timeSheet: TimeSheetEntity[];

    public async findByMonth(mes: string): Promise<TimeSheetEntity[]> {
        try {
            const sheet = this.timeSheet.filter((timesheet) => timesheet.mes === mes)
            sheet ? sheet : (() => { throw new TimeSheetError("NOT_FOUND", "TIMESHEET_MISSING_ATTRIBUTES", "CONFLICT") })
        } catch (error) {
            return error
        }
    }

    public async save(timeSheet: TimeSheetEntity): Promise<void> {
        try {
            this.timeSheet.push(timeSheet)
        } catch (error) {
            console.error(error)
        }
    }
}