import { render, screen } from "@testing-library/react";
import { Sum } from "./sum";

test("Renders Sum component correctly", () => {
  render(<Sum />);

  // Verifica que el componente se ha renderizado correctamente
  const sumComponent = screen.getByRole("heading", { name: /\d+/ });
  expect(sumComponent).toBeTruthy();

  // Verifica que el valor de result sea de tipo number
 const resultValue = parseInt(sumComponent.textContent || "0", 10);
 expect(typeof resultValue).toBe("number");
});
