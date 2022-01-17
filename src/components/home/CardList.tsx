import React from "react";
import { ALL_INDUSTRIES, INDUSTRIES } from "../../utils/constants";
import Card from "../card/Card";

interface CardListProps {
  onChangeIndustry: (text: string) => void;
  data: Array<any>;
  industry: string;
}

const CardList = ({ onChangeIndustry, industry, data }: CardListProps) => {
  return (
    <>
      <div className="filter-section">
        <div className="filters">
          <form name="filters">
            <div className="form-input-all-word">
              <label htmlFor="works">Show Me</label>
              <select id="works">
                <option>all work</option>
              </select>
            </div>
            <div>
              <label htmlFor="industries">in</label>
              <select
                id="industries"
                onChange={(e) => onChangeIndustry(e.target.value)}
                value={industry}
              >
                <option value={ALL_INDUSTRIES}>{ALL_INDUSTRIES}</option>
                {INDUSTRIES.map((industry, key) => (
                  <option key={key} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className="cards">
        <div className="card-raw">
          {data.map((item, key) => (
            <Card key={key} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
