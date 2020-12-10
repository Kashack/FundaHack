import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload,faCloudDownloadAlt,faStar, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './home.css'
import img2 from './assets/IMG-20201209-WA0012.jpg'

export default function Home() {
    let map=[{title:"A big boy who lives in Calabar",language:"English",lesson:"10",live:true,rate:4,votes:15},
    {title:"A big boy who lives in Calabar",language:"English",lesson:"10",live:true,rate:4,votes:15,},
    {title:"A big boy who lives in Calabar",language:"English",lesson:"10",live:true,rate:4,votes:15,},
    {title:"A big boy who lives in Calabar",language:"English",lesson:"10",live:true,rate:4,votes:15,},
    {title:"A big boy who lives in Calabar",language:"English",lesson:"10",live:true,rate:4,votes:15,},
    {title:"A big boy who lives in Calabar",language:"English",lesson:"10",live:true,rate:4,votes:15,},
    {title:"A big boy who lives in Calabar",language:"English",lesson:"10",live:true,rate:4,votes:15,}]
    
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
                            <img src="" />
                            <h4>Learn with experts</h4>
                            <p>With amazing skills our experts are here to help harness those potentials.</p>
                        </div>
                        <div className='card'>
                            <img src="" />
                            <h4>Learn with experts</h4>
                            <p>With amazing skills our experts are here to help harness those potentials.</p>
                        </div>
                    </div>
                    <div className='toter'>
                        <div className='card'>
                            <img src="" />
                            <h4>Learn with experts</h4>
                            <p>With amazing skills our experts are here to help harness those potentials.</p>
                        </div>
                        <div className='card'>
                            <img src="" />
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
                        <div className='mini-card'>
                            <img src="" />
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
                <div className='shows'>
                    {map.map(i=>(
                        <div className='cat'>
                            <img src="" />
                            <h3>Python</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='soft hard'>
                <h1>Top Hard Skills Categories</h1>
                <div className='shows'>
                    {map.map(i=>(
                        <div className='cat'>
                            <img src="" />
                            <h3>Fishing</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
