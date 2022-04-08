import axios from 'axios';

interface Pagination {
  offset: string | number;
}

const api = axios.create({
  baseURL: 'https://kitsu.io/api/'
});

class KitsuApi {
  async anime(id: number | string) {
    const { data } = await api.get(`/edge/anime/${id}`);
    return data;
  }
  async characters(url: string) {
    const splittedUrl = url.split('api')[1];

    const { data } = await api.get(splittedUrl);

    const promises = data.data.map((character: any) =>
      api.get(character.relationships.character.links.related)
    );

    const characters = await Promise.all(promises);

    return characters;
  }
  async animes(pagination: Pagination) {
    const { data } = await api.get(
      `/edge/anime?page[limit]=12&page[offset]=${pagination.offset}`
    );

    return data;
  }
  async trending() {
    const { data } = await api.get(`/edge/trending/anime`);
    console.log(data);

    return data;
  }
}

export { KitsuApi };
export default api;
