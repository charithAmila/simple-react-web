import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CardList from "../components/home/CardList";
import Contact from "../components/home/Contact";
import Nav from "../components/layouts/Nav";
import { getData } from "../services";
import { ALL_INDUSTRIES } from "../utils/constants";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  const [industry, setIndustry] = useState<string>("");
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    getData().then((res) => {
      setItems(res.data.items);
    });
  }, []);

  useEffect(() => {
    let params = new URLSearchParams(search);
    setIndustry(params.get("industry") ?? ALL_INDUSTRIES);
  }, [search]);

  const getFilteredData = () => {
    return industry === ALL_INDUSTRIES
      ? items
      : items.filter(
          ({ industries }: { industries: Array<string> }) =>
            !!industries.find((name: string) => name === industry)
        );
  };

  const onChangeIndustry = (text: string) => {
    navigate(`/?industry=${text}`, { replace: true });
  };

  return (
    <div className="main">
      <div className="hero">
        <Nav />
        <h1>WORK</h1>
        <button className="view-case-btn">VIEW CASE</button>
      </div>
      <CardList
        onChangeIndustry={onChangeIndustry}
        data={getFilteredData()}
        industry={industry}
      />
      <Contact />
    </div>
  );
};

export default Home;
