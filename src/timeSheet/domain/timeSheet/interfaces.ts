export interface ITimeSheet { 
    dia: string;
    pontos: string[]
}

export interface ITimeSheetEntity { 
    mes: string;
    horasTrabalhadas: string;
    horasExcedentes: string;
    horasDevidas: string;
    expedientes: ITimeSheet[];
}