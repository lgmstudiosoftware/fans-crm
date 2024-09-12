type rootConfigType = {
  apiUrl?: RequestInfo | URL;
};

const rootConfig: rootConfigType = {
  apiUrl: process.env.REACT_APP_API_URL,
};

export default rootConfig;
