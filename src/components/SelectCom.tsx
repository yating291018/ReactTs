import { FC, useMemo, memo } from "react";
import { Select } from "antd";
const { Option } = Select;
interface IProps {}

const SelectPage: FC<IProps> = () => {
  console.log("child");
  const OptionList = useMemo((): JSX.Element[] => {
    let list: number[] = [];
    for (let i = 0; i < 30000; i++) {
      list.push(i);
    }
    return list.map((item) => {
      return (
        <Option value={item} key={item}>
          {"label" + item}
        </Option>
      );
    });
  }, []);
  return (
    <Select placeholder="Select a person" style={{ width: "200px" }}>
      {OptionList}
    </Select>
  );
};
export default memo(SelectPage);
