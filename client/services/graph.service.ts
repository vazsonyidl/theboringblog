import { apiUrl } from 'constants/url';
import _axios from './interceptor';

export class GraphService {
  fetchDividend(config: { quote: string; period: string }) {
    const query = Object.entries(config)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join('&');

    return _axios.get(`${apiUrl}/dividend?${query}`);
  }
}
