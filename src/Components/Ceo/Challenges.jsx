import './Challenges.scss'
import { FiArrowDownRight } from "react-icons/fi";
import icon1 from '../../Assets/btn_icon.png';
const Challenges=()=>{
    return(<>

    <div className='your_challenges'>
      <div className='container'>
        <div class="top-content">
          <span class="meta">Our Achievements​</span>
          <h2 class="heading">WE ​<span className='text_grad_red'> UNDERSTAND</span> YOUR CHALLENGES</h2>
          <p className='description'>From facility directors, to nurses working on the floor, burnout is real. Our healthcare staff are the Unsung Heroes of society, seeking autonomy while still making an impact. All of our clients and talents are driven by a passion for making a difference in patients lives.​</p>
          <p className='description'>We've designed our staffing solutions to align the goals of healthcare institutions with those of our professionals, leading to better outcomes and shared growth and development. ​</p>
        </div>
        <div className='challanges_list'>
          <ul>
           <a href="/facilities"> <li>● Hassle-free Staffing Solutions: Unlock Your Potential, Effortlessly</li></a>
           <a href="/professional/Professionalperfectmatch"> <li>● Finding the Perfect Match Made Easy! Dynamic Squads CPR</li></a>
           <a href="/professionals/unsung-heroes"> <li className='active'>● Spotlight! Shift Champions, Unsung Heroes No More</li></a>
          <a href="/professional/Professionalhelpstheworld"> <li>● Seamless Pledge: Make a Meaningful Impact with Every Shift</li></a>
           <a href="/professional/Professionalgainawinning"><li>● EmpowerCare Academy! Elevate Your Healthcare Career</li></a>
          </ul>
        </div>
        <div class="bottom_content">
          <p className='description'>With EmpowerCare, you can achieve all of this while meeting your financial goals, gaining autonomy, flexibility, and freedom.</p>
          <a className='btn_red' href='/'>Real Stories, Real Impact <img src={icon1} /></a>
        </div>
      </div>
    </div>

  </>)
}
export default  Challenges;