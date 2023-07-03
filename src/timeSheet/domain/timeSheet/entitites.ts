import { TimeSheetError } from "./errors";
import { ITimeSheet, ITimeSheetEntity } from "./interfaces";

/**
 * 
 * @namespace TimeSheetEntity
 * @description This is the Time Sheet Entity Class
 * @class
 * 
 */

export class TimeSheetEntity implements ITimeSheetEntity {
    public mes: string;
    public horasTrabalhadas: string;
    public horasExcedentes: string;
    public horasDevidas: string;
    public expedientes: ITimeSheet[];

    constructor(
        mes: string,
        horasTrabalhadas: string, 
        horasExcedentes: string, 
        horasDevidas: string,
        expedientes: ITimeSheet[]
    ){
        this.mes = mes;
        this.horasTrabalhadas = horasTrabalhadas;
        this.horasExcedentes = horasExcedentes;
        this.horasDevidas = horasDevidas;
        this.expedientes = expedientes;
    }

    public isValid(): boolean { 
        try {

            !this.mes ?? (() => { throw new TimeSheetError("MISSING_MES_ATTRIBUTE", "TIMESHEET_MISSING_ATTRIBUTES", "BAD_REQUEST")});
            !this.horasTrabalhadas ?? (() => { throw new TimeSheetError('MISSING_HORAS_TRABALHADAS_ATTRIBUTE', 'TIMESHEET_MISSING_ATTRIBUTES', 'BAD_REQUEST')});
            !this.horasExcedentes ?? (() => { throw new TimeSheetError("MISSING_HORAS_EXCEDENTES_ATTRIBUTE", "TIMESHEET_MISSING_ATTRIBUTES", "BAD_REQUEST")});
            !this.horasDevidas ?? (() => { throw new TimeSheetError("MISSING_HORAS_DEVIDAS_ATTRIBUTE", "TIMESHEET_MISSING_ATTRIBUTES", "BAD_REQUEST")});
            !(this.expedientes || this.expedientes.length === 0) ?? (() => { throw new TimeSheetError("MISSING_EXPEDIENTES_ATTRIBUTE", "TIMESHEET_MISSING_ATTRIBUTES", "BAD_REQUEST")}); 

            this.mes &&
            this.horasTrabalhadas &&
            this.horasExcedentes &&
            this.horasDevidas &&
            this.expedientes || this.expedientes.length >= 1 ? 
            true : (() => {throw new TimeSheetError("MISSING_ALL_ATTRIBUTES", "TIMESHEET_MISSING_ATTRIBUTES", "BAD_REQUEST");})

            return true;
        } catch (error) {
            error instanceof TimeSheetError ?? console.log(error)
        }
    }

}