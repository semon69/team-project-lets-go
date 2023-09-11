import React from "react";

const TourPlan = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl my-10">Tour Plan</h2>

      <div tabIndex={0} className="collapse bg-base-200 border mb-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title collapse-arrow bg-[#63AB45] text-white peer-checked:bg-white peer-checked:text-black font-bold text-[25px]">
          Day 1
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-white peer-checked:text-black">
          Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros
          iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius
          quodsi molestiae at, nostrum definitiones his cu. Discere referrentur
          mea id, an pri novum possim deterruisset.
        </div>
      </div>
      <div tabIndex={0} className="collapse bg-base-200 border mb-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title collapse-arrow bg-[#63AB45] text-white peer-checked:bg-white peer-checked:text-black font-bold text-[25px]">
          Day 2
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-white peer-checked:text-black">
          Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros
          iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius
          quodsi molestiae at, nostrum definitiones his cu. Discere referrentur
          mea id, an pri novum possim deterruisset.
        </div>
      </div>
      <div tabIndex={0} className="collapse bg-base-200 border mb-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title collapse-arrow bg-[#63AB45] text-white peer-checked:bg-white peer-checked:text-black font-bold text-[25px]">
          Day 3
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-white peer-checked:text-black">
          Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros
          iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius
          quodsi molestiae at, nostrum definitiones his cu. Discere referrentur
          mea id, an pri novum possim deterruisset.
        </div>
      </div>
    </div>
  );
};

export default TourPlan;
