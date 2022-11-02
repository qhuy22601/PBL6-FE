import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { searchService } from '~/services/searchService';
import axios from "axios";

import { useDebounce } from "../hooks";
import styles from "./SearchInput.module.scss";
// import { SearchIcon } from '~/components/Icons';
import AccountItem from "../AccountItem";
import { Wrapper as PopperWrapper } from "../Popper";
import shoes from "../../shoes.json"
import { setNestedObjectValues } from "formik";

const cx = classNames.bind(styles);

function SearchInput() {
  const [searchShow, setSearchShow] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(searchText, 500);
  const [test, setText] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchShow([]);
      return;
    }

    // const fetchApi = async () => {
    //   setLoading(true);

    //   const res = await searchService(debounced);
    //   try {
    //     setSearchShow(res.data);
    //     setLoading(false);
    //   } catch (error) {
    //     setLoading(false);
    //     console.log(error);
    //   }
    // };

    // const request = axios.create({
    //   headers: { Authenrization: localStorage.getItem("Token") },
    // });

    // request
    //   .get(`/api/auth/users/search/${debounced}`)
    //   .then((res) => console.log(res));

    async function requestInfo() {
      const response = await axios({
        method: "get",
        url: `/api/auth/users/search/${debounced}`,
        headers: {
          Authorization: localStorage.getItem("Token"),
        },
      });
      setSearchShow(response.data);
      return response;
    }

    requestInfo();

    // fetchApi();
  }, [debounced]);

  const handleClear = () => {
    setSearchText("");
    setSearchShow([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResults(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchText(searchValue);
    }
  };
  console.log(searchShow);

  

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResults && searchShow.length > 0}
        // visible={searchShow.length > 0}
        render={(attrs) => (
          <div className={cx("search-results")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-accounts")}>Accounts</h4>
              {searchShow.map((item) => (
                <AccountItem 
                key={item.id}
                data={item} />
              ))}
              {/* <AccountItem /> */}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            value={searchText}
            ref={inputRef}
            placeholder="Search..."
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResults(true)}
          />
          {!!searchText && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}

          {/* <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button> */}
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default SearchInput;
