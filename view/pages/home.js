import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth0 } from "@auth0/auth0-react";
import { faFileDownload,faCloudDownloadAlt,faStar, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './home.css'
import img2 from './assets/IMG-20201209-WA0012.jpg'

export default function Home(props) {
    const { isAuthenticated } = useAuth0();
    let map=[{title:"Design principles",url:"https://jfitzgeraldgroup.com/wp-content/uploads/2016/10/graphic-design-tools-Feature_1290x688_MS-1080x675.jpg", type:"soft",language:"English",lesson:"10",live:true,rate:4,votes:15},
    {title:"Design autonomy",url:"https://lh3.googleusercontent.com/JlePQ6By1eAoX7_a317nOB0K1OUUUQuY4o0x9VR8MdXYmmtUIDEPf7K7mvU9Dafii42zp0Xi6ljovJTc1W351Yhv898FHTqD3t0uhhY=w2000", type:"soft",language:"English",lesson:"15",live:true,rate:4,votes:15,},
    {title:"Python",url:"https://datawider.com/wp-content/uploads/2019/11/How-to-Learn-Python.jpg", type:"soft",language:"English",lesson:"13",live:false,rate:3,votes:10,},
    {title:"Bead Making", url:"https://i.pinimg.com/originals/c8/53/cc/c853cc676082686b1c897ff158aef280.jpg", type:"hard",language:"English",lesson:"14",live:true,rate:5,votes:15,},
    {title:"Sculpturing",url:"https://www.superprof.co.uk/blog/wp-content/uploads/2019/08/igor-ferreira-IgVO4R3AlaU-unsplash-1060x596.jpg", type:"hard",language:"English",lesson:"9",live:false,rate:4,votes:15,},
    {title:"Cooking Melon Soup",url:"https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/egusi-soup-fried.jpg", type:"hard",language:"English",lesson:"10",live:true,rate:3,votes:15,},
    {title:"Javascript",url:"https://www.simplilearn.com/ice9/free_resources_article_thumb/X_Reasons_to_learn_Javascript.jpg", type:"soft",language:"English",lesson:"11",live:true,rate:5,votes:15,},
    {title:"Webpack",url:"https://miro.medium.com/max/1634/1*Qo4yWofQHQKSOtLtTD54Wg.png", type:"soft",language:"English",lesson:"17",live:true,rate:5,votes:15,},
    {title:"React",url:"https://miro.medium.com/max/700/1*41E7KLIvzPvisZY_s4XR0A.png", type:"soft",language:"English",lesson:"11",live:false,rate:4,votes:25,},
    {title:"Cooking Banga soup",url:"https://sisijemimah.com/wp-content/uploads/2015/09/Banga-Soup.jpg", type:"hard",language:"English",lesson:"11",live:true,rate:4,votes:18,},
    {title:"Fixing light",url:"https://www.superprof.co.uk/blog/wp-content/uploads/2019/08/igor-ferreira-IgVO4R3AlaU-unsplash-1060x596.jpg", type:"hard",language:"English",lesson:"19",live:false,rate:5,votes:5,},
    {title:"Vue",url:"https://hackernoon.com/hn-images/1*ACR0gj0wbx91V_xgURifWg.png", type:"soft",language:"English",lesson:"8",live:true,rate:3,votes:15,}]
    
    const arr=(num)=>{
        let ar =[]
        for(let i=0;i<num;i++){
            ar.push(0)
        }
        return ar
    }
    return (
        <div className='cover-home'>
            <div className='explain'>
                <div className='left'>
                    <h1>Learn from </h1>
                    <h1 className='shift'>The best</h1>
                    <h4>Handpicked instructors and expertly crafted courses designed
                        for African crafts, skills and jobs.
                    </h4>
                </div>
                <img src={img2} alt="main-img" />
            </div>
            <div className='exp'>
                <div className='left'>
                    <h1>Find out more about us in   co-learners experience</h1>
                    <p>we believe that everyone should have the opportunity to 
                        create progress through technology and develop that skill.
                    </p>
                </div>
                <div className="right">
                    <div className='toter'>
                        <div className='card'>
                            <img src="https://findicons.com/files/icons/2711/free_icons_for_windows8_metro/128/define_location.png" />
                            <h4>Learn with experts</h4>
                            <p>With amazing skills our experts are here to help harness those potentials.</p>
                        </div>
                        <div className='card'>
                            <img src="https://findicons.com/files/icons/2711/free_icons_for_windows8_metro/128/define_location.png" />
                            <h4>Learn with experts</h4>
                            <p>With amazing skills our experts are here to help harness those potentials.</p>
                        </div>
                    </div>
                    <div className='toter'>
                        <div className='card'>
                            <img src="https://findicons.com/files/icons/2711/free_icons_for_windows8_metro/128/define_location.png" />
                            <h4>Learn with experts</h4>
                            <p>With amazing skills our experts are here to help harness those potentials.</p>
                        </div>
                        <div className='card'>
                            <img src="https://findicons.com/files/icons/2711/free_icons_for_windows8_metro/128/define_location.png" />
                            <h4>Learn with experts</h4>
                            <p>With amazing skills our experts are here to help harness those potentials.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='courses'>
                <h1>The world's largest selection of courses</h1>
                <p className='course-exp'>Choose from thousands of online videos with new videos or classes published daily</p>
                <div className='shows'>
                    {map.map((i,k)=>(
                        <div className='mini-card' onClick={()=>{isAuthenticated && props.history.push(`/course/${i.title}`) }}>
                            <img src={i.url} />
                            <div className="lang">
                                <div></div>
                                <p>{i.language}</p>
                            </div>
                            <h2>{i.title}</h2>
                            <div className='downloads'>
                                <div className='smaller'>
                                    <FontAwesomeIcon className="i" icon={faFileDownload} size="sm"/>
                                    <p>{i.lesson} lessons</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="i" icon={faCloudDownloadAlt} size="sm"/>
                                    <p>{i.live?"Live broadcast ":"Video classes"}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='stars'>
                                <div>
                                    {arr(i.rate).map(i=><FontAwesomeIcon className="i" icon={faStar} size="sm"/>)}
                                    <p>{i.votes}</p>
                                </div>
                                <FontAwesomeIcon className="i orange" icon={faArrowCircleRight} size="lg"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='soft'>
                <h1>Top Soft Skills Categories</h1>
                <div className='shows' >
                    {map.filter(i=>i.type=="soft").map(i=>(
                        <div className='cat' onClick={()=>{isAuthenticated && props.history.push(`/course/${i.title}`) }}>
                            <img src={i.url} />
                            <h3>{i.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='soft hard'>
                <h1>Top Hard Skills Categories</h1>
                <div className='shows'>
                    {map.filter(i=>i.type!="soft").map(i=>(
                        <div className='cat' onClick={()=>{isAuthenticated && props.history.push(`/course/${i.title}`) }}>
                            <img src={i.url} />
                            <h3>{i.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
