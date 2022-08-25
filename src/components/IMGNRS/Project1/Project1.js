import React from 'react'
import designImg from './design.png'
import persona from './persona.png'
import story from './story.png'
import jobstory from './jobstory.png'
import useflow from './userflow.png'
import sketches from './sketches.png'
import wireframe from './wireframe.png'
import mockup from './mockup.png'
import mockup2 from './mockup2.png'
import feedback from './feedback.png'


export const Project1 = () => {
    return (
        <div className='project1'>
            <h2>Design Process</h2>
            <img src={designImg} alt="design" />
            <h2>Problem statements and challenges</h2>

            <div className='paragraph'>
                After taking a look at the website itself, my team and I determined that Mango Concept’s interface contained a myriad of issues:
                <ol>
                    <li>The homepage was comprised of an unresponsive background video that disappeared a second after the page loaded.
                    </li>
                    <li>The homepage also lacked branding and sufficient information about the company.
                    </li>
                    <li>A severely unnecessary, oversized footer made for an unpleasant visual experience.
                    </li>
                    <li>The navigation bar was confusing for the two following reasons: (1) The “Learn” link did not lead to an “About” page, but instead led to a page sponsoring a General Assembly course taught by the company; (2) The phone number was an unpleasant sight.
                    </li>
                    <li>“Products” and “Our Work” navigation links seemed to be the same thing. Wouldn’t the company’s products be classified as their work?</li>
                </ol>
            </div>
            <h2>The Solution</h2>
            <div className='paragraph'>
                Just how can a digital agency attract new customers with a glitchy, visually unappealing site? In order to find solutions to such problems, my team and I devised the following goals…
            </div>
            <h2>User Research</h2>
            <h4>Project Goals</h4>
            <div className='paragraph'>
                Discover issues experienced on the user’s end of the interaction via testing.<br />
                Showcase client’s work in a visually pleasing manner.<br />
                Design an interface which reflected the company’s spirit.<br />
                Propose solutions and validate their existence.<br />
                Mango Concept’s target market included company owners, managers, CEOs, startups, new businesses, old businesses… essentially anyone in the position of seeking aid from a digital agency.
            </div>
            <h4>Research Process</h4>
            <div className='paragraph'>
                Before we could begin brainstorming ways to satisfy the user’s wants, we had to understand how they interact with and feel about Mango Concept’s interface.
                <br />
                <br />
                After conducting tests with people between the ages of 20 - 43, we discovered the following underlying issues:
            </div>
            <h4>Main Takeaways</h4>
            <div className='paragraph'>
                4/10 tested felt displeased that a fee was the only thing to welcome them to the site.<br />
                7/10 were not happy that the four sub-links under the navigation bar’s “Services” link weren’t combined into one page. Page divisions forced them to navigate through extra steps when seeking more information about what the company had to offer.<br />
                10/10 described their overall experience as static and unsatisfied.<br />
                9/10 found the “Learn” link title in the navbar confusing for the same reason my team did, as previously mentioned in the “Problem” section.<br />
                Taking note of what users regarded problematic, we formulated specific pain points and solutions.
            </div>
            <h2>Pain points</h2>
            <div className='paragraph'>
                Lack of user interest = Bad for business
                <ol>
                    <li>Uninviting atmosphere. Concentrating on colors, typography, images, grids, animations, a seamless user flow, and becoming empathetic to the audience provided grounds to properly design for, not only the current market, but potential ones as well. Rounds of testing made it clear people lost interest in the brand and what it had to offer post-viewing the website’s appearance. This included ditching the glitchy video on the homepage.</li>
                    <li>Confusing links and user flows. Focusing on the specificity of titles (such as the “Learn” link in the navigation) and remodeling the user flow would greatly decrease confusion, thus enabling positive user experiences</li>
                    <li>Bombarding users. Removing the fee and signup on the homepage would eliminate its money-hungry tone as current perception of the brand was that it was desperate for consumers to enroll into its services.</li>
                </ol>
            </div>
            <h2>User Persona</h2>
            <div className='paragraph'>
                Creating user personas is one of the most important elements in our product development cycle. At the end of the day, we were designing for customers that don’t have time to prepare their own meals, this created fictional representations of these individuals to help guide our design process and address their pain-points and frustrations.
            </div>
            <img src={persona} alt="persona" />
            <div className='t-heading-t'>
                The general perception should be that the consumer is seeking out — and in need of — the service, not the other way around.
            </div>
            <h2>Ideate</h2>
            <div className='paragraph'>Breaking down the user, their role, and what they want/need out of Mango Concept enabled us to empathize with our audience. Based off our guerilla interviews, we created two key user and job stories to do so.
            </div>
            <h2>User Story</h2>
            <img src={story} alt='story' />
            <div className='paragraph'>
                Getting to know our users & their roles.<br />
                Put yourself in the user’s shoes and it will bring you closer to satisfying their needs. Recognizing their goals and what they hope to get out of it helped my team distinguish the complexity of the users, as well as what features they would need in order to have a beneficial experience with the site.
            </div>
            <h2>Job Stories</h2>
            <img src={jobstory} alt='jobstory' />
            <div className='paragraph'>
                Story #1: Within the first story, the user feels trust as a major qualification when working with others. Delivering a site that not only functions and displays the company’s abilities, but also speaks to the user’s wants would help build this trust. Going forward, our plan included incorporating vibrant action words into the home page as a way of speaking directly to everyone entering the site.<br />
                <br />

                Story #2: The second story belongs to a user with a busy schedule due to his or her position as a business owner. According to their motivation, they would not appreciate the many steps of Mango Concept’s “Services” link’s current setup. To solve this issue, we condensed the user flow.
            </div>
            <h2>Restructuring the User Flow</h2>
            <div className='paragraph'>
                With this relayout, users would now be able to see the services Mango Concept offers on one page. To see the categories that once occupied separate pages, all they would have to do is click the category and the page would automatically scroll down to the selected information.
            </div>
            <img src={useflow} alt='useflow' />
            <div className='paragraph'>Now that we are clear on the user flow, let’s get down to business.</div>
            <h2>Build</h2>
            <div className='paragraph'>We began putting our ideas to the test via paper and digital styles. Sure it’s one thing to brainstorm and write down what you’ll do, but it’s another thing to see your ideas in form.</div>
            <h2>Sketches</h2>
            <div className='paragraph'>Sketching allowed us the freedom to explore layouts, forego them, and then try new ones. It was the stage of experimentation</div>
            <img src={sketches} alt='sketches' />
            <h2>Wireframes</h2>
            <div className='paragraph'>The wireframing process helped clean our designs and prepare them for the user testing phase.</div>
            <img src={wireframe} alt='wireframe' />
            <div className='paragraph'>We renamed the “Our Work” page as “Products”. On this page, we opted for a grid to display all of Mango Concept’s previous and future releases. The company had three products when we began this project, and were in the process of releasing two more. In this grid, all projects would be positioned amongst each other and information about each would be located in a second grid. Also on the page was the newly organized showcasing of past brands Mango Concept partnered with.<br /><br />
                The redesigned “Services” page is condensed and much more interactive for users. Everyone would be able to click an option and automatically be scrolled down the page to information about their selection.</div>
            <h2>Test</h2>
            <div className='paragraph'>
                We printed our wireframes to guerilla test with eight people. Each were given certain tasks to complete and we asked them to narrate their process as they did so.<br />
                <br />
                Sample scenario: You are the owner of a small business needing to revamp your online presence. You’re looking for someone with the expertise to help you with web design and user experience. You’ve heard about Mango Concept, and you want to find out if they can help you with your business’s web and UX areas..<br />
                <br />
                Conducting tests with high fidelity wireframes<br />
                (We let them know we were testing the website, not them! Users can be so self-conscious sometimes.)<br />
                <br />
                Overall, this testing phase was quite the learning process. We found that participants were able to complete the tasks seamlessly depending on the assigned scenario. User curiosity to explore certain aspects of the redesign was sometimes blocked due to the limited capabilities of our flat prototype, such as wanting to explore other subscription prices that were not provided by the flat design.<br />
                <br />
                Although our participants were still able to complete their tasks, my team and I knew that the user flows were not as absolute as we knew they could be.<br />
                <br />
                As a result, we took note of these issues so as to not repeat the same mistakes during our future endeavors.
            </div>
            <h2>Main issues discovered during test:</h2>
            <div className='paragraph'>Paper prototype did not portray all features.<br />
                Users were confused about the difference between “Products” and “Projects”.</div>

            <h2>Our solutions:</h2>
            <div className='paragraph'>
                Ensuring that our prototypes had extendable features (i.e., paper to pullout as a representation of dropdown menus or of a change in different options selected) would make future tests smoother.<br />
                Remove the “Projects” page and place its information under the “Products” page.
            </div>
            <h2>Mockup</h2>
            <div className='paragraph'>
                Keeping our previous issues and their solutions in mind during iteration, we created mockups. It was exciting to see our ideas being brought to life.<br />
                We experimented continuously with colors and graphics while keeping true to Mango Concept’s current color scheme. Because a mango was the logo, we wanted to have fun with its fruitiness. It was our job to breathe energy into its once lifeless theme.
            </div>
            <img src={mockup} alt='mockup' />
            <div className='paragraph'>Redesign of the other pages</div>
            <img src={mockup2} alt='mockup2' />
            <div className='paragraph'>
                New “Company” page — featuring fun bitmojis!<br />
                The inclusion of trustworthy, humanlike phrases such as “Incubate your ideas,” “Let’s get you social,” “Talk to us,” and “We got you” on the homepage acted as greetings to users.
            </div>
            <h2>Feedback from re-test:</h2>
            <div className='paragraph'>
                We found that 7/7 of users tested felt attracted to the brand due to the phrases and bitmoji squad images!
                “It feels very personable, like they’re willing to work with me instead of for me… for my money.” — User statement
            </div>
            <img src={feedback} alt='feedback' />
            <h2>Constraints</h2>
            <div className='paragraph'>
                During the entirety of this project, the technical constraints involved designing for desktop sizes, incorporating motion, and designing clear CTAs. Using Adobe Illustrator, Adobe color wheel, Sketch, and InVision we were able to deliver a clickable prototype that was ready for user feedback. Surpassing these constraints required consulting with our client, following web design conventions, and conducting user tests.
            </div>
            <h2>Retrospective</h2>
            <div className='paragraph'>
                I am slowly but surely becoming more comfortable with the sketching process of UX. I’m not the best artist, but replicating my ideas into physical form through sketches helped me realize which aspects of the ideas are doable and which ones aren’t. The entire sketching and prototyping process was a fun way to experiment with designs and see everything come to fruition.<br />
                <br />
                Communicating with a real client about their wants and needs for this website assisted me with understanding the flexibilities and restrictions I was allowed to work with. I have designed and coded websites before, but never from a UX perspective. It was usually designed with my own wants in mind whereas this project wasn’t. This project certainly presented a challenge that helped me approach designing differently.
            </div>
            <h2>Next Steps</h2>
            <h4>Usability Testing</h4>
            <div className='paragraph'>Test the prototype with actual users. My personal favorite for usability testing on prototypes is Maze.Design it’s easy to use and offers comprehensive data on your prototype.
            </div>
            <h4>Iterate</h4>
            <div className='paragraph'>Take the findings from the usability test and iterate upon the design also improve the user flow.
            </div>
            <h4>Conclusion</h4>
            <div className='paragraph'>There is no space for distractions on limited timelines you have to stay focused on the project and organize yourself. I timed myself and set limits for how much time I would spend on a given task. I tried to keep it as simple as possible, starting from the sketches and the user journey then everything just fell into place.
            </div>
            <h4>Final Thoughts</h4>
            <div className='paragraph'>Always trust your instinct and don’t be afraid to tweak your design here and there. If you compare my wireframes to the final design I made design choices to improve the final design and boy did they improve. Also use a software you are familiar with, you know the shortcuts and don’t have to spend much time figuring where things are.
            </div>
        <div className='t-heading-t'>
        “Creative and passionate.”
        </div>
        </div>
    )
}
