import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BlogContainer } from './BlogStyle';
import Button from '../../styles/GlobalComponents/Button';
import { GrGatsbyjs, GrGraphQl } from "react-icons/gr"


function Blog() {
    return (
        <Section id="blog"> 
            <SectionDivider/>
            <SectionTitle main>Dev Blog</SectionTitle>
            <SectionText>
                I always get a ton of help from many other developer's dev blog.
                So I decided to make my own too!
            </SectionText>
            <BlogContainer>
                {/* Framer Motion으로 하기 */}
                <img src="./images/Blog.png"/>
                <a href="https://www.google.com">
                    <Button>Check out my blog</Button>
                </a>
            </BlogContainer>
        </Section>
    )
}

export default Blog;