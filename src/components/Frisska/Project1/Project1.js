import React from 'react'
import designImg from './design.png'
import timeline from './timeline.png'
import interview from './interview.png'
import persona from './persona.png'
import empathy from './empathy.png'
import affinity from './affinity.png'
import affinity2 from './affinity2.png'
import storyboard from './storyboard.png'
import userflow from './userflow.png'
import lowWireframe from './low-wireframe.png'
import highWireframe from './high-wireframe.png'
import colorscheme from './colorscheme.png'
import typo from './typo.png'
import iconography from './iconography.png'
import logotype from './logotype.png'
import prototype1 from './prototype1.png'
import prototype2 from './prototype2.png'


export const Project1 = () => {
    return (
        <div className='project1'>
            <h2>Design Process</h2>
            <img src={designImg} alt="design" />
            <h2>Project timelines</h2>
            <img src={timeline} alt="timeline" />
            <h2>Problem statements and challenges</h2>
            <div className='paragraph'>
                <ul>
                    <li>Frisska is one of salad provider which provide online delivery services through their website. Many people are using their phones to shop for food online. However, per the client’s most recent assessment on Google Analytics, more than 80% of their potential customers were shown to be abandoning their mobile sessions early on.</li>
                    <li>People were generally supportive of the mission of organics such as CERES, which included ‘supporting local business’, ‘ethical’, and ‘caring about health and the environment’.</li>
                    <li>Customers were mostly busy, health-conscious females who enjoyed the convenience aspects of online shopping.</li>
                    <li>Lack of healthy food delivery options; Lack of time in people’s lives & many food delivery companies don’t offer a lot of room for personalizing their own salad orders.</li>
                    <br />
                    <br />
                    As part of the challenge, I was responsible for the user experience research, and the user interface design.
                </ul>
            </div>

            <h2>The Solution</h2>
            <div className='paragraph'>
                <ul>
                    <li>My goal here was to pave a clearer road for future customer journeys through Zomato or Swiggy, a set of navigational signposts and feedbacks targeting the early-to-mid stages of the online experience. </li>
                    <li>For our major customer group, busy-ness meant the ordering process should be presented as simple as possible.</li>
                    <li>Some people voiced concerns around state of their delivered produce.</li>
                    <li>Most people preferred to buy exactly what they have in mind, i.e. to see what they will be receiving. They also felt like consistency and customisability should have been a given in their orders.</li>
                    <li>Let’s create an online e-commerce that specifically focuses on the delivery of fresh salads along with the option of personalizing ones orders & ingredients. It will be a quick service and alternative to having to bring healthy food from home</li>
                </ul>
            </div>

            <h2>User Research</h2>
            <div className='paragraph'>
                We conducted user interviews, surveys, mapped the customer journey and also create a comparative/competitive market analysis.
                <br />
                <br />
                In the research, we intend to understand the user needs, behaviors, and motivations. By conducting user surveys and interviews, the design team was able to gather both qualitative and quantitative in a way that informed who the users would be, the context in which they would use the product, and what the user’s needs were.
                <br />
                <br />
                From our interviews and survey we found out our users are between 20–39 years old and..
                <br />
                <br />
                <ul>
                    <li>Of the 70 people we surveyed, the great majority are knowledgable in terms of nutrition and healthy eating habits.
                    </li>
                    <li>But if they had a choice they would choose a quick and easy fast food option over quality of food due to lack of time.
                    </li>
                    <li>Most cook at home and prefer to save money by taking food from home to their work.
                    </li>
                    <li>There is social pressure for younger adults to eat healthy for look fit & healthy while the older adults eat healthy to take care of their health.</li>
                </ul>
            </div>

            <h2>User Interviews</h2>
            <div className='paragraph'>
                To understand the individuals who would be using the Frisska app, we went around Pune, interviewing individuals of various demographic and ethnographic backgrounds. The following is a brief of some of the questions.
            </div>
            <img src={interview} alt="interview" />
            <h2>Pain points</h2>
            <div className='paragraph'>
                <ul>
                    <li>For our major customer group, busy-ness meant the ordering process should be presented as simple as possible.</li>
                    <li>Some people voiced concerns around state of their delivered produce.</li>
                    <li>Most people preferred to buy exactly what they have in mind, i.e. to see what they will be receiving. They also felt like consistency and customisability should have been a given in their orders.</li>
                </ul>
            </div>

            <h2>User Persona</h2>
            <div className='paragraph'>
                Creating user personas is one of the most important elements in our product development cycle. At the end of the day, we were designing for customers that don’t have time to prepare their own meals, this created fictional representations of these individuals to help guide our design process and address their pain-points and frustrations.
            </div>
            <img src={persona} alt="persona" />
            <h2>Empathy Mapping</h2>
            <img src={empathy} alt="empathy" />
            <h2>AFFINITY DIAGRAMS</h2>
            <img src={affinity} alt="affinity" />
            <img src={affinity2} alt="affinity2" />
            <h2>Story Board</h2>
            <div className='paragraph'>
                Afinity Diagrams were used in our research process to identify patterns in the data collected from user interviews, industry reports, and technological reviews. As designers, we like to put our research into a visual format and find that this helps us to sort all of our findings out.
            </div>
            <img src={storyboard} alt="storyboard" />
            <h2>User Flow</h2>
            <div className='paragraph'>
                The user flow is the next progression in the Information Architecture phase of our product development cycle. We use user-flows to map out how a user will use a product, in this case, the Frisska — and also make sure that the user is able to work through features through a logical progression.
            </div>
            <img src={userflow} alt="userflow" />
            <h2>Lo-Fidelity Wireframe & Sitemap</h2>
            <div className='paragraph'>
                In our design process, we use low-fidelity sketches as our starting point for visual design.
                <br />
                <br />
                We find that this is the best way to illustrate the concepts that we are trying to build out and it is also a great way to explore many different ideas without significant time and resource investment. User testing is incorporated into our sketching process with paper prototyping and we are able to see what ideas have the potential to work and which ones don’t. We also simply enjoy the process of throwing a lot of ideas out there and this is one of the best ways to do it
                <br />
                <br />
                As designers, compare the role that we play in product development to that of architects in the construction of a building (hence the term information architecture). The sitemap is our blueprint for how a product (in this case, Salad App) will be structured and provides the outline of how we will design (“build”) it.
            </div>
            <img src={lowWireframe} alt="low-wireframe" />
            <h2>High-Fidelity Wireframes</h2>
            <div className='paragraph'>
                Selected samples of the high fidelity wireframes designed for the Frisska App.</div>
            <img src={highWireframe} alt="high-wireframe" />
            <h2>Design System</h2>
            <h2>Color Scheme</h2>
            <div className='paragraph'>
                I went for a bright color scheme. Bright colors create appetite and sap green is also a color that triggers salad
            </div>
            <img src={colorscheme} alt="colorscheme" />
            <h2>Typography</h2>
            <img src={typo} alt="typo" />
            <h2>Iconography</h2>
            <div className='paragraph'>
                When it comes to icons and saving I time I don't recommended drawing them out. As much as I enjoy illustrating my own icons time is not on my side right now. I recommended an icon library like Material Design icons or as I used for this app The Noun Project. However, The Noun Project requires a subscription to be able to fully customize their icons if you don’t purchase a subscription you must give the author attribution.
            </div>
            <img src={iconography} alt="iconography" />
            <h2>Logotype</h2>
            <div className='paragraph'>
                I wanted an obvious name but also a significant logo so FarmCrate was the best choice for the name once I thought of that I though a crate as a logo and soon after some iterations I came up with combining a farm and a crate.
            </div>
            <img src={logotype} alt="logotype" />
            <h2>Prototype</h2>
            <div className='paragraph'>
                On the third day I finished up the final designs and I started to prototype. I preferred to wait until this stage mainly because if I start prototyping during the wireframing phase although they are Hi-Fi (and I often do this) a lot of time is spent on interaction screens. For this project I added the interaction screens, hover actions, screen overlays, and pressed buttons after the design was finalized to save time.
            </div>
            <img src={prototype1} alt="prototype1" />
            <h2>Prototype</h2>
            <div className='paragraph'>
                On the third day I finished up the final designs and I started to prototype. I preferred to wait until this stage mainly because if I start prototyping during the wireframing phase although they are Hi-Fi (and I often do this) a lot of time is spent on interaction screens. For this project I added the interaction screens, hover actions, screen overlays, and pressed buttons after the design was finalized to save time.
            </div>
            <img src={prototype2} alt="prototype2" />
            <h2>Next Steps</h2>
            <h3>Usability Testing</h3>
            <div className='paragraph'>
                Test the prototype with actual users. My personal favorite for usability testing on prototypes is Maze.Design it’s easy to use and offers comprehensive data on your prototype.
            </div>
            <h3>Iterate</h3>
            <div className='paragraph'>
                Take the findings from the usability test and iterate upon the design also improve the user flow.

            </div>
            <h3>Conclusion</h3>
            <div className='paragraph'>
                There is no space for distractions on limited timelines you have to stay focused on the project and organize yourself. I timed myself and set limits for how much time I would spend on a given task. I tried to keep it as simple as possible, starting from the sketches and the user journey then everything just fell into place.

            </div>
            <h3>Final Thoughts</h3>
            <div className='paragraph'>
                Always trust your instinct and don’t be afraid to tweak your design here and there. If you compare my wireframes to the final design I made design choices to improve the final design and boy did they improve. Also use a software you are familiar with, you know the shortcuts and don’t have to spend much time figuring where things are.
            </div>
        </div>


    )
}
