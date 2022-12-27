import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { Link } from "react-router-dom";

function AccountItem({ data }) {
  const cx = classNames.bind(styles);
  console.log(data);
  return (
    <Link to={`fruit-detail/${data.id}`} className={cx("info-wrapper")}>
      <img className={cx("info-avatar")} src={`https://ltmnhom4.tk${data.image_url}`} alt="hoa" />
      <div className={cx("info-user")}>
        <h4 className={cx("name")}>
          <span>{`${data.fruit_name}`}</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
         <span className ={cx("price")}>{`${data.price} VNĐ/Kg`}</span>
         
        </h4>
      </div>
    </Link>
  );
}

export default AccountItem;
