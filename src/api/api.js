import axios from "axios";
// https://files.rcsb.org/ligands/view/011_ideal.pdb
const Api = () => {
  let data = {
    baseURL: "https://files.rcsb.org/ligands/view",
  };

  return axios.create(data);
};

export const getPDB = (name) =>
  new Promise((resolve, reject) => {
    Api()
      .get(`/${name}_model.pdb`)
      .then((res) => {
        // console.log("success---- ", res.data);
        resolve(res.data);
      })
      .catch((err) => {
        // console.log("error---- ", err.response.data);
        reject(err.response.data);
      });
  });
