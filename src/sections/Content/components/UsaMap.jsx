import React from "react";
import Usa from "@svg-maps/usa";
import { SVGMap } from "react-svg-map";
import styled from "styled-components";



export const UsaMap = () => {
  const data = ['wy', "ak"]
  const customUsa = {
    ...Usa,
    label: "Custom map label",
    locations: Usa.locations.map((l, i) => { return { ...l, color: data.indexOf(l.id) > -1 } })

  };
  return (
    <CustomMap map={customUsa} />
  );
};
const CustomMap = styled(SVGMap)`
${({ map: { locations } }) => locations.map(({ color, id }) => color ? `& path#${id}{fill:#F39129}` : `& path#${id}{fill:white}`)}
`