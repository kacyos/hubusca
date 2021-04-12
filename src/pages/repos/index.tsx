import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { useParams } from "react-router-dom";

import {
  findRepository,
  findFollowers,
  findUser,
} from "../../api/services/git";

import Content from "../../components/Layout/Content";
import Header from "../../components/Layout/Header";
import RecentSearch from "../../components/Layout/Aside";
import CardRepos from "../../components/CardReposComponent";
import CardUser from "../../components/CardUserComponent";

import { Container, ReposContainer } from "./styles";

interface IData {
  key: any;
  id: any;
  avatar_url: string;
  name?: string;
  login?: string;
  location?: string;
}

interface IRepository {
  name?: string;
  id: string;
  description?: string;
  created_at: string;
  pushed_at: string;
  language?: string;
  html_url?: string;
}

const Repository: React.FC = () => {
  const InitialStateUser: IData = {
    key: "",
    id: "",
    avatar_url: "",
    name: "",
    login: "string",
    location: "string",
  };

  const InitialStateRepos = {
    id: "",
    name: "",
    description: "",
    created_at: "",
    pushed_at: "",
    language: "",
    html_url: "",
  };

  const [user, setUser] = useState<IData>(InitialStateUser);
  const [userRepos, setUserRepos] = useState<IRepository[]>([
    InitialStateRepos,
  ]);
  const [followers, setFollowers] = useState("");
  const [recentSearch, setRecentSearch] = useState<IData[]>([]);
  let { name }: any = useParams();

  useEffect((): any => {
    const find = async () => {
      const repository = await findRepository(name);
      const followers = await findFollowers(name);
      const resultFind = await findUser(name);

      setUser(resultFind);
      setFollowers(followers.length);
      setUserRepos(repository);
    };

    window.scrollTo(0, 0);

    find();

    const users = localStorage.getItem("@recentSearch");
    if (!!users) {
      setRecentSearch(JSON.parse(users));
    } else {
      return false;
    }
  }, [name]);

  const DateConvert = (date: string) => {
    const milliseconds = Date.parse(date);
    return new Date(milliseconds).toLocaleString("pt-BR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  console.log(userRepos[0]);
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
              fontSizeName="20px"
              fontSizeInfo="14px"
            />
          ))
        ) : (
          <RecentSearch />
        )}
      </RecentSearch>

      <Content>
        <Container>
            <Link className="home" to="/">
              <button>
                <FcHome fontSize="40px" />
                <p>Home</p>
              </button>
            </Link>
          {userRepos && (
            <CardUser
              link={`/repository/${user.login}`}
              avatarImg={user.avatar_url}
              altImg={user.name}
              name={user.name}
              login={user.login}
              location={user.location}
              key={user.id}
              publicRepos={userRepos.length}
              followers={followers}
              cardWidth="400px"
              imgWidth="150px"
              fontSizeName="40px"
              fontSizeInfo="18px"
            />
          )}
          <span>Repositórios</span>
          <ReposContainer>
            {!!userRepos
              ? userRepos.map((repo) => (
                  <CardRepos
                    key={repo.id}
                    repoLink={repo.html_url}
                    name={repo.name}
                    language={repo.language}
                    description={repo.description}
                    create={
                      repo.created_at ? DateConvert(repo.created_at) : "--"
                    }
                    push={repo.pushed_at ? DateConvert(repo.pushed_at) : "--"}
                  />
                ))
              : null}
          </ReposContainer>
        </Container>
      </Content>
    </>
  );
};

export default Repository;
