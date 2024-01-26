import { render, screen } from "@testing-library/react";
import {InputText} from './input-text';

test('Should exist a input', () => {

   render(<InputText />);

   const sumComponent = screen.getByRole("textbox");
   expect(sumComponent).toBeTruthy();

})



