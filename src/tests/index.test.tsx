import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Navbar from "../components/Navbar";
import { store } from "../store";
test("should have a nav text page", () => {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
  const element = screen.getByText(/where in the world?/i);
  expect(element).toBeInTheDocument();
});
