import Header from '../components/Header';
import MbtiColorInfo from '../components/MbtiColorInfo';

const HomePage = () => {
  return (
    <div className="flex pt-[24px] px-[16px] flex-col justify-end items-start gap-[16px] bg-white tablet:px-[230px] tablet:flex-row tablet:gap-[60px]">
      <Header />
      <MbtiColorInfo />
    </div>
  );
};

export default HomePage;
