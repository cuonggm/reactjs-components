import {Link as RouteLink} from "react-router-dom";
import styled from "styled-components";
import {fontSize} from "../../const";

const StyledLink = styled(RouteLink)`
  text-decoration: none;
  color: unset;
  font-size: ${fontSize.standard};
`;

export const Link = (props) => {
    return <StyledLink {...props}>{props.children}</StyledLink>
}