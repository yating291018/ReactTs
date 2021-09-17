import { ChangeEvent, FC, useState } from "react";
import { Input } from "antd";
import SelectPage from "../components/SelectCom";
interface IProps {}

// react性能确实比vue2的好多了，同时渲染1万条数据
const Page: FC<IProps> = () => {
  const [value, setValue] = useState<string>("");

  const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Input
        value={value}
        onChange={getInputValue}
        style={{ width: "200px" }}
      />
      <SelectPage />
    </>
  );
};
export default Page;
