import axios from 'axios';
import { snakeCase } from 'lodash';

const AUTH_TOKEN = 'VXUsgQ2jsq3EM30icjHA91tETkqFwtXDak07xebM';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const apiURL = 'https://u5d6gnw6aj.execute-api.us-east-1.amazonaws.com/api';

const baseConfig = {
  headers: {
    'x-api-key': AUTH_TOKEN,
  },
};

class ApiService {
  static async submitForm(fields) {
    const url = `${apiURL}/data`;

    const postBody = Object
      .entries(fields)
      .reduce((acc, [key, field]) => ({
        ...acc,
        [snakeCase(key)]: field.value
      }), {});

    try {
      const { data } = await axios.post(url, postBody, baseConfig);

      const { id } = data;
      const link = await this.fetchPDF(id);

      return link;
    } catch (err) {
      console.error(err);
    }
  }

    // Parameters: id - integer - The “id” field in the response object of “Send form data” request.
    static async fetchPDF(id) {
      const url = `${apiURL}/file`;

      const config = {
        ...baseConfig,
        params: {
          id,
        },
      };

      try {
        const { data } = await axios.get(url, config);
        const { link } = data;

        return link;
      } catch (err) {
        const {
          response: {
            status
          }
        } = err;

        if (status === 404) {
          window.location.href = 'https://www.joonko.co';
        }
      }
    }
}

export default ApiService;
