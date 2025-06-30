import { PageContainer } from '@ant-design/pro-components';
import { Divider } from 'antd';
import AdImage from './components/AdImage';
import TagsPlay from './components/TagsPlay';
import './index.less';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className="">
        <Divider orientation="left">游戏标签管理</Divider>
        <TagsPlay></TagsPlay>
        <Divider orientation="left">广告轮播管理</Divider>
        <AdImage></AdImage>
      </div>
    </PageContainer>
  );
};

export default HomePage;
