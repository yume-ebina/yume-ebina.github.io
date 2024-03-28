import BlackButton from "./BlackButton";
import ViewMore from "./ViewMore";

const Service = () => {
  return (
    <>
      <section className="text-gray-700 px-12 py-4 my-16" id="service">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="text-6xl mb-7 font-medium">SERVICE</div>
            <ViewMore href="https://preview.studio.site/live/4Ra4LEXoaD/" />
          </div>
        </div>
        <div className="flex items-center justify-center mb-24">
          <div>
            <img
              src="../../public/image/dummy.png"
              alt="dummy image"
              className="dark:invert"
            />
          </div>
          <div className="items-center w-2/5">
            <h3 className="text-5xl mb-6 font-medium">SMART HOUSE</h3>
            <p className="mb-6 font-bold">
              目覚めの瞬間から、眠りにつくまで。快適な住まいをサポートするスマートハウスのご提案です。
            </p>
            <BlackButton
              title="サービスサイトへ"
              href="https://preview.studio.site/live/4Ra4LEXoaD/"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mb-24">
          <div className="items-center w-2/5">
            <h3 className="text-5xl mb-6 font-medium">SMART CITY</h3>
            <p className="mb-6 font-bold">
              街の魅力を再発見する。街と暮らす人にとってよりよい関係を築くためのサポートをします。
            </p>
            <BlackButton
              title="サービスサイトへ"
              href="https://preview.studio.site/live/4Ra4LEXoaD/"
            />
          </div>
          <div>
            <img
              src="../../public/image/dummy.png"
              alt="dummy image"
              className="dark:invert"
              width={100}
              height={24}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mb-24">
          <div>
            <img
              src="../../public/image/dummy.png"
              alt="dummy image"
              className="dark:invert"
              width={100}
              height={24}
            />
          </div>
          <div className="items-center w-2/5">
            <h3 className="text-5xl mb-6 font-medium">SMART OFFICE</h3>
            <p className="mb-6 font-bold">
              ほっとする空間を、はたらく空間へ切り替える。ひとつの空間で住まいとオフィスの機能を実現します。
            </p>
            <BlackButton
              title="サービスサイトへ"
              href="https://preview.studio.site/live/4Ra4LEXoaD/"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
