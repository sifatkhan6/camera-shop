import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <section>
                <h4>Que: What is semantic tag?</h4>
                <p>Ans: Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language. Semantic tags also gives many more hooks for styling content</p>
            </section>

            <section>
                <h4>Que: Difference between inline and inline block element</h4>
                <p>Ans: <strong>Inline</strong> respect left and right margins and padding, but not top and bottom. Inline cannot have a width and height set. Inline allow other elements to sit to their left and right.</p>
                <p>
                <strong>Inline-block</strong> allow other elements to sit to their left and right. Inline-block respect top and bottom margins and padding. Inline-block respect height and width.
                </p>
            </section>
        </div>
    );
};

export default Footer;