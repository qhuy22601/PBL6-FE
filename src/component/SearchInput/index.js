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

    async function requestInfo(inputData) {
      const response = await axios({
        method: "post",
        url: `https://ltmnhom4.tk/api/auth/searchFruit/${debounced}`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token"),
        },
      });
      setSearchShow(response.data.data);
      return response;
    }

    requestInfo();
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
