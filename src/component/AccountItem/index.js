import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { Link } from "react-router-dom";

function AccountItem({ data }) {
  const cx = classNames.bind(styles);
  console.log(data);
  return (
    <Link to={"/newsfeed/profile"} className={cx("info-wrapper")}>
      <img className={cx("info-avatar")} src={data.avata} alt="hoa" />
      <div className={cx("info-user")}>
        <h4 className={cx("name")}>
          <span>{`${data.firstName} ${data.lastName}`}</span>
          {/* <span>Huy</span> */}
        </h4>
        <p className={cx("user-name")}>{data.username}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
