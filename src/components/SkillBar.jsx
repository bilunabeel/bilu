import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCertificate} from '@fortawesome/free-solid-svg-icons'


const SkillBar = () => {
    const skills = [
        'GRAPHIC DESIGN','WEB DEVELOPMENT','SOCIAL MEDIA DESIGN', 'UI/UX DESIGN','LOGO/BRANDING'
    ]
  return (
    <div className='flex gap-8 justify-center items-center padding-x text-xl text-white dark:bg-black dark:border-y-2 bg-black_sec font-jost  w-full py-8'>
        <FontAwesomeIcon className=' text-primary' icon={faCertificate}/>
        {skills.map((skill,index)=>(
            <div key={index} className='flex gap-8 items-center'>
                <p>{skill}</p>
            <FontAwesomeIcon className='text-primary' icon={faCertificate}/>
            </div>
        ))}
    </div>
  )
}

export default SkillBar