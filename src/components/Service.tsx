import { MdNavigateNext } from "react-icons/md";

const Service = () => {
  return (
    <>
      <section className="text-gray-700 px-12 my-16" id="home">
        <div className="container mx-auto">
          <div className="mb-12">
            <h1 className="text-9xl font-medium tracking-widest leading-tight my-16">
              HELLO <br />
              SMART CITY
            </h1>
            <p className="w-5/12 mb-12">
              朝起きて、窓を開ける。暗くなった部屋にあかりを灯す。からだを休めて、ゆったりとした眠りにつく。わたしたちはテクノロジーで人に寄り添うまちづくりを実現するために日々さまざまな課題と向き合っています。
            </p>
            <button className="rounded-lg bg-black text-white text-sm py-3 px-8 flex items-center">
              わたしたちについて
              <MdNavigateNext size={"20px"} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
