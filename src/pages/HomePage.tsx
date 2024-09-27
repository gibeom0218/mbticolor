import Header from '../components/Header';
import MbtiColorInfo from '../components/MbtiColorInfo';

const HomePage = () => {
  return (
    <div className="flex h-screen pt-[24px] px-[16px] pb-[24px] flex-col items-start gap-[16px] bg-white tablet:px-[230px] tablet:flex-row tablet:gap-[60px] tablet:pt-[55px]">
      <Header />
      <MbtiColorInfo />
    </div>
  );
};

export default HomePage;
