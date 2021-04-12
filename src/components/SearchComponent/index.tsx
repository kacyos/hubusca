import { FcSearch } from "react-icons/fc";

import { Container, InputSearch, ButtonSearch } from "./styles";

interface ISearchProps {
  IconSize?: string;
  SearchClick?: any;
  SearchKey?: any;
  InputUser: any;
}

const Search: React.FC<ISearchProps> = ({
  IconSize,
  SearchClick,
  SearchKey,
  InputUser,
}) => {
  return (
    <Container>
      <InputSearch onChange={InputUser} onKeyUp={SearchKey} />
      <ButtonSearch>
        <FcSearch fontSize={IconSize} onClick={SearchClick} />
      </ButtonSearch>
    </Container>
  );
};
export default Search;
