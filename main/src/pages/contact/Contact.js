import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className="item"><span className='main-text'>Хочешь поговорить?</span></div>
            <div className="item"><span className='text'>Я всегда открыта для общения и новых идей. Если тебе нужно обсудить фронтенд, помочь с багом или просто посоветовать, как пережить дедлайн — пишите мне!</span></div>
            <div className="item"><span className='text'>Вот мои контактные данные:</span></div>
            <div className="item"><span className='text'>Email: <a href='#'>miahoriacheva@gmail.com</a></span></div>
            <div className="item"><span className='text'>Telegram: <a href='#'>@Na_oni_915</a></span></div>
            <div className="item"><span className='text'>GitHub: <a href='#'>https://github.com/Na-oni</a></span></div>
            <div className="item"><span className='text'>LinkedIn: <a href='#'>https://www.linkedin.com/in/mia-horiacheva-69100a330/</a></span></div>
            <div className="item"><span className='text'>Не стесняйся обращаться, даже если тебе просто хочется задать вопрос или рассказать, какой классный проект ты сделал! Я всегда в поиске интересных людей и свежих идей.</span></div>
        </div>
    );
}

export default Contact;