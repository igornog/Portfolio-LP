import Image from 'next/image'
import { Project } from './Project'

export default function Projects() {
  return (
    <section className="h-auto bg-black mt-12 mb-12">
      <h1 className='text-center mb-16 text-[3rem] font-heading font-bold'>Experiences</h1>
      <Project
        title={'Web Developer Junior'}
        company={'Big Box Outlet Store'}
        image={'/bbos.png'}
        stack={'HTML5 / CSS3 / JavaScript / jQuery / Shopify'}
      />
      <Project
        title={'Front End Developer Junior'}
        company={'Enext Consulting'}
        image={'/enext.png'}
        stack={'HTML5 / CSS3 / RestAPI / JavaScript / jQuery / React'}
      />
      <Project
        title={'Front End Developer Intermediate'}
        company={'Sami'}
        image={'/sami.png'}
        stack={'JavaScript / TypeScript / React / Redux / RestAPI / SASS'}
      />
      <Project
        title={'Front End Developer Intermediate'}
        company={'IntellectEU'}
        image={'/intellecteu.png'}
        stack={' JavaScript / TypeScript / React / Redux / RestAPI / SASS / Styled Components'}
      />
      <Project
        title={'Front End Developer Mid-Senior'}
        company={'YJCollective'}
        image={'/yjc.png'}
        stack={'NextJS / TypeScript / TailwindCSS / React / RestAPI / Jest / React Testing Library / ZOD'}
      />
    </section>
  )
}