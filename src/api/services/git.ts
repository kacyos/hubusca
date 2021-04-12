import api from "../connection";

export const findUser = async (user: string) => {
  try {
    const response = await api.get(user);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const findRepository = async (user: string) => {
  try {
    const responseRepos = await api.get(`${user}/repos`);
    return responseRepos.data;
  } catch (error) {
    return error.message;
  }
};

export const findFollowers = async (user: string) => {
  try {
    const responseFollowers = await api.get(`${user}/followers`);
    return responseFollowers.data;
  } catch (error) {
    return false;
  }
};
