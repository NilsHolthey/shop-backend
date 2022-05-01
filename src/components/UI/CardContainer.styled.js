import styled from "styled-components";

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  padding: 20px;
  border-radius: 8px;

  li {
    color: darkblue;
    box-shadow: 0 0 8px 0 lightgray;
    list-style-type: none;
    font-size: 1.1rem;
    border-radius: 8px;
  }
`;

/*${({ role }) => (role.includes("admin") ? "hotpink" : "#ccd")};*/
