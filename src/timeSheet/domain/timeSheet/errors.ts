import { ErrorBase } from "../../../utils/errors/errors";

type ErrorName = 
    | 'MISSING_ATTRIBUTES'
    | 'NOT_FOUND'
    | 'ALREADY_SATISFIED'
export class TimeSheetError extends ErrorBase<ErrorName> {}

