// interface
import { IProdItemProps } from "../types/IProps";
// utils
import { handleCountTil, handleDateFormat } from "../utils/common";

const ProdItem = (props: IProdItemProps) => {
  const { info } = props;

  return (
    <li className="p-[20px] space-y-4 w-full border border-white rounded-md mb-7">
      <div>
        <h3>상품명: {info.productName}</h3>
        <p>결제일: {handleDateFormat(new Date(info.boughtDate))}</p>
      </div>
      <span>가격: {handleCountTil(info.price)}원</span>
    </li>
  );
};

export default ProdItem;
