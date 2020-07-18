import Request from '../utils/Request.js';

const SteamService = {
    init(url) {
        this.url = url;
    },

    async serverWakeup() {
        const endpoint = `${this.url}/app/serverWakeup`;
        try {
            await Request.get(endpoint);
        } catch(e) {
            throw e;
        }
    },

    async getAllProfiles(identifier) {
        const endpoint = `${this.url}/app/getAllProfiles`;

        try {
            const response = await Request.get(endpoint, { identifier });
            const json = await response.json();
            return json;
        } catch(e) {
            throw e;
        }
    }
};

export default SteamService;