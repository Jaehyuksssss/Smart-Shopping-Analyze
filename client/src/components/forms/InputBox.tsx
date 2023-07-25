import { Input } from 'antd';
import { KEYWORD } from '../../utils/constants';
export default function InputBox() {
  return (
    <div>
      <Input placeholder={KEYWORD} />
    </div>
  );
}
