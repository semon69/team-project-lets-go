import React from 'react';

const SectionTitle = ({title, title_width= "w-[300px]" , subtitle, subtitle_color, title_color, title_bg, text = "text-center"}) => {
    return (

        <div className={`${text} space-y-3`}>
            <p className={`${title_width} rounded-lg font-bold mx-auto py-2 ${text} ${title_color} ${title_bg}`}>
                {title}</p>

            <h3 className={` text-xl lg:text-5xl w-full lg:w-[676px] mx-auto font-bold pt-2 ${subtitle_color}  leading-snug` }>
                {subtitle}
            </h3>
        </div>

    );
};

export default SectionTitle;