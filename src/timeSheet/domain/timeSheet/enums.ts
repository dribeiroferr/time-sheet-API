const TimeSheetErrorsNames = { 
    MISSING_ALL_ATTRIBUTES : 'MISSING ALL ATTRIBUTES',
    MISSING_MES_ATTRIBUTE : "MISSING MES ATTRIBUTE",
    MISSING_HORAS_TRABALHADAS_ATTRIBUTE : "MISSING HORAS TRABALHADAS ATTRIBUTE",
    MISSING_HORAS_EXCEDENTES_ATTRIBUTE : 'MISSING HORAS EXCEDENTES ATTRIBUTE',
    MISSING_HORAS_DEVIDAS_ATTRIBUTE : 'MISSING HORAS DEVIDAS ATTRIBUTE',
    MISSING_EXPEDIENTES_ATTRIBUTE : 'MISSING EXPEDIENTES ATTRIBUTE',
    NOT_FOUND : 'NOT FOUND'
} as const

const TimeSheetErrorsCodes = {
    BAD_REQUEST: "400",
    CONFLICT: "409", 
    INTERNAL_ERROR : "500",
} as const;

const TimeSheetErrorsMessages = {
    TIMESHEET_MISSING_ATTRIBUTES: TimeSheetErrorsNames
} as const;

export type TimeSheetErrorNamesType = keyof typeof TimeSheetErrorsNames;
export type TimeSheetErrorCodesType = keyof typeof TimeSheetErrorsCodes;
export type TimeSheetErrorMessagesType = keyof typeof TimeSheetErrorsMessages;
