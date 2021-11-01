import axiosClient from "./axiosClient";

const productAPI = {
  getAll(params) {
    const url = "/categories";
    return axiosClient.get(url, { params: params }); // do key và value giống nhau nên có thể viết {params} vẫn đc
  },

  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/categories";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.delete(url, data);
  },
};

export default productAPI;
