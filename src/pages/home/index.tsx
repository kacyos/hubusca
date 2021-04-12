import React, { useMemo, useState } from "react";

import Header from "../../components/Layout/Header";
import RecentSearch from "../../components/Layout/Aside";
import Content from "../../components/Layout/Content";

import CardUser from "../../components/CardUserComponent";
import SearchComponent from "../../components/SearchComponent";

import { findUser } from "../../api/services/git";

import { Container } from "./styles";

interface IData {
  key: string;
  id: any;
  avatar_url: string;
  name?: string;
  login?: string;
  location?: string;
}

const Home: React.FC = () => {
  const InitialState: IData = {
    key: "",
    id: "",
    avatar_url: "",
    name: "",
    login: "",
    location: "",
  };

  const [user, setUser] = useState("");
  const [userData, setUserData] = useState<IData>(InitialState);
  const [recentSearch, setRecentSearch] = useState<IData[]>([]);

  useMemo((): any => {
    const users = localStorage.getItem("@recentSearch");

    if (!!users) {
      setRecentSearch(JSON.parse(users));
    }
    return;
  }, []);

  const handleInputSearch = (event: any) => {
    const inputUser = event.target.value;

    setUser(inputUser);
  };

  const handleSearch = async (event: any) => {
    if (event.type === "click" || event.keyCode === 13) {
      event.preventDefault();

      const resultFind = await findUser(user);
      setUserData(resultFind);

      if (resultFind.id) {
        if (recentSearch.length !== 0) {
          const usersExists: any = recentSearch.filter(
            (userExist: any) => userExist.id !== resultFind.id
          );

          if (usersExists.length > 0 && usersExists.length <= 10) {
            setRecentSearch([resultFind, ...usersExists]);
          } else if (recentSearch.length > 10) {
            usersExists.pop();
            setRecentSearch([resultFind, ...usersExists]);
          } else {
            setRecentSearch([resultFind, ...usersExists]);
          }
        } else {
          setRecentSearch([resultFind]);
        }
      }
    }
  };

  localStorage.setItem("@recentSearch", JSON.stringify([...recentSearch]));

  return (
    <>
      <Header />
      <RecentSearch>
        {!!recentSearch ? (
          recentSearch.map((recentUser) => (
            <CardUser
              link={`/repository/${recentUser.login}`}
              key={recentUser.id}
              avatarImg={recentUser.avatar_url}
              altImg={recentUser.name}
              location={recentUser.location}
              name={recentUser.name}
              login={recentUser.login}
              cardWidth="200px"
              cardHeight="110px"
              imgWidth="60px"
              fontSizeName="16px"
              fontSizeInfo="14px"
            />
          ))
        ) : (
          <RecentSearch />
        )}
      </RecentSearch>

      <Content>
        <Container>
          <SearchComponent
            IconSize="30px"
            SearchClick={(e: any) => handleSearch(e)}
            SearchKey={(e: any) => handleSearch(e)}
            InputUser={handleInputSearch}
          />

          {userData.id && (
            <CardUser
              key={userData.id}
              link={`/repository/${userData.login}`}
              avatarImg={userData.avatar_url}
              altImg={userData.name}
              location={userData.location}
              name={userData.name}
              login={userData.login}
              cardWidth="200px"
              imgWidth="150px"
            />
          )}
        </Container>
      </Content>
    </>
  );
};

export default Home;
