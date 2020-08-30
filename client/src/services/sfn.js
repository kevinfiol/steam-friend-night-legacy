import Request from '../utils/Request.js';

const url = 'http://localhost:8080';

const sfn = {
    async serverWakeup() {
        const endpoint = `${url}/`;
        try {
            await Request.get(endpoint);
        } catch(e) {
            throw e;
        }
    },

    async getAllProfiles(identifier) {
        const endpoint = `${url}/user/getAllProfiles/${identifier}`;

        try {
            const response = await Request.get(endpoint);
            const allProfiles = await response.json();
            console.log(allProfiles);
            return allProfiles;
        } catch(e) {
            throw e;
        }
    },

    async getCommonApps(profiles) {
        const endpoint = `${url}/user/getCommonApps`;

        try {
            const response = await Request.post(endpoint, { profiles });
            const library = await response.json();
            return library;
        } catch(e) {
            throw e;
        }
    },

    async getLibraryResult(nanoid) {
        const endpoint = `${url}/user/getLibraryResult`;

        try {
            const response = await Request.post(endpoint, { nanoid });
            const library = await response.json();
            return library;
        } catch(e) {
            throw e;
        }
    },

    async refreshLibraryResult(nanoid) {
        const endpoint = `${url}/user/updateLibraryResult`;

        try {
            const response = await Request.post(endpoint, { nanoid });
            const library = await response.json();
            return library;
        } catch(e) {
            throw e;
        }
    }
};

export default sfn;