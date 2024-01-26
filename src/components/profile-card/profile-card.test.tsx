import {titleCase, ProfileCard} from './profile-card';

describe('Function inside ProfileCard component', () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    
 
    describe('titleCase', () => {

        test('It must return a string', () => {

            const result = titleCase(' one value');
            expect(typeof result).toBe('string');
        });

        test('Should return transormed string', () => {

            expect(titleCase('good night')).toBe('Good Night');
        });

        test('If it receives a empty string, it should return a empty string', () => {

            expect(titleCase('')).toBe('');
        });

        test('The value must be a string', () => {

            const value = "buenas, ¿que tal?"

              expect(typeof titleCase(value)).toEqual("string");
        });

             test("If the value is 'buenas, ¿que tal?', the return value must be 'Buenas, ¿Que Tal?'", () => {
               const value = "buenas, ¿que tal?";
               const expectedValue = "Buenas, ¿Que Tal?";

               expect(titleCase(value)).toBe(expectedValue);
             });


      test("If the value is not a string, it should call 'alert'", () => {
        const value: any = null;

        titleCase(value);

        // Verifica si la función 'alert' fue llamada
        expect(window.alert).toHaveBeenCalled();
      });

    })


})

