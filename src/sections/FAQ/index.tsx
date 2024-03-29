import Faq from '../../components/Faq';
import faqData from './faq';
import s from './style.module.css';

export default function FAQ() {
  return (
    <div className={s.background} id="faq">
      <div className={s.faqContainer}>
        <h3 className={s.faqTitle}>FAQs</h3>
        <div className={s.faqBox}>
          <Faq data={faqData.students} />
        </div>
      </div>
    </div>
  );
}
