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
            this.mes &&
            this.horasTrabalhadas &&
            this.horasExcedentes &&
            this.horasDevidas &&
            this.expedientes ? 
            true : (() => {throw new TimeSheetError({
                name: "MISSING_ATTRIBUTES",
                message: "Internal Error",
                cause: "One attribute is missing"
            });})

            return true;
        } catch (error) {
            if(error instanceof TimeSheetError){
                if(error.name === "MISSING_ATTRIBUTES"){
                    console.error(error);
                }
            }
        }
    }

}