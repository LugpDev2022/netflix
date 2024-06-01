import { FaCheckCircle } from 'react-icons/fa';

import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';
import './plans.css';

interface Props {
  params: {
    lang: Locale;
  };
}

// https://www.netflix.com/signup/planform
const PlansPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main className='sign-up-main max-w-[700px]'>
      <span className='step-indicator'>
        {dict.signUp.step} <strong>2</strong> {dict.signUp.of}{' '}
        <strong>3</strong>
      </span>
      <h1 className='step-title'>Choose the plan that’s right for you</h1>

      <div className='grid grid-cols-3 gap-2 lg:gap-3'>
        {/* TODO: Add background radiants */}
        <div className='plan-card-selected bg-blue-600'>
          <h2>Premium</h2>
          <sub>4k + HDR</sub>

          <FaCheckCircle />
        </div>
        <div className='plan-card'>
          <h2>Standard</h2>
          <sub>1080p</sub>

          <FaCheckCircle />
        </div>
        <div className='plan-card'>
          <h2>Standard with ads</h2>
          <sub>1080p</sub>

          <FaCheckCircle />
        </div>
      </div>

      <ul className='plan-feature-list'>
        <li>
          <h3>Monthly Price</h3>
          <p>$299</p>
        </li>
        <li>
          <h3>Video and sound quality </h3>
          <p>Best</p>
        </li>
      </ul>

      <button className='plans-next-btn'>Next</button>
    </main>
  );
};

export default PlansPage;