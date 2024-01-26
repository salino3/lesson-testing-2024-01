import {titleCase, ProfileCard} from './profile-card';

describe('Function inside ProfileCard component', () => {
    
 
    describe('titleCase', () => {

        test('it must return a string', () => {

            const result = titleCase(' one value');
            expect(typeof result).toBe('string');
        });

        test('should return transormed string', () => {

            expect(titleCase('good night')).toBe('Good Night');
        });

        test('if it receives a empty string, it should return a empty string', () => {

            expect(titleCase('')).toBe('');
        });

        test('the value must be a string', () => {

            const value = "buenas, ¿que tal?"
                const expectedValue = "Buenas, ¿Que Tal?";

              expect(typeof titleCase(value)).toEqual("string");
              expect(titleCase(value)).toBe(expectedValue);
        })
 
    })


})

