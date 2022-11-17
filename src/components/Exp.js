import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaSchool } from "react-icons/fa"
import "./ExpStyle.css"
import React from 'react'

function Exp() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor="#70A37F">
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(255,255,255)', color: 'white' }}
                contentArrowStyle={{ borderRight: '20px solid  white' }}
                date= "2015 - 2019"
                iconStyle={{ background: '#70A37F', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title" style={{color: 'black'}}> Lycée Pierre Brossolette </h3>
                <p style={{ color: 'black' }}>
                    Baccalauréat Scientifique <br></br>Option Information et Création Numérique <br></br> Diplôme obtenu en 2019
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(255,255,255)', color: 'white' }}
                contentArrowStyle={{ borderRight: '20px solid  white' }}
                date= "2019 - 2022"
                iconStyle={{ background: '#70A37F', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title" style={{color: 'black'}}> Université Claude Bernard Lyon 1 </h3>
                <p style={{ color: 'black' }}>
                    Licence Informatique <br></br> Diplôme obtenu en 2022
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(255,255,255)', color: 'white' }}
                contentArrowStyle={{ borderRight: '20px solid  white' }}
                date= "2021"
                iconStyle={{ background: '#70A37F', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title" style={{color: 'black'}}> Restaurant Veng Hour (2 mois)</h3>
                <p style={{ color: 'black' }}>
                    Employé polyvalent, Vendeur et assistant cuisinier
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(255,255,255)', color: 'white' }}
                contentArrowStyle={{ borderRight: '20px solid  white' }}
                date= "2022"
                iconStyle={{ background: '#70A37F', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title" style={{color: 'black'}}> Stage OPALE Lyon 1 (2 mois)</h3>
                <p style={{ color: 'black' }}>
                    Contribution au projet OPALE : <br></br> Débogage, enrichissement et ajout de fonctionnalités au backend associé à l’application mobile. <br></br>
                     https://applimobile.univ-lyon1.fr/
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(255,255,255)', color: 'white' }}
                contentArrowStyle={{ borderRight: '20px solid  white' }}
                date= "2022 - en cours"
                iconStyle={{ background: '#70A37F', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title" style={{color: 'black'}}> Université Claude Bernard Lyon 1 </h3>
                <p style={{ color: 'black' }}>
                    Master Informatique (TIW)
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Exp