import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';
import './confirmation.css';

interface Props {
  params: {
    lang: Locale;
  };
}

const ConfirmationPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main className='sign-up-main max-w-[550px]'>
      <span className='step-indicator'>
        {dict.signUp.step} <strong>3</strong> {dict.signUp.of}{' '}
        <strong>3</strong>
      </span>

      <h1 className='step-title'>{dict.signUp.step3.title}</h1>

      <ul className='confirmation-data-list'>
        <li>
          <span className='confirmation-data-label'>Email</span>
          <span className='confirmation-data-value'>example@gmail.com</span>
        </li>
        <li>
          <span className='confirmation-data-label'>Plan</span>
          <span className='confirmation-data-value'>Premium</span>
        </li>
        <li>
          <span className='confirmation-data-label'>
            {dict.signUp.step3.price}
          </span>
          <span className='confirmation-data-value'>MXN 299</span>
        </li>
      </ul>

      <button className='confirmation-next-btn'>
        {dict.signUp.step3.confirmBtn}
      </button>
    </main>
  );
};

export default ConfirmationPage;