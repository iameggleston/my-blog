import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';

import Item from "src/components/atoms/Item";

describe("Rendering the list with props", () => {

  it("Should render No data!", () => {
    render(<Item item={null}/>);
    expect(screen.getByText("No data!")).toBeInTheDocument();
  });
  it("Should render list item correctly", () => {
    const dummyItem = {
      category: {id: 1},
      content: "test",
      createdAt: "test",
      updatedAt: "test",
      publishedAt: "test",
      revisedAt: "test",
      id: "100",
      title: "test"
    };
    render(<Item item={dummyItem}/>);
    expect(screen.getByRole("link").textContent).toEqual("test");
  });
});
