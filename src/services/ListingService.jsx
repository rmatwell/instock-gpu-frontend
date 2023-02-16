import http from "../http-common";
import download from 'js-file-download';

const getAll = () => {
    return http.get("/get-listings/current-date");
};

const downloadFile = () => {
    return http.get("/download/csv")
        .then(resp => {
            download(resp.data, 'download.csv');
        });;
}

const ListingService = {
    getAll,
    downloadFile
};

export default ListingService;