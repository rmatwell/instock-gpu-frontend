import http from "../http-common";

const getAll = () => {
    return http.get("");
};


const ListingService = {
    getAll,
};

export default ListingService;