const BASE_URL = "http://localhost:3004";

export const getShipmentsUrl = (params=null) => BASE_URL + "/shipments" + (params ? params : "");

export const editNameUrl = id => BASE_URL + "/shipments/" + id;