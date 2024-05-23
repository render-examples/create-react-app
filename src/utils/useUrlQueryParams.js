import {useLocation} from "react-router-dom";

export function useUrlQueryParams() {
    return new URLSearchParams(useLocation().search);
}