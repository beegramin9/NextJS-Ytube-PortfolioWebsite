import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BlogContainer } from './BlogStyle';
import Button from '../../styles/GlobalComponents/Button';
import { motion } from 'framer-motion';

const blinkVarinats = {
    hidden: { 
        opacity: 0, 
    },
    visible: { 
        opacity: 1, 
        transition: { yoyo: Infinity, duration: 1}
    },
};


function Blog() {
    return (
        <Section id="blog"> 
            <SectionDivider/>
            <SectionTitle main>Dev Blog</SectionTitle>
            <SectionText>
                I always get a ton of help from many other developer's dev blog.
                So I decided to make my own. <br/>
                You can check out my own 
                <motion.span
                    variants={blinkVarinats}
                    initial="hidden"
                    animate="visible"
                    >{'\u00A0'}projects{'\u00A0'}
                </motion.span>
                at my blog too! 
            </SectionText>
            <BlogContainer>
                {/* Framer Motion으로 하기 */}
                <img src="./images/blog.gif"/>
                <Button>
                    <a href="https://www.wontaeblog.space/"
                        style={{ color: '#fff'}}>
                        Check out my blog
                    </a>
                </Button>
            </BlogContainer>
        </Section>
    )
}

export default Blog;