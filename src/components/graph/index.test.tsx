import React from "react";

import { mount } from "enzyme";
import renderer from "react-test-renderer";

import ShowGraph from "./";

const props = {
  chartData: [
    ["date", "close"],
    ["2020-01-01", 190],
    ["2020-01-02", 195],
    ["2020-01-03", 210],
  ],
};

const renderedComponent = () => {
  return mount(<ShowGraph {...props} />);
};

describe("ShowGraph", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly to snapshot", () => {
    const snapshot = renderer.create(<ShowGraph {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("should render component", () => {
    const component = renderedComponent();

    expect(component.length).toBe(1);
  });

  describe("props", () => {
    it("should have the correct chartData prop", () => {
      const component = renderedComponent();

      expect(component.prop("chartData")).toEqual(props.chartData);
    });
  });
});
