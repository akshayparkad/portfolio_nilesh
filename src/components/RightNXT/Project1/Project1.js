import React from 'react'
import './Project1.css'
import designImg from './design.png'
import timeline from './timeline.png'
import persona from './persona.png'
import persona2 from './persona2.png'
import empathy from './empathy.png'

export const Project1 = () => {
    return (
        <div className='project1'>
            <h2>Design Process</h2>
            <img src={designImg} alt="design" />
            <h2>Project timelines</h2>
            <img src={timeline} alt="timeline" />
            <h2>Problem statements and challenges</h2>

            <div className='paragraph'>
                <ol>
                    <li>What is a Business Account ?</li>
                    <li>How do I add / claim my business on RigthNXT</li>
                    <li>How can I correct incorrect information about a business?</li>
                    <li>How often can I update my listing?</li>
                    <li>What do you do with the contact information of a Business?</li>
                    <li>What happens when I close a Business listing?</li>
                    <li>Why must I add my Business in one of the standard set of categories mentioned on RightNXT ?</li>
                    <li>How can I report duplicate business pages?</li>
                </ol>
            </div>

            <h2>The Solution</h2>
            <b>1. What is a Business Account ?</b>
            <div className='paragraph'>
                <ul>
                    <li>A business account is wherein, from, you manage to present the personality of your business to your customers and the entire world, manage the business activity and do much more. For example:-
                        Post photos and update business information.
                    </li>
                    <li>Keep your Business Hours of operation up to date so consumers searching for your business can easily find it.
                    </li>
                    <li>Keep Track on customer analytics
                    </li>
                    <li>Respond to a review with a public comment.
                    </li>
                </ul>
            </div>
            <b>2. How do I add / claim my business on RigthNXT?</b>
            <div className='paragraph'>
                <ul>
                    <li>It is a simple two steps task.  Visit https://www.business.rightnxt.com , search for your Business to claim it. If it's not found then go for option named “Add your Business” and register your Business with us. Your Business will be visible to everybody once our team verifies it.
                    </li>
                </ul>
            </div>
            <b>3. How can I correct incorrect information about a business?</b>
            <div className='paragraph'>
                <ul>
                    <li>
                        If you are a buyer then you can click the “Report” button and fill in the form with the details you want to update or you can write us at support@rightnxt.com
                    </li>
                    <li>If you are a Business owner then you can correct information by "claiming" or registering your business on the RightNXT Business page (https://www.business.rightnxt.com). Once claimed or registered, you will have the opportunity to make edits and add content to your business profile page.
                    </li>
                </ul>
            </div>
            <b>4. How often can I update my listing?</b>
            <div className='paragraph'>
                <ul>
                    <li>
                        After you claim/register your Business listing you can update it as many times as you want to update it; even every moment :)
                    </li>
                </ul>
            </div>
            <b>5. What do you do with the contact information of a Business?</b>
            <div className='paragraph'>
                <ul>
                    <li>
                        The Business Contact information is displayed on the Business Listing page. The Business profile owner has full rights to edit or update the information after he/she claims the Business profile page.
                    </li>
                </ul>
            </div>
            <b>6. What happens when I close a Business listing?</b>
            <div className='paragraph'>
                <ul>
                    <li>
                        Listings should only be CLOSED if you are no longer doing the registered Business. If a Business has been transferred or if there is any other information which needs to be updated, please edit the Business Information instead of closing/unlisting the registered business.
                    </li>
                    <li>
                        When you close a listing we will no longer show it on RightNXT and no user will be able to access your Business listing.
                    </li>
                </ul>
            </div>
            <b>7. Why must I add my Business in one of the standard set of categories mentioned on RightNXT?</b>
            <div className='paragraph'>
                <ul>
                    <li>
                        The standard set of categories are created to simplify the searches by consumers so that they can find your Business according to the standardized categories easily.
                    </li>
                    <li>If you still feel you have "categories" that you would like to be shown but are not within our standardized list, please use the “Tags” section in your Business details page so that a user can also search your Business according to the tags created by you.</li>
                </ul>
            </div>
            <b>8. How can I report duplicate business pages?</b>
            <div className='paragraph'>
                <ul>
                    <li>
                        Please click on the report button on the business profile page and mention this issue along with the link of the duplicate business or you can call our customer care helpline.
                    </li>
                </ul>
            </div>
            <h2>User Research</h2>
            <p className='paragraph'>
                RightNXT is the local expert, and an easy to use online resource for finding information and insights on businesses and retailers.

                RightNXT provides you the glimpse of all physical outlets that helps you to choose which outlet is the right one for you to visit. We empower you with much needed information like “variety an outlet deals in, currently running offers, unique services an outlet provides, the experience of fellow workers and much more”. With all this powerful information, buyers can just sit and relax while scrolling and choosing the apt outlet that would just match their needs right away!
                <br />
                <br />
                Now, hurdles like “Finding that right outlet after visiting many of the wrong outlets, desired products or variety not available, unnecessarily higher prices, outlets closed uninformed for the day, vendor’s inappropriate behavior etc.” in your favorite activity of ‘SHOPPING’ are minimized while your monetary, fuel and time savings are maximized.
                <br />
                <br />
                Every month we help millions of consumers find valuable local business information from driving directions and hours of operation to Web links and customer reviews.
                <br />
                <br />
                Our Vision  -
                <br />
                <br />
                To make RightNXT the Google equivalent for finding right local businesses for your needs. For this, we have created RightNXt in such a way that all the business owners can manage the profile of their Business like the way they do for themselves on Facebook.
                <br />
                <br />
                With this a buyer get more clarity about the Business by looking at its profile (Videos, Photos and Authentic Reviews Etc.) And gets transparency by directly interacting with the Business he/she wants.
            </p>
            <h2>Pain Points</h2>
            <p className='paragraph'>
                People are busy in the modern world. To pace up with the fast running world, they have found a shortcut of online shopping. However, they know the consequences of online shopping too. They know it’s a hit and trail game. They may get the product of good or bad quality, at appropriate price or hiked rates, within the desired timeline or delayed, return issues and the list goes endless while the only convenience that you get is the relief from commuting and the transportation expense. However, many a times, you end up paying the delivery charges too.
                <br />
                <br />
                So, why do we still think shopping online is a smart move?? Would you not like to have something that could give you the option of choosing the bests at appropriate rates, with almost no waiting time and at your most suitable convenience while you know the vendor personally, product directly.
                <br />
                <br />
                Yes, it can happen when you know which shop exactly you need to visit and shop at.
                <br />
                <br />
                Also knowing local is a necessity. Imagine you happen to move to a new city and need to have your car washed at a reasonably priced good car wash center. Now, your next move would be to ask someone in your network or neighborhood etc.
                <br />
                <br />
                So, RightNxt shows you all the shops online, provides the information about all of the services they provide, the way they service and much more. In short, it enables you to choose the most suitable, that too independently and most efficiently And will help you get things done in your city in a fun and easy way.
            </p>
            <h2>User Persona</h2>
            <p className='paragraph'>
                Creating user personas is one of the most important elements in our product development cycle. At the end of the day, we were designing for customers that don’t have time to prepare their own meals, this created fictional representations of these individuals to help guide our design process and address their pain-points and frustrations.
            </p>
            <img src={persona} alt="persona" />
            <img src={persona2} alt="persona2" />
            <h2>Empathy Mapping</h2>
            <img src={empathy} alt="empathy" />
            <h2>Design System</h2>
        </div>
    )
}
