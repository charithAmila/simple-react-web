import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ALL_INDUSTRIES, INDUSTRIES } from "../../../utils/constants";
import CardList from "../CardList";

const sampleData = [
  {
    imageUrl: "data/images/jbl.png",
    company: "JBL",
    title: "Live like a champion with Jerome Booteng",
    industries: ["Electronics"],
  },
  {
    imageUrl: "data/images/zalando.png",
    company: "zalando",
    title: "Innovative SEO and content strategy for Zalando",
    industries: ["Tourism", "Finance", "IT"],
  },
  {
    imageUrl: "data/images/koninklijke-bibliotheek.png",
    company: "Koninklijke Bibliotheek",
    title: "The search for the most influential book ever",
    industries: ["Art"],
  },
];

const onChangeIndustry = jest.fn();

describe("CardList", () => {
  test("Data should be render correctly", () => {
    render(
      <CardList
        onChangeIndustry={onChangeIndustry}
        data={sampleData}
        industry={ALL_INDUSTRIES}
      />
    );

    // Check company names
    expect(screen.getByText(sampleData[0].company)).toBeInTheDocument();
    expect(screen.getByText(sampleData[1].company)).toBeInTheDocument();
    expect(screen.getByText(sampleData[2].company)).toBeInTheDocument();

    // Check titles
    expect(screen.getByText(sampleData[0].title)).toBeInTheDocument();
    expect(screen.getByText(sampleData[1].title)).toBeInTheDocument();
    expect(screen.getByText(sampleData[2].title)).toBeInTheDocument();

    // Check images
    const images = screen.getAllByRole("img");
    expect(images[0].getAttribute("src")).toEqual(sampleData[0].imageUrl);
    expect(images[1].getAttribute("src")).toEqual(sampleData[1].imageUrl);
    expect(images[2].getAttribute("src")).toEqual(sampleData[2].imageUrl);
  });

  test("industries select", async () => {
    render(
      <CardList
        onChangeIndustry={onChangeIndustry}
        data={sampleData}
        industry={ALL_INDUSTRIES}
      />
    );

    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }

    const randomIndex = getRandomInt(INDUSTRIES.length - 1);

    userEvent.selectOptions(
      screen.getByLabelText("in"),
      INDUSTRIES[randomIndex]
    );

    expect(onChangeIndustry).toHaveBeenCalledTimes(1);
    expect(onChangeIndustry).toBeCalledWith(INDUSTRIES[randomIndex]);
  });
});
