import BlackButton from "../button/BlackButton";

const Top = () => {
  return (
    <>
      <section className="text-gray-700 px-12 my-16" id="home">
        <div className="container mx-auto">
          <div className="mb-12">
            <h1 className="text-7xl font-medium tracking-widest leading-tight my-16 md:text-9xl">
              HELLO <br />
              SMART CITY
            </h1>
            <p className="w-auto mb-12 md:w-5/12">
              朝起きて、窓を開ける。暗くなった部屋にあかりを灯す。からだを休めて、ゆったりとした眠りにつく。わたしたちはテクノロジーで人に寄り添うまちづくりを実現するために日々さまざまな課題と向き合っています。
            </p>
            <BlackButton
              title="わたしたちについて"
              href="https://preview.studio.site/live/4Ra4LEXoaD/"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Top;
