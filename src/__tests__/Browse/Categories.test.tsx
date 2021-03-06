import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { FetchMock } from "@react-mock/fetch";
import { renderWithRouterAndRedux } from "../../utils/withRouterAndRedux";
import { mockedCategoryData } from "../../utils/mockedCategoryData";
import { wait } from "@testing-library/react";
import Categories from "../../Browse/Categories";

test("Categories component successfully fetches and renders", async () => {
  const { container } = renderWithRouterAndRedux(
    <FetchMock
      mocks={[
        {
          matcher: "https://api.spotify.com/v1/browse/categories",
          method: "GET",
          response: mockedCategoryData
        }
      ]}
    >
      <Categories />
    </FetchMock>
  );

  await wait(() => {
    expect(
      container.querySelector(".card-grid-container")?.childElementCount
    ).toEqual(20);
  });
});
