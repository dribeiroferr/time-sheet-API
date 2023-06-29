import { TimeSheetEntity } from "../../../../../timeSheet/domain/timeSheet/entitites";
import { TimeSheetError } from "../../../../../timeSheet/domain/timeSheet/errors";

// Creating instance with valid parameters:

it('test_create_instance_with_valid_parameters', () => {
    const timeSheetEntity = new TimeSheetEntity('January', '160', '10', '10', [
        {
            dia: '01/01/2022',
            pontos: ['08:00', '12:00', '13:00', '17:00']
        }
    ]);
    expect(timeSheetEntity).toBeInstanceOf(TimeSheetEntity);
});

// Testing isValid() method returns true when all required attributes are present
it('test_is_valid_returns_true_when_all_attributes_are_present', () => {
    const timeSheetEntity = new TimeSheetEntity('January', '160', '10', '10', [
        {
            dia: '01/01/2022',
            pontos: ['08:00', '12:00', '13:00', '17:00']
        }
    ]);
    expect(timeSheetEntity.isValid()).toBe(true);
});

// // Tests if isValid() method throws TimeSheetError when 'mes' attribute is missing
// it('test_is_valid_throws_error_when_mes_attribute_is_missing', () => {
//     const timeSheetEntity = new TimeSheetEntity('', '160', '10', '10', [
//         {
//             dia: '01/01/2022',
//             pontos: ['08:00', '12:00', '13:00', '17:00']
//         }
//     ]);
//     expect(() => timeSheetEntity.isValid()).toThrow(TimeSheetError);
// });

// // Tests if isValid() method throws TimeSheetError when 'horasTrabalhadas' attribute is missing
// it('test_is_valid_throws_error_when_horas_trabalhadas_attribute_is_missing', () => {
//     const timeSheetEntity = new TimeSheetEntity('January', '', '10', '10', [
//         {
//             dia: '01/01/2022',
//             pontos: ['08:00', '12:00', '13:00', '17:00']
//         }
//     ]);
//     expect(() => timeSheetEntity.isValid()).toThrow(TimeSheetError);
// });

// //Tests if isValid() method throws TimeSheetError when 'horasExcedentes' attribute is missing
// it('test_is_valid_throws_error_when_horas_excedentes_attribute_is_missing', () => {
//     const timeSheetEntity = new TimeSheetEntity('January', '160', '', '10', [
//         {
//             dia: '01/01/2022',
//             pontos: ['08:00', '12:00', '13:00', '17:00']
//         }
//     ]);
//     expect(() => timeSheetEntity.isValid()).toThrow(TimeSheetError);
// });

// //Tests if isValid() method throws TimeSheetError when 'horasDevidas' attribute is missing
// it('test_is_valid_throws_error_when_horas_devidas_attribute_is_missing', () => {
//     const timeSheetEntity = new TimeSheetEntity('January', '160', '10', '', [
//         {
//             dia: '01/01/2022',
//             pontos: ['08:00', '12:00', '13:00', '17:00']
//         }
//     ]);
//     expect(() => timeSheetEntity.isValid()).toThrow(TimeSheetError);
// });