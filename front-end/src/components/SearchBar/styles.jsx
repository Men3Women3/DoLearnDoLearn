import styled from "styled-components";
import Input from "@mui/joy/Input";

export const SSearchContainer = styled.div`
  width: 50vw;
  margin: 0px 1vw;
  .JoyInput-root {
    border: none;
    outline: none;
    box-shadow: 5px 5px 30px #c4c4c454;
  }
  input {
    /* outline: none;
    border: none; */
    padding: calc(0.8vw + 1px);
  }
  /* .JoyInput-variantOutlined {
    outline: none;
  } */
  /* div {
    outline: none;
    border: none;
  }
  .JoyInput-input {
    outline: none;
    border: none;
  } */
  /* .search-bar {
    border: none;
    outline: none;
  } */

  /* 이거 찾기 너무너무너무 힘들었음 */
  /* input border 커스텀 */
  .css-c64t1i-JoyInput-root {
    --Input-focusedHighlight: white;
  }
`;
