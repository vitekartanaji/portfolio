import React from 'react';
import { languages, tools } from "../data";
import Bar from '@/components/Bar';

const Resume = () => {
  return (
    <>
    <div className='px-6 py-2'>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Bachelor's Of Computer Science (BCS)</h5>
            <p className='font-semibold'>Solapur University Solapur (2021)</p>
            <p className="my-3">I have completed my Bachelor's degree in Computer Science from Solapur University Solapur in 2021 with A grade.</p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Software Engineer</h5>
            <p className='font-semibold'>Dreamcare Developer's Pvt. Ltd.(Jan-2023 - Present)</p>
            <p className="my-3">Working as Software Engineer with the skills like ReactJs, NextJs, JavaScript, TypeScript, Bootstrap, Tailwind CSS, HTML 5, CSS 3. </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages And Frameworks</h5>
          <div className="my-2">
          {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>

      </div>
    </div>
    </>
  )
};

export default Resume;