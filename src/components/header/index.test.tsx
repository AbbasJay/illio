// test component renders
// test the dateTo prop is given to the first input value
// test the dateFrom prop is given to the first input value
// test when the dateTo value is changed the setDateTo function is called
// test when the dateFrom value is changed the setDateFrom function is called

import React from "react";
import { mount } from "enzyme";

import renderer from "react-test-renderer";

import Header from "./";

const props = {
  ticker: "MCD",
  dateFrom: "2020-01-01",
  dateTo: "2020-01-05",
  setDateFrom: () => jest.fn(),
  setDateTo: () => jest.fn(),
};

const renderedComponent = () => {
  return mount(<Header {...props} />);
};

describe("Header", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly to snapshot", () => {
    const snapshot = renderer.create(<Header {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("should render component", () => {
    const component = renderedComponent();

    expect(component.length).toBe(1);
  });

  describe("props", () => {
    it("should have the correct ticker prop", () => {
      const component = renderedComponent();

      expect(component.prop("ticker")).toEqual(props.ticker);
    });

    it("should have the correct dateTo prop", () => {
      const component = renderedComponent();

      expect(component.prop("dateTo")).toEqual(props.dateTo);
    });

    it("should have the correct dateFrom prop", () => {
      const component = renderedComponent();

      expect(component.prop("dateFrom")).toEqual(props.dateFrom);
    });

    // it("should setDateFrom prop when onChange is triggered", () => {
    //   const component = renderedComponent();

    //   component.find(".date-from-input").simulate("change");

    //   expect(props.setDateFrom).toHaveBeenCalled();
    // });

    // it("should setDateTo prop when onChange is triggered", () => {
    //   const component = renderedComponent();

    //   component.find(".date-to-input").simulate("change");

    //   expect(props.setDateTo).toHaveBeenCalled();
    // });
  });
});
