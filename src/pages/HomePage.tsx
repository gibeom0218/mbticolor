import Header from '../components/Header';
import MbtiColorInfo from '../components/MbtiColorInfo';

const HomePage = () => {
  return (
    <div className="flex pt-[24px] px-[16px] flex-col justify-end items-start gap-[16px] bg-white">
      <Header />
      <MbtiColorInfo />
    </div>
  );
};

export default HomePage;
