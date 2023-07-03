import { ErrorBase } from "../../../utils/errors/errors";
import { TimeSheetErrorNamesType, TimeSheetErrorCodesType, TimeSheetErrorMessagesType } from "./enums";

export class TimeSheetError extends ErrorBase<TimeSheetErrorNamesType, TimeSheetErrorMessagesType, TimeSheetErrorCodesType> {
  constructor(errorName: TimeSheetErrorNamesType, errorMessage: TimeSheetErrorMessagesType, errorCode: TimeSheetErrorCodesType) {
    super({
      name: errorName,
      message: errorMessage,
      code: errorCode,
    });
  }
}

