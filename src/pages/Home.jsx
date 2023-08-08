import React from 'react'
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PersonalDetails from '../components/PersonalDetails';
import Education2 from '../components/Education2';
import Skills from '../components/Skills';
import Experience2 from '../components/Experience2';
import Project2 from '../components/Project2';
import Interest from '../components/Interest';
import Achivement from '../components/Achivement';
import Midd from '../components/Mid';
import Resume from '../components/Resume';
import Resume2 from '../components/Resume2';
import Resume3 from '../components/Resume3';
import NotFound from './NotFound';
import Nav from './Nav';
import About from './About';
import '../components/Shapes.css'
import '../pages/Home.css'

const Home = () => {

    const [data, setData] = useState({});
  const [step, setStep] = useState(1);

  let forms = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
        case 2:
        return (
          <Education2
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
        case 3:
        return (
          <Skills data={data} step={step} setData={setData} setStep={setStep} />
        );
        case 4:
        return (
          <Experience2
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
        case 5:
        return (
          <Project2
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
        case 6:
        return (
          <Interest
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
        case 7:
        return (
          <Achivement
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
        case 8:
        return (
          <Midd
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
        case 9:
        return <Resume data={data} step={step} setStep={setStep} />;
        case 10:
            return <Resume2 data={data} step={step} setStep={setStep} />;
            case 11:
        return <Resume3 data={data} step={step} setStep={setStep} />;
        default:
        return <NotFound />;
    }
}
  return (
    <>
         <BrowserRouter>
            <Nav/>

            <div className=' allcontain backk'>
              <div className='x'></div>
              <Routes className="">
                <Route exact index path="/" element={forms()} className="white"/>
                <Route  path="/about" element={<About/>} />
              </Routes>
            </div>
      </BrowserRouter>
    </>
  )
}

export default Home