import React from "react";
import Usa from "@svg-maps/usa";
import { SVGMap } from "react-svg-map";
import styled from "styled-components";



export const UsaMap = ({ states }) => {
  return (
    <CustomMap map={Usa} states={states} />
  );
};
const CustomMap = styled(SVGMap)`
margin:20px;
${({ map: { locations }, states }) => locations.map(({ id }) => states.indexOf(id) > -1 ? `& path#${id}{fill:#F39129}` : `& path#${id}{fill:transparent;stroke-width:1px;stroke:white}`)}
`