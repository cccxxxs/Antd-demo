import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
// import styles from './style.less';

const newPage = (props: any) => {
  // const [time] = useState(+new Date());
  // const [name] = useState('mkmin');
  const { name, time } = props;
  const handleClick = async () => {
    const { dispatch } = props;
    dispatch({
      type: 'test/effectTime',
    });
  };

  return (
    <div>
      <h1>New Page</h1>
      <div>用户名: {name}</div>
      <div>当前时间: {time}</div>
      <Button
        type="primary"
        onClick={() => {
          handleClick();
        }}
      >
        更新当前时间
      </Button>
    </div>
  );
};

export default connect(({ test }: any) => ({
  time: test.time,
  name: test.name,
}))(newPage);
