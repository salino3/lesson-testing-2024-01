import { render, screen } from "@testing-library/react";
import { Sum } from "./sum";

test("Renders Sum component correctly", () => {
  render(<Sum />);

  // Verifica que el componente se ha renderizado correctamente
  const sumComponent = screen.getByRole("heading", { name: /\d+/ });
  expect(sumComponent).toBeTruthy();
});

//
test("Variable 'result' should be type number and more than 5", () => {
  // Renderiza el componente nuevamente para tener un estado limpio
  render(<Sum />);

  // Selecciona el componente por su role "heading"
  const sumComponent = screen.getByRole("heading", { name: /\d+/ });

  // Verifica que el valor de result sea de tipo number y más grande que 5
  const resultValue = parseInt(sumComponent.textContent || "0", 10);
  expect(typeof resultValue).toBe("number");
  expect(resultValue).toBeGreaterThan(5);
});
